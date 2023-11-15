# Docker

## Descargar imágenes

```sh
docker pull angelramirez1212/taller-db:latest
```

```sh
docker pull mcr.microsoft.com/mssql/server:2019-latest
```

```sh
docker pull
```

# Crear red

```sh
docker network create la-red-xd
```

# nodejs

```sh
docker run -d --network la-red-xd  --name contenedor-node angelramirez1212/taller-db:latest
```

- [SQL Server ](./SQL-Server/Config.md)
- [Redis](./Redis//Config.md)
- [MySQL]
- [MongoDB]
- [PostgreSQL]
