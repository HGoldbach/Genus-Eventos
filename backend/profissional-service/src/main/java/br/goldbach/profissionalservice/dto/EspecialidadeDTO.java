package br.goldbach.profissionalservice.dto;

import lombok.*;

import java.io.Serializable;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@EqualsAndHashCode
public class EspecialidadeDTO implements Serializable {
    private Long id;
    private String descricao;
}
