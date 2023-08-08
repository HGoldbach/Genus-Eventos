package br.goldbach.contaservice.service;

import br.goldbach.contaservice.dto.ContaDTO;
import br.goldbach.contaservice.model.Conta;
import br.goldbach.contaservice.repository.ContaRepository;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ContaService {
    private final ContaRepository contaRepository;
    private final ModelMapper modelMapper;

    public ResponseEntity<ContaDTO> criarConta(Conta conta) {
        Optional<Conta> contaVerificacao = contaRepository.findByUsuario(conta.getUsuario());
        if (contaVerificacao.isPresent()) {
            return ResponseEntity.status(409).build();
        } else {
            contaRepository.save(conta);
            return ResponseEntity.ok().body(modelMapper.map(conta, ContaDTO.class));
        }
    }

    public ResponseEntity<Boolean> login(Conta conta) {
        Optional<Conta> contaVerificacao = contaRepository.findByUsuario(conta.getUsuario());
        if (contaVerificacao.isPresent()) {
            if (contaVerificacao.get().getSenha().equals(conta.getSenha())) {
                return ResponseEntity.ok().body(Boolean.TRUE);
            } else {
                return ResponseEntity.status(404).body(Boolean.FALSE);
            }
        } else {
            return ResponseEntity.status(404).body(Boolean.FALSE);
        }
    }
}
