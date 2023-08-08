package br.goldbach.eventoservice.repository;

import br.goldbach.eventoservice.model.Evento;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EventoRepository extends JpaRepository<Evento, Long> {
}
