# Crear contenedor

```sh
docker run -d --name redis-stack -p 6379:6379 -p 8001:8001 -e REDIS_ARGS="--requirepass 123456789Abc"  redis/redis-stack:7.2.0-v6
```

# Conectarse a la base de datos desde redisinsight

Entrar en http://localhost:8001, aceptar los términos y dar clic en submit

- user: default
- password: 123456789Abc
