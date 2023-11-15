# Crear red de docker

```sh
docker network create la-red-xd
```

# Crear contenedor de mysql

```sh
docker run --name el-sql-mio --network la-red-xd -e MYSQL_ROOT_PASSWORD=123456789Abc -p 3306:3306  -d mysql:8
```

# Creación de la base de datos

- user: root
- pass: 123456789Abc

Se puede usar tanto

- ### PhpMyAdmin

  pero hay que instalar el contenedor

  ```sh
  docker run --name php-interfaz --network la-red-xd -e PMA_HOST=el-sql-mio -p 81:80 -d phpmyadmin/phpmyadmin
  ```

  Abrir en el navegador http://localhost:81

- ### Azure data studio

  Instalar extención de mysql

  _**NOTA: no se tiene que especificar el puerto al iniciar sesión**_

## Ejecutar todo el bloque como una sola consulta

_**NOTA: Antes de ejecutarlo agregar un registro con sus datos**_

```sql
-- Crea la base de datos
CREATE DATABASE IF NOT EXISTS MiBaseDeDatos;

-- Usa la base de datos
USE MiBaseDeDatos;


CREATE TABLE Alumnos (
    Id INT AUTO_INCREMENT PRIMARY KEY,
    Nombre VARCHAR(50),
    Edad INT,
    Ciudad VARCHAR(50) -- Nueva columna
);


INSERT INTO Alumnos (Nombre, Edad, Ciudad) VALUES ('Juan', 19, 'CiudadA');
INSERT INTO Alumnos (Nombre, Edad, Ciudad) VALUES ('María', 21, 'CiudadB');
INSERT INTO Alumnos (Nombre, Edad, Ciudad) VALUES ('Luis', 20, 'CiudadC');
```
