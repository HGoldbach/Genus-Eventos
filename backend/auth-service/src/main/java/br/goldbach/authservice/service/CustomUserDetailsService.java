package br.goldbach.authservice.service;

import br.goldbach.authservice.config.CustomUserDetails;
import br.goldbach.authservice.dto.ContaDTO;
import br.goldbach.authservice.model.Conta;
import br.goldbach.authservice.repository.AuthRepository;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Component
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    private AuthRepository authRepository;
    @Autowired
    private ModelMapper modelMapper;
    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Optional<ContaDTO> conta = authRepository.findByEmail(email).map(m -> modelMapper.map(m, ContaDTO.class));
        return conta.map(CustomUserDetails::new).orElseThrow(() -> new UsernameNotFoundException("user not found with the email: " + email));

    }
}
