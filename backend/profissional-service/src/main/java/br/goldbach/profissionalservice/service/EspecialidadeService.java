package br.goldbach.profissionalservice.service;

import br.goldbach.profissionalservice.dto.EspecialidadeDTO;
import br.goldbach.profissionalservice.model.Especialidade;
import br.goldbach.profissionalservice.repository.EspecialidadeRepository;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class EspecialidadeService {
    private final EspecialidadeRepository especialidadeRepository;
    private final ModelMapper modelMapper;

    public ResponseEntity<List<EspecialidadeDTO>> buscarTodos() {
        return ResponseEntity.ok().body(especialidadeRepository.findAll().stream().map(m -> modelMapper.map(m, EspecialidadeDTO.class)).toList());
    }

    public ResponseEntity<EspecialidadeDTO> buscarPorId(Long id) {
        Optional<Especialidade> especialidade = especialidadeRepository.findById(id);
        if (especialidade.isPresent()) {
            return ResponseEntity.ok().body(modelMapper.map(especialidade, EspecialidadeDTO.class));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    public ResponseEntity<EspecialidadeDTO> inserir(Especialidade especialidade) {
        especialidadeRepository.save(especialidade);
        return ResponseEntity.ok().body(modelMapper.map(especialidade, EspecialidadeDTO.class));
    }

    public ResponseEntity<EspecialidadeDTO> alterar(Long id, Especialidade especialidade) {
        Optional<Especialidade> e = especialidadeRepository.findById(id);
        if (e.isPresent()) {
            e.get().setDescricao(especialidade.getDescricao());
            especialidadeRepository.save(e.get());
            return ResponseEntity.ok().body(modelMapper.map(e, EspecialidadeDTO.class));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    public ResponseEntity<EspecialidadeDTO> remover(Long id) {
        Optional<Especialidade> e = especialidadeRepository.findById(id);
        if (e.isPresent()) {
            especialidadeRepository.delete(e.get());
            return ResponseEntity.ok().body(modelMapper.map(e, EspecialidadeDTO.class));
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
