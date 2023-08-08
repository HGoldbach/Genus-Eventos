package br.goldbach.profissionalservice.controller;

import br.goldbach.profissionalservice.dto.ProfissionalDTO;
import br.goldbach.profissionalservice.model.Profissional;
import br.goldbach.profissionalservice.service.ProfissionalService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/profissionais")
@RequiredArgsConstructor
public class ProfissionalController {
    private final ProfissionalService profissionalService;

    @GetMapping
    public ResponseEntity<List<ProfissionalDTO>> buscarTodos() {
        return profissionalService.buscarTodos();
    }

    @GetMapping("/{id}")
    public ResponseEntity<ProfissionalDTO> buscarPorId(@PathVariable("id") Long id) {
        return profissionalService.buscarPorId(id);
    }

    @GetMapping("/especialidade/{especialidade}")
    public ResponseEntity<ProfissionalDTO> buscarPorEspecialidade(@PathVariable("especialidade") String especialidade) {
        return profissionalService.buscarPorEspecialidade(especialidade);
    }

    @PostMapping
    public ResponseEntity<ProfissionalDTO> inserir(@RequestBody Profissional profissional) {
        return profissionalService.inserir(profissional);
    }

    @PutMapping
    public ResponseEntity<ProfissionalDTO> alterar(@RequestBody Profissional profissional) {
        return profissionalService.alterar(profissional);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<ProfissionalDTO> remover(@PathVariable("id") Long id) {
        return profissionalService.remover(id);
    }
}
