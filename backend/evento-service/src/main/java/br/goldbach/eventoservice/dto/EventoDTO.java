package br.goldbach.eventoservice.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class EventoDTO implements Serializable {
    private Long id;
    private String descricao;
    private ClienteDTO cliente;
    private List<ProfissionalDTO> profissional;
}
