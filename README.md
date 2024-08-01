# Task Manager Application

## Descripción

Esta es una aplicación de gestión de tareas creada con React y .NET Core. Permite listar, crear, actualizar y eliminar tareas. La aplicación incluye una interfaz de usuario para interactuar con el backend a través de una API REST.

## Tecnologías Utilizadas

### Frontend
- **React**: Biblioteca para la construcción de interfaces de usuario.
- **react-toastify**: Para mostrar notificaciones en la interfaz de usuario.
- **react-modal**: Para mostrar modales.
- **SCSS**: Para el estilo de la aplicación.

### Backend
- **.NET Core 6**: Framework para construir la API REST.
- **Entity Framework Core**: Para la gestión de la base de datos.

## Requisitos

### Frontend
- Node.js (v16.0.0 o superior)
- npm (v7.0.0 o superior)

### Backend
- .NET Core 6 SDK
- SQL Server (o compatible) para la base de datos

## Instalación y Configuración

El repositorio contiene ambos proyectos el back ## GestionDeTareas y el front ## FrontGestionDeTareas

## Frontend
1. Clonar repositorio
    ```bash
   git clone https://github.com/AlejoRuiz/PruebaTecnicaGestorDeTareas
3. Navega al directorio del frontend
    ```bash
   cd <tu ruta de almacenamiento>\PruebaTecnicaGestorDeTareas\FrontGestionDeTareas\gestor-de-tareas-app
5. Instala las dependencias
    ```bash
   npm install
7. Ejecuta el proyecto
    ```bash
     npm start

## Backend
1. Ejecuta el siguiente script para crear la base de datos SQL SERVER
   ```bash
   CREATE DATABASE GestionDeTareas
2. Abre el proyecto GestionDeTareas
3. Asegúrate de configurar la cadena de conexión en el archivo appsettings.json para que apunte a tu base de datos SQL Server
    ```bash
    "ConnectionStrings": {
     "GestionDeTareasConection": "Server=localhost\\SQLEXPRESS;Database=GestionDeTareas;Trusted_Connection=True;Encrypt=True;"
   }
4. Abre la consola de administrador de paquetes y ejecuta el siguiente comando
   ```bash
   update-database
Si el proceso sale exitoso deberas poder ver las tablas necesarias para el proyecto, ejecuta el siguiente script para validar la tablas de Tasks
   ```bash
   USE GestionDeTareas
   SELECT * FROM Tasks





