# Crear contenedor

```sh
docker run -d --name redis-stack -p 6379:6379 -p 8001:8001 -e REDIS_ARGS="--requirepass 123456789Abc"  redis/redis-stack:7.2.0-v6
```

# Conectarse a la base de datos desde redisinsight

- Entrar en http://localhost:8001, aceptar los términos y dar clic en submit

- Iniciar sesión con los datos

  - user: default
  - password: 123456789Abc

- Dirigirse al icono de la llave que aparece en el panel izquierdo
- Damos clic en el boton que aparece en la parte superior derecha `+ Key`
- En `Key type` selecconamos `String`
- En `Key name` escriben `nombre`
- En `Value` escriben su nombre
- Damos clic en Add key

# Ejecución del archivo de js

- nos dirigimos a docker desktop
- seleccionamos el contenedor nodexs
- damos clic en `files`
- buscamos en la ruta `/app/Redis/`
- seleccionamos el archivo `redis.js`
- en la parte superior derecha damos clic en `open file editor`
- buscamos la linea `11`
- sustituimos el string por `nombre`
- damos clic en el icono de guardar que aparece arriba a la derecha del panel del código
- nos dirigimos a la terminal del contenedor (exec)
- vamos a la ruta /app/Redis/
- ejecutamos el comando `node redis.js`
