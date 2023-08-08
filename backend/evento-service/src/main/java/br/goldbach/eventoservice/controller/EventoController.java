package br.goldbach.eventoservice.controller;

import br.goldbach.eventoservice.dto.EventoDTO;
import br.goldbach.eventoservice.model.Evento;
import br.goldbach.eventoservice.service.EventoService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/eventos")
@RequiredArgsConstructor
public class EventoController {
    private final EventoService eventoService;

    @GetMapping
    public ResponseEntity<List<EventoDTO>> buscarTodos() {
        return eventoService.buscarTodos();
    }

    @GetMapping("/{id}")
    public ResponseEntity<EventoDTO> buscarPorId(@PathVariable("id") Long id) {
        return eventoService.buscarPorId(id);
    }

    @PostMapping
    public ResponseEntity<EventoDTO> inserir(@RequestBody EventoDTO evento) {
        return eventoService.inserir(evento);
    }
}
