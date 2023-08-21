package br.goldbach.profissionalservice.controller;

import br.goldbach.profissionalservice.dto.EspecialidadeDTO;
import br.goldbach.profissionalservice.repository.EspecialidadeRepository;
import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.type.TypeReference;
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
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.testcontainers.containers.PostgreSQLContainer;
import org.testcontainers.junit.jupiter.Container;
import org.testcontainers.junit.jupiter.Testcontainers;

import java.util.List;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@Testcontainers
@SpringBootTest
@AutoConfigureMockMvc
public class EspecialidadeControllerTests {

    @Autowired
    private EspecialidadeRepository especialidadeRepository;

    @Autowired
    private ObjectMapper objectMapper;

    @Autowired
    private MockMvc mockMvc;

    @Container
    static PostgreSQLContainer postgreSQLContainer = new PostgreSQLContainer("postgres:15-alpine");

    @DynamicPropertySource
    static void setProperties(DynamicPropertyRegistry registry) {
        registry.add("spring.datasource.url", postgreSQLContainer::getJdbcUrl);
        registry.add("spring.datasource.username", postgreSQLContainer::getUsername);
        registry.add("spring.datasource.password", postgreSQLContainer::getPassword);
    }

    @Test
    void shouldCreateEspecialidade() throws Exception {

        EspecialidadeDTO especialidade = new EspecialidadeDTO(1L,"Musico");
        String especialidadeString = objectMapper.writeValueAsString(especialidade);

        mockMvc.perform(MockMvcRequestBuilders.post("/api/especialidades")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(especialidadeString))
                .andExpect(status().isCreated());

        Assertions.assertEquals(1, especialidadeRepository.findAll().size());
    }

    @Test
    void shouldReturnAllEspecialidades() throws Exception {

        EspecialidadeDTO especialidade = new EspecialidadeDTO(1L,"Musico");
        String especialidadeString = objectMapper.writeValueAsString(especialidade);
        EspecialidadeDTO especialidade2 = new EspecialidadeDTO(2L, "Bartender");
        String especialidade2String = objectMapper.writeValueAsString(especialidade2);

        mockMvc.perform(MockMvcRequestBuilders.post("/api/especialidades")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(especialidadeString))
                .andExpect(status().isCreated());

        mockMvc.perform(MockMvcRequestBuilders.post("/api/especialidades")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(especialidade2String))
                .andExpect(status().isCreated());

        MvcResult result = mockMvc.perform(MockMvcRequestBuilders.get("/api/especialidades"))
                .andExpect(status().isOk())
                .andReturn();

        String responseBody = result.getResponse().getContentAsString();
        List<EspecialidadeDTO> especialidadesList = objectMapper
                .readValue(responseBody, new TypeReference<List<EspecialidadeDTO>>() {});

        Assertions.assertEquals(especialidade, especialidadesList.get(0));
        Assertions.assertEquals(especialidade2, especialidadesList.get(1));
    }

    @Test
    void shouldReturnEspecialidadeById() throws Exception {

        EspecialidadeDTO especialidade = new EspecialidadeDTO(1L, "Musico");
        String especialidadeString = objectMapper.writeValueAsString(especialidade);

        mockMvc.perform(MockMvcRequestBuilders.post("/api/especialidades")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(especialidadeString))
                .andExpect(status().isCreated());

        MvcResult result = mockMvc.perform(MockMvcRequestBuilders.get("/api/especialidades/{id}", 1))
                .andExpect(status().isOk())
                .andReturn();

        String responseBody = result.getResponse().getContentAsString();
        EspecialidadeDTO especialidadeActual = objectMapper.readValue(responseBody, EspecialidadeDTO.class);
        Assertions.assertEquals(especialidade, especialidadeActual);
    }

    @Test
    void shouldDeleteEspecialidade() throws Exception {
        EspecialidadeDTO especialidade = new EspecialidadeDTO(1L, "Musico");
        String especialidadeString = objectMapper.writeValueAsString(especialidade);

        mockMvc.perform(MockMvcRequestBuilders.post("/api/especialidades")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(especialidadeString))
                .andExpect(status().isCreated());

        mockMvc.perform(MockMvcRequestBuilders.delete("/api/especialidades/{id}", especialidade.getId()))
                .andExpect(status().isOk());
    }

    @Test
    void shouldChangeEspecialidade() throws Exception {
        EspecialidadeDTO especialidade = new EspecialidadeDTO(1L, "Musico");
        String especialidadeString = objectMapper.writeValueAsString(especialidade);

        mockMvc.perform(MockMvcRequestBuilders.post("/api/especialidades")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(especialidadeString))
                .andExpect(status().isCreated());

        especialidade.setDescricao("Bartender");
        especialidadeString = objectMapper.writeValueAsString(especialidade);

        MvcResult result = mockMvc.perform(MockMvcRequestBuilders.put("/api/especialidades/{id}", especialidade.getId())
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(especialidadeString))
                .andExpect(status().isOk())
                .andReturn();

        String responseBody = result.getResponse().getContentAsString();
        EspecialidadeDTO especialidadeActual = objectMapper.readValue(responseBody, EspecialidadeDTO.class);
        Assertions.assertNotEquals(especialidadeActual, new EspecialidadeDTO(1L, "Musico"));
    }
}
