# Docker

## Descargar imágenes

```sh
docker pull angelramirez1212/taller-db:latest
```

```sh
docker pull mcr.microsoft.com/mssql/server:2019-latest
```

```sh
docker pull redis/redis-stack:7.2.0-v6
```

# nodejs

```sh
docker run -d  --name contenedor-node angelramirez1212/taller-db:latest
```

// TODO cambiar por contenedor del repo

```sh
docker run -d --name nodejs --network="host" imagen:basca5
```

- [SQL Server ](./SQL-Server/Config.md)
- [Redis](./Redis//Config.md)
- [MySQL](./Mysql//Config.md)
- [MongoDB]
- [PostgreSQL]

# Limitar uso de ram y núcleos de Docker

- abrir una terminal
- ejecutar el siguiente comando

```sh
echo [wsl2] > .wslconfig
echo memory=2GB >> .wslconfig
echo processors=2 >> .wslconfig
```
