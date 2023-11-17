# Crear contenedor

```sh
docker run -d --name redis-stack -p 6379:6379 -p 8001:8001 -e REDIS_ARGS="--requirepass 123456789Abc"  redis/redis-stack:7.2.0-v6
```

- user: default
- password: 123456789Abc
