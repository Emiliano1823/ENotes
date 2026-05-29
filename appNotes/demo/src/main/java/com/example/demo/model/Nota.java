package com.example.demo.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data                  // Loombok inyecta setter y getters
@NoArgsConstructor     // Un constructor sin argumentos
@AllArgsConstructor    // Un constructor con argumentos
@Entity                // De jakarta persistence, es una entidad que vamos a almacenar en la DB, nos declara la clase como
// entidad, algo que existe en la DB
@Table(name = "notas") // Creamos la tabla "notas"
public class Nota {

    @Id                // Toda base de datos tiene un ID
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Va a ser generado por una estrategia de tipo GenerationType
    private Long id;

    @Column(nullable = false) // Creamos una columna donde insertamos el titulo de la nota
    private String titulo;

    @Column(nullable = false) // Columna descripción
    private String descripcion;

}