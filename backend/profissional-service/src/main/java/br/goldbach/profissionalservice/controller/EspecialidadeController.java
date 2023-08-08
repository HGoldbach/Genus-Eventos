package br.goldbach.profissionalservice.controller;

import br.goldbach.profissionalservice.dto.EspecialidadeDTO;
import br.goldbach.profissionalservice.model.Especialidade;
import br.goldbach.profissionalservice.service.EspecialidadeService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/especialidades")
@RequiredArgsConstructor
public class EspecialidadeController {
    private final EspecialidadeService especialidadeService;

    @GetMapping
    public ResponseEntity<List<EspecialidadeDTO>> buscarTodos() {
        return especialidadeService.buscarTodos();
    }

    @GetMapping("/{id}")
    public ResponseEntity<EspecialidadeDTO> buscarPorId(@PathVariable("id") Long id) {
        return especialidadeService.buscarPorId(id);
    }

    @PostMapping
    public ResponseEntity<EspecialidadeDTO> inserir(@RequestBody Especialidade especialidade) {
        return especialidadeService.inserir(especialidade);
    }

    @PutMapping("/{id}")
    public ResponseEntity<EspecialidadeDTO> alterar(@PathVariable("id") Long id, @RequestBody Especialidade especialidade) {
        return especialidadeService.alterar(id, especialidade);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<EspecialidadeDTO> remover(@PathVariable("id") Long id) {
        return especialidadeService.remover(id);
    }
}
