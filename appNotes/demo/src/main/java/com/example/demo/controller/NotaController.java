package com.example.demo.controller;

import com.example.demo.model.Nota;
import com.example.demo.repository.NotaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController // Esta clase es un controlador REST
@RequestMapping("/api/notas") //Esta API estará mapeando en esta ruta, al consumirla debe tener esta URL
@CrossOrigin(origins = "http://localhost:5173") // Para que se conecte nuestro frontend REACT
public class NotaController {

    @Autowired NotaRepository notaRepository;

    // Obtener todas las notas
    @GetMapping
    public List<Nota> getAll() {        // Método con una lista de tipo Nota obtiene todas las notas
        return notaRepository.findAll();
    }

    // Crear una nueva nota
    @PostMapping
    public Nota createNota(@RequestBody Nota nota){ // Método de tipo Nota crea una nueva nota
        return notaRepository.save(nota);           // Cuando ya está todo validado guarda la nota en la DB
    }

    // Editar nota
    @PutMapping("/{id}") // Cada nota tiene un ID en NotaRepository de tipo Long
    public Nota updateNota(@PathVariable Long id, @RequestBody Nota notaDetalles){ // porque es la nueva nota desde el FrontEnd
        Optional<Nota> optionalNota = notaRepository.findById(id); // Primero verifica si existe la nota

        if(optionalNota.isPresent()){
            Nota nota = optionalNota.get();   // mi nota va a ser igual a la nota que existe
            nota.setTitulo(notaDetalles.getTitulo()); // y asignarle el nuevo titulo
            nota.setDescripcion(notaDetalles.getDescripcion()); // asignarle la nueva descripción

            return notaRepository.save(nota);
        }else {
            return null;
        }
    }

    @DeleteMapping("/{id}")
    public String deleteNota(@PathVariable Long id){
        Optional<Nota> optionalNota = notaRepository.findById(id); // Primero verifica si existe la nota

        if(optionalNota.isPresent()){                  // Si existe entonces
            notaRepository.delete(optionalNota.get()); // Eliminamos la nota
            return "Nota eliminada correctamente";     // Retornamos mensaje de exito
        }else {
            return null;                               // Si no existe no retornamos nada
        }
    }

}
