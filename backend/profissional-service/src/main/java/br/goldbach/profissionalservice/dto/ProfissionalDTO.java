package br.goldbach.profissionalservice.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ProfissionalDTO implements Serializable {
    private Long id;
    private String nome;
    private String email;
    private String cpf;
    private String telefone;
    private EspecialidadeDTO especialidade;
}
