package br.goldbach.profissionalservice.service;

import br.goldbach.profissionalservice.controller.ProfissionalController;
import br.goldbach.profissionalservice.dto.ProfissionalDTO;
import br.goldbach.profissionalservice.model.Especialidade;
import br.goldbach.profissionalservice.model.Profissional;
import br.goldbach.profissionalservice.repository.EspecialidadeRepository;
import br.goldbach.profissionalservice.repository.ProfissionalRepository;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ProfissionalService {
    private final ProfissionalRepository profissionalRepository;
    private final EspecialidadeRepository especialidadeRepository;
    private final ModelMapper modelMapper;

    public ResponseEntity<List<ProfissionalDTO>> buscarTodos() {
        return ResponseEntity.ok().body(profissionalRepository.findAll()
                .stream()
                .map(m -> modelMapper.map(m, ProfissionalDTO.class))
                .toList());
    }

    public ResponseEntity<ProfissionalDTO> buscarPorId(Long id) {
        Optional<Profissional> profissional = profissionalRepository.findById(id);
        if (profissional.isPresent()) {
            return ResponseEntity.ok().body(modelMapper.map(profissional, ProfissionalDTO.class));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    public ResponseEntity<ProfissionalDTO> inserir(Profissional profissional) {
        Optional<Especialidade> especialidade = especialidadeRepository.findByDescricao(profissional.getEspecialidade().getDescricao());
        especialidade.ifPresent(profissional::setEspecialidade);
        profissionalRepository.save(profissional);
        return ResponseEntity.status(201).body(modelMapper.map(profissional, ProfissionalDTO.class));
    }

    public ResponseEntity<ProfissionalDTO> alterar(Profissional profissional) {
        Optional<Profissional> p = profissionalRepository.findById(profissional.getId());
        if (p.isPresent()) {
            p.get().setNome(profissional.getNome());
            p.get().setEmail(profissional.getEmail());
            p.get().setTelefone(profissional.getTelefone());
            p.get().setCpf(profissional.getCpf());
            profissionalRepository.save(p.get());
            return ResponseEntity.ok().body(modelMapper.map(p, ProfissionalDTO.class));
        } else {
            return ResponseEntity.notFound().build();
        }


    }

    public ResponseEntity<ProfissionalDTO> remover(Long id) {
        Optional<Profissional> profissional = profissionalRepository.findById(id);
        if (profissional.isPresent()) {
            profissionalRepository.delete(profissional.get());
            return ResponseEntity.status(204).body(modelMapper.map(profissional, ProfissionalDTO.class));
        } else {
            return ResponseEntity.notFound().build();
        }

    }

    public ResponseEntity<ProfissionalDTO> buscarPorEspecialidade(String especialidade) {
        List<Profissional> profissionais = profissionalRepository.findAll();
        Profissional profissional =  profissionais.stream()
                .filter(p -> Objects.equals(p.getEspecialidade().getDescricao(), especialidade))
                .findAny()
                .orElse(null);
        return ResponseEntity.ok().body(modelMapper.map(profissional, ProfissionalDTO.class));
    }
}
