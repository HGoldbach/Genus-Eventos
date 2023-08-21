package br.goldbach.profissionalservice.controller;

import br.goldbach.profissionalservice.dto.EspecialidadeDTO;
import br.goldbach.profissionalservice.dto.ProfissionalDTO;
import br.goldbach.profissionalservice.repository.ProfissionalRepository;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.DynamicPropertyRegistry;
import org.springframework.test.context.DynamicPropertySource;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.testcontainers.containers.PostgreSQLContainer;
import org.testcontainers.junit.jupiter.Container;
import org.testcontainers.junit.jupiter.Testcontainers;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@Testcontainers
@SpringBootTest
@AutoConfigureMockMvc
public class ProfissionalControllerTests {

    @Container
    static PostgreSQLContainer postgreSQLContainer = new PostgreSQLContainer("postgres:15-alpine");

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper objectMapper;
    @Autowired
    private ProfissionalRepository profissionalRepository;

    @DynamicPropertySource
    static void setProperties(DynamicPropertyRegistry registry) {
        registry.add("spring.datasource.url", postgreSQLContainer::getJdbcUrl);
        registry.add("spring.datasource.username", postgreSQLContainer::getUsername);
        registry.add("spring.datasource.password", postgreSQLContainer::getPassword);
    }

    @Test
    void shouldCreateProfissional() throws Exception {
        ProfissionalDTO profissional = getProfissionalDTO();
        EspecialidadeDTO especialidade = new EspecialidadeDTO();
        String especialidadeString = objectMapper.writeValueAsString(especialidade);
        String profissionalString = objectMapper.writeValueAsString(profissional);
        mockMvc.perform(MockMvcRequestBuilders.post("/api/especialidades")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(especialidadeString));
        mockMvc.perform(MockMvcRequestBuilders.post("/api/profissionais")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(profissionalString))
                .andExpect(status().isCreated());
        Assertions.assertEquals(1, profissionalRepository.findAll().size());
    }

    @Test
    void shouldReturnProfissional() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.get("/api/profissionais"))
                .andExpect(status().isOk());
    }

    @Test
    void shouldReturnProfissionalPorId() throws Exception {
        ProfissionalDTO profissional = getProfissionalDTO();
        String profissionalString = objectMapper.writeValueAsString(profissional);
        EspecialidadeDTO especialidade = new EspecialidadeDTO();
        String especialidadeString = objectMapper.writeValueAsString(especialidade);

        mockMvc.perform(MockMvcRequestBuilders.post("/api/especialidades")
                .contentType(MediaType.APPLICATION_JSON)
                .content(especialidadeString));

        mockMvc.perform(MockMvcRequestBuilders.post("/api/profissionais")
                .contentType(MediaType.APPLICATION_JSON)
                .content(profissionalString));

        mockMvc.perform(MockMvcRequestBuilders.get("/api/profissionais/{id}", 1))
                .andExpect(status().isOk());
    }

    @Test
    void shouldChangeProfissional() throws Exception {

        ProfissionalDTO profissional = getProfissionalDTO();
        String profissionalString = objectMapper.writeValueAsString(profissional);
        EspecialidadeDTO especialidade = new EspecialidadeDTO();
        String especialidadeString = objectMapper.writeValueAsString(especialidade);

        mockMvc.perform(MockMvcRequestBuilders.post("/api/especialidades")
                .contentType(MediaType.APPLICATION_JSON)
                .content(especialidadeString));

        mockMvc.perform(MockMvcRequestBuilders.post("/api/profissionais")
                .contentType(MediaType.APPLICATION_JSON)
                .content(profissionalString));

        mockMvc.perform(MockMvcRequestBuilders.put("/api/profissionais")
                .contentType(MediaType.APPLICATION_JSON)
                .content(profissionalString))
                .andExpect(status().isOk());
    }

    @Test
    void shouldRemoveProfissional() throws Exception {

        ProfissionalDTO profissional = getProfissionalDTO();
        String profissionalString = objectMapper.writeValueAsString(profissional);
        EspecialidadeDTO especialidade = new EspecialidadeDTO();
        String especialidadeString = objectMapper.writeValueAsString(especialidade);

        mockMvc.perform(MockMvcRequestBuilders.post("/api/especialidades")
                .contentType(MediaType.APPLICATION_JSON)
                .content(especialidadeString));

        mockMvc.perform(MockMvcRequestBuilders.post("/api/profissionais")
                .contentType(MediaType.APPLICATION_JSON)
                .content(profissionalString));

        mockMvc.perform(MockMvcRequestBuilders.delete("/api/profissionais/{id}", 1))
                .andExpect(status().isNoContent());

        mockMvc.perform(MockMvcRequestBuilders.get("/api/profissionais/{id}", 1))
                .andExpect(status().isNotFound());
    }

    private ProfissionalDTO getProfissionalDTO() {
        return ProfissionalDTO.builder()
                .id(1L)
                .nome("Carla Press")
                .cpf("123456789")
                .email("carla@gmail.com")
                .telefone("12345678")
                .especialidade(new EspecialidadeDTO())
                .build();
    }


}
