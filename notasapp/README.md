# 📝 Notes App

Aplicación web Full Stack para la gestión de notas desarrollada con **Spring Boot**, **Java**, **React**, **Node.js** y **Base de Datos H2**.

## 📖 Descripción

**Notes App** es una aplicación que permite crear, visualizar, editar y eliminar notas de forma sencilla e intuitiva. Este proyecto fue desarrollado para practicar la construcción de una arquitectura Full Stack moderna, integrando un backend RESTful con Spring Boot y un frontend dinámico con React.

## ✨ Características

* ➕ Crear nuevas notas.
* 📋 Visualizar todas las notas almacenadas.
* ✏️ Editar notas existentes.
* 🗑️ Eliminar notas.
* 💾 Persistencia de datos mediante H2 Database.
* 🔗 Comunicación entre frontend y backend mediante API REST.
* 📱 Diseño responsive para diferentes tamaños de pantalla.

## 🛠️ Tecnologías Utilizadas

### Backend

* Java
* Spring Boot
* Spring Data JPA
* Maven
* H2 Database

### Frontend

* React
* JavaScript
* Vite
* CSS3

### Herramientas

* Node.js
* Git
* GitHub
* Postman

## 📂 Estructura del Proyecto

```text
notes-app/
│
├── backend/
│   ├── src/main/java
│   ├── src/main/resources
│   └── pom.xml
│
├── frontend/
│   ├── src
│   ├── public
│   └── package.json
│
└── README.md
```

## 🚀 Instalación y Ejecución

### 1. Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/notes-app.git
cd notes-app
```

### 2. Ejecutar el Backend

```bash
cd backend
mvn spring-boot:run
```

El backend se ejecutará en:

```text
http://localhost:8080
```

### 3. Ejecutar el Frontend

```bash
cd frontend
npm install
npm run dev
```

El frontend estará disponible en:

```text
http://localhost:5173
```

## 🗄️ Base de Datos H2

La consola de administración de H2 puede consultarse en:

```text
http://localhost:8080/h2-console
```

Configuración por defecto:

```text
JDBC URL: jdbc:h2:mem:testdb
Username: sa
Password:
```

## 📡 API REST

| Método | Endpoint      | Descripción             |
| ------ | ------------- | ----------------------- |
| GET    | `/notes`      | Obtener todas las notas |
| GET    | `/notes/{id}` | Obtener una nota por ID |
| POST   | `/notes`      | Crear una nueva nota    |
| PUT    | `/notes/{id}` | Actualizar una nota     |
| DELETE | `/notes/{id}` | Eliminar una nota       |

## 🎯 Objetivos del Proyecto

* Implementar operaciones CRUD completas.
* Desarrollar una API REST con Spring Boot.
* Consumir servicios REST desde React.
* Gestionar persistencia de datos con JPA y H2.
* Aplicar buenas prácticas de desarrollo Full Stack.

## 📸 Capturas de Pantalla

Agrega aquí imágenes o GIFs que muestren el funcionamiento de la aplicación.

```markdown
![Pantalla Principal](./screenshots/home.png)
```

## 🔮 Mejoras Futuras

* Implementar autenticación de usuarios.
* Utilizar una base de datos relacional como MySQL o PostgreSQL.
* Agregar búsqueda y filtrado de notas.
* Incorporar categorías o etiquetas.
* Desplegar la aplicación en la nube.

## 👨‍💻 Autor

**Jesús Emiliano López Espinoza**

Ingeniero en Sistemas Computacionales apasionado por el desarrollo de software, la programación Full Stack y la creación de soluciones tecnológicas innovadoras.

* GitHub: https://github.com/TU-USUARIO
* LinkedIn: https://linkedin.com/in/TU-PERFIL

---

⭐ Si este proyecto te resulta útil, considera darle una estrella al repositorio.
