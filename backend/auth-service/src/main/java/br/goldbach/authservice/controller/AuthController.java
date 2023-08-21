package br.goldbach.authservice.controller;

import br.goldbach.authservice.dto.UsuarioResponse;
import br.goldbach.authservice.service.AuthService;
import br.goldbach.authservice.dto.ContaDTO;
import br.goldbach.authservice.dto.UsuarioDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/conta")
@RequiredArgsConstructor
public class AuthController {
    private final AuthService authService;
    private final AuthenticationManager authenticationManager;

    @PostMapping("/register")
    public ResponseEntity<?> criarConta(@RequestBody UsuarioDTO usuarioDTO) {
        return authService.criarConta(usuarioDTO);
    }

    @PostMapping("/login")
    public ResponseEntity<UsuarioResponse> getToken(@RequestBody ContaDTO contaDTO) {
        Authentication authenticate = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(contaDTO.getEmail(), contaDTO.getSenha()));
        if (authenticate.isAuthenticated()) {
            UsuarioResponse usuario = authService.login(contaDTO);
            return ResponseEntity.ok().body(usuario);
        } else {
            throw new RuntimeException("invalid access");
        }
    }

    @GetMapping("/validate")
    public String validateToken(@RequestParam("token") String token) {
        authService.validateToken(token);
        return "Token is valid";
    }

    // Meus endpoints




    /*
    @PostMapping("/login")
    public ResponseEntity<Boolean> login(@RequestBody ContaDTO conta) {
        return authService.login(conta);
    }

     */
}
