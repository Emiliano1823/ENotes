package com.example.demo.repository;

import com.example.demo.model.Nota;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository // Para decirle a JAVA que esto es un repositorio
public interface NotaRepository extends JpaRepository<Nota, Long> { // Hereda de Nota.java enviando la clase Nota y el tipo de dato



}
