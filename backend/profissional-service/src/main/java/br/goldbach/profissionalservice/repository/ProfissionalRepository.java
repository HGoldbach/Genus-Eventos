package br.goldbach.profissionalservice.repository;

import br.goldbach.profissionalservice.model.Profissional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProfissionalRepository extends JpaRepository<Profissional, Long> {
}
