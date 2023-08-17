package br.goldbach.contaservice.service;

import br.goldbach.contaservice.dto.ContaDTO;
import br.goldbach.contaservice.dto.UsuarioDTO;
import br.goldbach.contaservice.model.Conta;
import br.goldbach.contaservice.repository.ContaRepository;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.DigestUtils;
import org.springframework.web.reactive.function.BodyInserters;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ContaService {
    private final ContaRepository contaRepository;
    private final WebClient.Builder webClientBuilder;
    private final ModelMapper modelMapper;

    public ResponseEntity<UsuarioDTO> criarConta(UsuarioDTO usuarioDTO) {
        Optional<Conta> contaVerificacao = contaRepository.findByEmail(usuarioDTO.getEmail());
        if (contaVerificacao.isPresent()) {
            return ResponseEntity.status(409).build();
        } else {
            String sha256Senha = DigestUtils.md5DigestAsHex(usuarioDTO.getSenha().getBytes());
            contaRepository.save(new Conta(0L, usuarioDTO.getEmail(), sha256Senha));
            webClientBuilder.build().post()
                    .uri("http://api-gateway/api/clientes")
                    .contentType(MediaType.APPLICATION_JSON)
                    .body(BodyInserters.fromObject(usuarioDTO))
                    .exchange()
                    .block();
            return ResponseEntity.ok().body(modelMapper.map(usuarioDTO, UsuarioDTO.class));
        }
    }

    public ResponseEntity<Boolean> login(Conta conta) {
        Optional<Conta> contaVerificacao = contaRepository.findByEmail(conta.getEmail());
        if (contaVerificacao.isPresent()) {
            String sha256Senha = DigestUtils.md5DigestAsHex(conta.getSenha().getBytes());
            if (contaVerificacao.get().getSenha().equals(sha256Senha)) {
                return ResponseEntity.ok().body(Boolean.TRUE);
            } else {
                return ResponseEntity.status(404).body(Boolean.FALSE);
            }
        } else {
            return ResponseEntity.status(404).body(Boolean.FALSE);
        }
    }

    public ResponseEntity<List<ContaDTO>> buscarTodas() {
        return ResponseEntity.status(200).body(this.contaRepository.findAll().stream()
                .map(c -> modelMapper.map(c, ContaDTO.class))
                .toList());
    }
}
