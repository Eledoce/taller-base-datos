# Crear contenedores

Contenedor de base de datos

```sh
docker run --name postgres-server --network la-red-xd -e POSTGRES_PASSWORD=123456789Abc -p 5432:5432 -d postgres:16
```

Contenedor de interfaz

```sh
docker run --name gui-postgre -p 82:80 --network la-red-xd -e 'PGADMIN_DEFAULT_EMAIL=user@domain.com' -e 'PGADMIN_DEFAULT_PASSWORD=SuperSecret' -d dpage/pgadmin4
```

# Conectarse a la base de datos desde pgadmin https://localhost:82

## login

- mail: user@domain.com
- pass: SuperSecret

## Add new server

En `general` agregar un nombre y en la pestaña `connection` agregar los siguientes datos

- Host name/address `postgres-server`
- port `5432`
- maintenance database `postgres`
- username `postgres`
- password `123456789Abc`

# Crear base de datos dumbo

- Clic derecho en la conexión creada
- Create > Database, en `general` agregar el nombre `dumbo`
- seleccionar dumbo en el panel izquierdo, clic derecho, seleccionar `script create`
- pegar el sql
  _**NOTA: Antes de ejecutarlo agregar un registro con sus datos**_

```sql
CREATE TABLE IF NOT EXISTS alumnos (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(50),
    apellido VARCHAR(50),
    edad INT
);


INSERT INTO alumnos (nombre, apellido, edad) VALUES
('Juan', 'Pérez', 20),
('María', 'Guevara', 22),
('Carlos', 'López', 21);
```

- hacer una consulta para ver los registros
  ```sql
  SELECT * FROM alumnos;
  ```
