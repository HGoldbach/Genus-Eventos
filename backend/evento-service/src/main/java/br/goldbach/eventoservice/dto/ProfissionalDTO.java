package br.goldbach.eventoservice.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ProfissionalDTO implements Serializable{
    private Long id;
    private String nome;
    private String email;
    private String cpf;
    private String telefone;
    private EspecialidadeDTO especialidade;
}
