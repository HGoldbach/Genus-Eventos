package br.goldbach.authservice.repository;

import br.goldbach.authservice.model.Conta;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface AuthRepository extends JpaRepository<Conta, Long> {
    Optional<Conta> findByEmail(String email);
}
