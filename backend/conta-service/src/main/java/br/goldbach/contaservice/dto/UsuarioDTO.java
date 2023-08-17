package br.goldbach.contaservice.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UsuarioDTO implements Serializable {
    private String nome;
    private String cpf;
    private String email;
    private String telefone;
    private String senha;
}
