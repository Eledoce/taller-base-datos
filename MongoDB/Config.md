# Crear contenedores

Primero tenemos que crear una red para que los contenedores se puedan comunicar entre sí

```sh
docker network create la-red-xd
```

Contenedor de la base de datos

```sh
docker run -d --name mondongo --network la-red-xd -e MONGO_INITDB_ROOT_USERNAME=edoce -e MONGO_INITDB_ROOT_PASSWORD=123456789Abc -p 27017:27017 mongo
```

Contenedor de mongo-express para administrar la base de datos con una interfaz gráfica

```sh
docker run -d -p 8081:8081 --name mongo-express --network la-red-xd -e ME_CONFIG_MONGODB_URL=mongodb://edoce:123456789Abc@mondongo:27017 -e ME_CONFIG_MONGODB_ADMINUSERNAME=edoce -e ME_CONFIG_MONGODB_ADMINPASSWORD=123456789Abc mongo-express
```

# Conectarse a la base de datos

Entrar en localhost:8081

- user: admin
- pass: pass

# Crear base de datos

- crear una base de datos llamada `la-db`
- crear una colección llamada `alumnos`
- crear un documento con la siguiente estructura
  ```
  {
    "_id": ObjectId(),
    "nombre": "nombre",
    "apellido": "apellido",
    "edad": 0
  }
  ```
