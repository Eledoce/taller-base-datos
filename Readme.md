# Docker

## Descargar imágenes

```sh
docker pull angelramirez1212/taller-db:latest
```

```sh
docker pull mongo
```

```sh
docker pull mongo-express
```

```sh
docker pull mysql:8
```

```sh
docker pull phpmyadmin/phpmyadmin
```

```sh
docker pull postgres:16
```

```sh
docker pull dpage/pgadmin4
```

```sh
docker pull mcr.microsoft.com/mssql/server:2019-latest
```

```sh
docker pull redis/redis-stack:7.2.0-v6
```

# nodejs

```sh
docker run -d  --name nodexs --network="host" angelramirez1212/taller-db:latest
```

- [SQL Server ](./SQL-Server/Config.md)
- [Redis](./Redis//Config.md)
- [MySQL](./Mysql//Config.md)
- [MongoDB](./MongoDB/Config.md)
- [PostgreSQL](./PostgreSQL/Config.md)

# Limitar uso de ram y núcleos de Docker

- abrir una terminal
- ejecutar el siguiente comando

```sh
echo [wsl2] > .wslconfig
echo memory=2GB >> .wslconfig
echo processors=2 >> .wslconfig
```
