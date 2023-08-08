package br.goldbach.clienteservice.service;

import br.goldbach.clienteservice.dto.ClienteDTO;
import br.goldbach.clienteservice.model.Cliente;
import br.goldbach.clienteservice.repository.ClienteRepository;
import org.modelmapper.ModelMapper;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;
import java.util.Optional;

@Service
public class ClienteService {
    private ClienteRepository clienteRepository;
    private ModelMapper modelMapper;

    public ClienteService(ClienteRepository clienteRepository, ModelMapper modelMapper) {
        this.clienteRepository = clienteRepository;
        this.modelMapper = modelMapper;
    }

    public ResponseEntity<List<ClienteDTO>> buscarTodos() {
        return ResponseEntity.ok().body(clienteRepository.findAll().stream().map(m -> modelMapper.map(m, ClienteDTO.class)).toList());
    }

    public ResponseEntity<ClienteDTO> inserir(@RequestBody Cliente cliente) {
        clienteRepository.save(cliente);
        return ResponseEntity.status(201).body(modelMapper.map(cliente, ClienteDTO.class));
    }

    public ResponseEntity<ClienteDTO> buscarPorId(Long id) {
        Optional<Cliente> cliente = clienteRepository.findById(id);
        if (cliente.isPresent()) {
            return ResponseEntity.ok().body(modelMapper.map(cliente, ClienteDTO.class));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    public ResponseEntity<ClienteDTO> buscarPorCpf(String cpf) {
        Optional<Cliente> cliente = clienteRepository.findByCpf(cpf);
        if (cliente.isPresent()) {
            return ResponseEntity.ok().body(modelMapper.map(cliente, ClienteDTO.class));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    public ResponseEntity<ClienteDTO> alterar(Long id, Cliente cliente) {
        Optional<Cliente> c = clienteRepository.findById(id);
        if (c.isPresent()) {
            c.get().setNome(cliente.getNome());
            c.get().setEmail(cliente.getEmail());
            c.get().setCpf(cliente.getCpf());
            c.get().setTelefone(cliente.getTelefone());
            clienteRepository.save(c.get());
            return ResponseEntity.ok().body(modelMapper.map(c, ClienteDTO.class));
        } else {
            return ResponseEntity.notFound().build();
        }

    }

    public ResponseEntity<ClienteDTO> remover(Long id) {
        Optional<Cliente> cliente = clienteRepository.findById(id);
        if (cliente.isPresent()) {
            clienteRepository.delete(cliente.get());
            return ResponseEntity.ok().body(modelMapper.map(cliente, ClienteDTO.class));
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
