# CURSOS BOOTCAMP

Dado el siguiente modelo relacional:

![db](./public/db.png)

Realizar las siguientes consultas:

* Listar el usuario con el id 3 ![image1](./public/getuserid3.png)
```bash
# GET
http://localhost:3000/api/v1/users/3
```

* Actualizar el usuario según su id; por ejemplo: actualizar el usuario con id=1 por Pedro Sánchez. ![image2](./public/update.png)
```bash
# PUT
http://localhost:3000/api/v1/users/1
```
```json
{
  "firstname": "Pedro",
	"lastname": "Sánchez",
	"email": "mateo.diaz@correo.com"
}
```

* Eliminar un usuario por id; por ejemplo: el usuario con `id=3`. ![image3](./public/delete.png)
```bash
# DELETE
http://localhost:3000/api/v1/users/1
```

* Consultando el bootcamp por id, incluyendo los usuarios registrados ![image4](./public/bootcampbyid.png)
```bash
# GET
http://localhost:3000/api/v1/bootcamps/1

```

* Listar todos los bootcamp con sus usuarios ![image5](./public/getallusers_bootcamp.png)
```bash
# GET
http://localhost:3000/api/v1/bootcamps

```

* Consultar un usuario por id incluyendo los bootcamp ![image6](./public/getuserid3.png)
```bash
# GET
http://localhost:3000/api/v1/users/3
```

* Gestione adecuadamente el manejo de errores ![image6](./public/notoken.png)