package br.goldbach.contaservice.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ContaDTO implements Serializable {
    private Long id;
    private String usuario;
    private String senha;
}
