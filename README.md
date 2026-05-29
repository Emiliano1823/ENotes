# 📝 ENotes

Aplicación web Full Stack para la gestión de notas desarrollada con **Spring Boot**, **Java**, **React**, **Vite** y **Base de Datos H2**.

## 📖 Descripción

**ENotes** es una aplicación que permite crear, visualizar, editar y eliminar notas mediante una interfaz web moderna y sencilla.

El proyecto está compuesto por:

* **Backend:** API REST desarrollada con Spring Boot.
* **Frontend:** Aplicación SPA desarrollada con React y Vite.
* **Base de Datos:** H2 Database para almacenamiento de datos durante el desarrollo.

## ✨ Características

* ➕ Crear notas.
* 📋 Listar todas las notas.
* ✏️ Editar notas existentes.
* 🗑️ Eliminar notas.
* 🔄 Comunicación Frontend ↔ Backend mediante API REST.
* 💾 Persistencia de datos con H2 Database.
* 📱 Diseño responsive.

---

## 🛠️ Tecnologías Utilizadas

### Backend

* Java
* Spring Boot
* Spring Data JPA
* Maven
* H2 Database

### Frontend

* React
* Vite
* JavaScript
* CSS3

### Herramientas

* Node.js
* Git
* GitHub
* Postman

---

## 📂 Estructura del Proyecto

```text
ENOTES/
│
├── appNotes/                 # Backend Spring Boot
│   ├── .mvn/
│   ├── src/
│   ├── target/
│   ├── pom.xml
│   ├── mvnw
│   └── mvnw.cmd
│
├── notasapp/                 # Frontend React + Vite
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── main.jsx
│   │   └── index.css
│   ├── package.json
│   ├── vite.config.js
│   └── index.html
│
└── README.md
```

---

## 🚀 Instalación y Ejecución

### 1. Clonar el repositorio

```bash
git clone https://github.com/TU-USUARIO/ENotes.git
cd ENotes
```

---

### 2. Ejecutar el Backend

```bash
cd appNotes
./mvnw spring-boot:run
```

En Windows:

```bash
mvnw.cmd spring-boot:run
```

El backend estará disponible en:

```text
http://localhost:8080
```

---

### 3. Ejecutar el Frontend

```bash
cd notasapp
npm install
npm run dev
```

El frontend estará disponible en:

```text
http://localhost:5173
```

---

## 🗄️ Base de Datos H2

La consola H2 puede consultarse desde:

```text
http://localhost:8080/h2-console
```

Configuración por defecto:

```text
JDBC URL: jdbc:h2:mem:testdb
User Name: sa
Password:
```

---

## 📡 API REST

| Método | Endpoint      | Descripción             |
| ------ | ------------- | ----------------------- |
| GET    | `/notes`      | Obtener todas las notas |
| GET    | `/notes/{id}` | Obtener una nota por ID |
| POST   | `/notes`      | Crear una nueva nota    |
| PUT    | `/notes/{id}` | Actualizar una nota     |
| DELETE | `/notes/{id}` | Eliminar una nota       |

---

## 🎯 Objetivos del Proyecto

* Implementar operaciones CRUD completas.
* Construir una API REST con Spring Boot.
* Consumir servicios REST desde React.
* Gestionar persistencia de datos mediante JPA.
* Aplicar buenas prácticas de desarrollo Full Stack.

---

## 📸 Capturas de Pantalla

### Pantalla Principal

Agrega aquí las capturas de tu aplicación:

```markdown
![ENotes Home](./screenshots/home.png)
<img width="760" height="824" alt="image" src="https://github.com/user-attachments/assets/e653cf99-de74-4610-afd5-dd0eb04679df" />

```

---

## 🔮 Mejoras Futuras

* Sistema de autenticación y autorización.
* Categorías para notas.
* Buscador de notas.
* Migración a MySQL o PostgreSQL.
* Dockerización de la aplicación.
* Despliegue en AWS o Azure.

---

## 👨‍💻 Autor

**Jesús Emiliano López Espinoza**

Ingeniero en Sistemas Computacionales apasionado por el desarrollo de software y las tecnologías Full Stack.

* GitHub: https://github.com/Emiliano1823

---

⭐ Si te gustó este proyecto, considera darle una estrella al repositorio.
