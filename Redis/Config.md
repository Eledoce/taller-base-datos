# Redis stack server

```sh
docker run -d --name redis-stack -p 6379:6379 -e REDIS_ARGS="--requirepass 123456789Abc" redis/redis-stack-server:latest
```

# Redis stack server

```sh
docker run -d --name redis-stack -p 6379:6379 -p 8001:8001 -e REDIS_ARGS="--requirepass 123456789Abc"  redis/redis-stack:latest
```
