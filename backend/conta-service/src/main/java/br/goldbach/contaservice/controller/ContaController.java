package br.goldbach.contaservice.controller;

import br.goldbach.contaservice.dto.ContaDTO;
import br.goldbach.contaservice.dto.UsuarioDTO;
import br.goldbach.contaservice.model.Conta;
import br.goldbach.contaservice.service.ContaService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/conta")
@RequiredArgsConstructor
@CrossOrigin
public class ContaController {
    private final ContaService contaService;

    @GetMapping
    public ResponseEntity<List<ContaDTO>> buscarTodas() {
        return contaService.buscarTodas();
    }
    @PostMapping
    public ResponseEntity<UsuarioDTO> criarConta(@RequestBody UsuarioDTO usuarioDTO) {
        return contaService.criarConta(usuarioDTO);
    }

    @PostMapping("/login")
    public ResponseEntity<Boolean> login(@RequestBody Conta conta) {
        return contaService.login(conta);
    }
}
