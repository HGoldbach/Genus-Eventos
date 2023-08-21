package br.goldbach.clienteservice.controller;

import br.goldbach.clienteservice.dto.ClienteDTO;
import br.goldbach.clienteservice.model.Cliente;
import br.goldbach.clienteservice.repository.ClienteRepository;
import br.goldbach.clienteservice.service.ClienteService;
import jakarta.ws.rs.Path;
import org.modelmapper.ModelMapper;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/clientes")
public class ClienteController {

    private final ClienteService clienteService;

    public ClienteController(ClienteService clienteService) {
        this.clienteService = clienteService;
    }

    @GetMapping
    public ResponseEntity<List<ClienteDTO>> buscarTodos() {
        return clienteService.buscarTodos();
    }

    @GetMapping("/{id}")
    public ResponseEntity<ClienteDTO> buscarPorId(@PathVariable("id") Long id) {
        return clienteService.buscarPorId(id);
    }

    @GetMapping("/cpf/{cpf}")
    public ResponseEntity<ClienteDTO> buscarPorCpf(@PathVariable("cpf") String cpf) {
        return clienteService.buscarPorCpf(cpf);
    }

    @GetMapping("/email/{email}")
    public ResponseEntity<ClienteDTO> buscarPorEmail(@PathVariable("email") String email) {
        return clienteService.buscarPorEmail(email);
    }

    @PostMapping
    public ResponseEntity<ClienteDTO> inserir(@RequestBody Cliente cliente) {
        return clienteService.inserir(cliente);
    }

    @PutMapping("/{id}")
    public ResponseEntity<ClienteDTO> alterar(@PathVariable("id") Long id, @RequestBody Cliente cliente) {
        return clienteService.alterar(id, cliente);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<ClienteDTO> remover(@PathVariable("id") Long id) {
        return clienteService.remover(id);
    }



}
