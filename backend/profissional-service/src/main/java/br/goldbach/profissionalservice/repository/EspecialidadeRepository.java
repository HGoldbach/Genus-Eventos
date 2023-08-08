package br.goldbach.profissionalservice.repository;

import br.goldbach.profissionalservice.model.Especialidade;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface EspecialidadeRepository extends JpaRepository<Especialidade, Long> {
    Optional<Especialidade> findByDescricao(String descricao);
}
