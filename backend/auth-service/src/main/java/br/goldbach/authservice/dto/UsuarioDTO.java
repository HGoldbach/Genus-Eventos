package br.goldbach.authservice.dto;

import br.goldbach.authservice.model.UserType;
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
    private UserType tipo;
}
