package br.goldbach.authservice.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ContaDTO implements Serializable {
    private Long id;
    private String email;
    private String senha;
}
