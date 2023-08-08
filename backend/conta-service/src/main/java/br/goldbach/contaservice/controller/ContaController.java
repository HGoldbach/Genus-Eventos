package br.goldbach.contaservice.controller;

import br.goldbach.contaservice.dto.ContaDTO;
import br.goldbach.contaservice.model.Conta;
import br.goldbach.contaservice.service.ContaService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/conta")
@RequiredArgsConstructor
@CrossOrigin
public class ContaController {
    private final ContaService contaService;

    @PostMapping
    public ResponseEntity<ContaDTO> criarConta(@RequestBody Conta conta) {
        return contaService.criarConta(conta);
    }

    @PostMapping("/login")
    public ResponseEntity<Boolean> login(@RequestBody Conta conta) {
        return contaService.login(conta);
    }
}
