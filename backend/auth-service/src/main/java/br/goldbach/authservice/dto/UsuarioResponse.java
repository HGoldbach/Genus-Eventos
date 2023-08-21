package br.goldbach.authservice.dto;

import br.goldbach.authservice.model.UserType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UsuarioResponse implements Serializable {
    private String email;
    private String token;
    private UserType tipo;
}
