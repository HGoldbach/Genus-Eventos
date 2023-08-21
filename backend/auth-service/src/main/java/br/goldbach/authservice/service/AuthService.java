package br.goldbach.authservice.service;

import br.goldbach.authservice.dto.UsuarioResponse;
import br.goldbach.authservice.repository.AuthRepository;
import br.goldbach.authservice.dto.ContaDTO;
import br.goldbach.authservice.dto.UsuarioDTO;
import br.goldbach.authservice.model.Conta;
import io.jsonwebtoken.Jws;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.util.DigestUtils;
import org.springframework.web.reactive.function.BodyInserters;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AuthService {
    private final AuthRepository authRepository;
    private final WebClient.Builder webClientBuilder;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final ModelMapper modelMapper;


    public ResponseEntity<?> criarConta(UsuarioDTO usuarioDTO) {
        Optional<Conta> contaVerificacao = authRepository.findByEmail(usuarioDTO.getEmail());
        if (contaVerificacao.isPresent()) {
            return ResponseEntity.status(409).build();
        } else {
            authRepository.save(new Conta(0L, usuarioDTO.getEmail(), passwordEncoder.encode(usuarioDTO.getSenha())));

            String tokenTemporario = generateToken(usuarioDTO.getEmail());

            webClientBuilder.build().post()
                    .uri("http://api-gateway/api/clientes")
                    .contentType(MediaType.APPLICATION_JSON)
                    .header(HttpHeaders.AUTHORIZATION, "Bearer " + tokenTemporario)
                    .body(BodyInserters.fromObject(usuarioDTO))
                    .exchange()
                    .block();


            return ResponseEntity.status(201).build();
        }
    }

    public UsuarioResponse login(ContaDTO contaDTO) {
        String tokenTemporario = generateToken(contaDTO.getEmail());

        UsuarioResponse usuario = webClientBuilder.build().get()
                .uri("http://api-gateway/api/clientes/email/{email}", contaDTO.getEmail())
                .header(HttpHeaders.AUTHORIZATION, "Bearer " + tokenTemporario)
                .retrieve()
                .bodyToMono(UsuarioResponse.class)
                .block();

        usuario.setToken(tokenTemporario);
        return usuario;
    }

    public String generateToken(String email) {
        return jwtService.generateToken(email);
    }

    public void validateToken(String token) {
        jwtService.validateToken(token);
    }

}
