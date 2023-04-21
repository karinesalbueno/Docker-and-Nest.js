### Projeto com Docker e Nest.js 
notas: backend finalizado, frontend em andamento 

utilizando as tecnologias:
* Docker 
* Nest.js, 
* Node.js,
* Prisma, 
* Postgresql, 
* React.js, 
* Vite. 

First, run the backend development server:

```bash
> docker-compose up 

> npx generate prisma

> npx prisma db push 

> npm run start
```


- URL = localhost:3000/

- <b>post {URL}/auth/login</b> - <i>Auth: retorna JWT TOKEN</i> ```{ "usercode": "xxx", "password": "xxx" } ```

- <b>get  {URL}/users/</b> - <i>todos usuários</i>
- <b>get  {URL}/users/:code</b>  - <i>usuário por código</i>
- <b>delete {URL}/users/:id</b> -  <i>deleta usuário por id</i>
- <b>post {URL}/users/register</b> - <i>registrar usuário:</i>
 ```  ruby
{
	"code": "xxx", 
	"name": "xxxx",
	"email": "xxx@gmail.com",
	"password": "xxxxxxx" 
  
}
```

- <b>get  {URL}/work/:userCode</b>  - <i>lista de pontos por código usuário</i>
- <b>post {URL}/work/</b> - <i>registra ponto do usuário:</i> ```{ "userCode": "xxx" } ```
- <b>put  {URL}/work/:id</b> - <i>finaliza ponto do usuário:</i>
 ```  
{
	"userCode": "xxx",
	"date": "2023-03-25",
}
```
