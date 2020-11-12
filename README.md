# API de tareas
Repositorio creado para que cada alumno pueda ejecutar una copia en local de un servidor HTTP de una API REST sencilla.

El servidor maneja tareas que tienen los siguientes atributos:
* **_id**: Es un identificador para la tarea. Se genera automáticamente en el servidor.
* **titulo**: El título de la tarea. Es una cadena obligatoria.
* **descripcion**: La descripción de la tarea. Es una cadena obligatoria.
* **fecha_creacion**: Es la fecha en la que se crea la tarea. No es obligatoria, si no se introduce se toma la fecha actual.
* **estado**: Estado en el que está la tarea. Una tarea que puede valer: "pendiente", "haciendo" ó "completada". Si no se introduce este valor, por defecto está en pendiente.


El servidor soporta los puntos:

1. **/tasks/**: Dependiendo del verbo HTTP:
  - *GET*: Devuelve un JSON con array con todas las tareas.
  - *POST*: Crea una nueva tarea. La tarea nueva debe ir en el cuerpo de mensaje.

2. **/tasks/[id]**: Dependiendo del verbo HTTP:
  - *GET*: Devuelve la tarea con el ID correspondiente.
  - *PUT*: Modifica la tarea con el ID correspondiente. La modificación de la tarea debe incluirse en el cuerpo de la petición.
  - *DELETE*: Borra el post correspondiente.


# Instalación
Para poder ejecutar este servidor necesitamos instalar:
*  **Node**: Para ejecutar Javascript desde fuera del navegador. [Instalación desde la web de Node](https://nodejs.org/en/) - Debes instalar la versión **LTS**.
* **NPM**: Para gestionar los paquetes de node. Ya está instalado por defecto con node.
* **mongodb**: Es una base de datos no relacional. Almacena JSON. Ya no es necesario [Instalarlo desde la web de MongoDB](https://www.mongodb.com/download-center/community).

# Ejecución del servidor

Una vez has realizado la instalación, descarga este repositorio en un directorio de tu máquina. Desde un terminal dirígete a la ruta de donde lo hayas descargado y realiza los siguientes pasos:

1. **Modifica el fichero .env con los datos de tu Atlas**: En los apuntes están los pasos necesarios.

2. **Ejecuta desde la carpeta `npm install`** : Para descargar las dependencias del proyecto. Sólo lo debes correr este comando una vez.

3. **Ejecuta desde la carpeta `npm run start`** : Para inicializar el servidor. Este comando se debe ejecutar cada vez que quieras arrancar el servidor. 

El servidor está visible en [http://localhost:3000/tasks/](http://localhost:3000/tasks/).

# Notas
La licencia de este repositorio es [Creative Commons cc-3](https://creativecommons.org/licenses/by/3.0/)
