# Como criar API com Node.js

## Lista passo a passo
* **Para rodar esse repositório é só clonar, e depois de feito, dentro da pasta raíz digitar esse comando:**
```bash
# Instalar as dependências
npm install

 # Rodar servidor
nodemon app.js
```

1. Criar o arquivo package
```bash 
npm init 
```

2. Gerencia as requisições, rotas e URLs, entre outras funcionalidades
```bash 
npm install express
```

3. Instalar o módulo para reiniciar o servidor sempre que houver alteração no código fonte
```bash 
# A tag -g significa que a instalação é global
# A tag -D significa instalar como desenvolvedor
npm install -g -D nodemon
```

4. Para rodar o servidor Node do arquivo app.js
```bash
nodemon app.js
```

5. Instalar o MongoDB
```bash
npm install --save mongodb
```

6. Instalar o Mongoose. O Mongoose traduz os dados do banco de dados para objetos Javascript para que possam ser utilizados por sua aplicação.
```bash
npm install --save mongoose
```

7. Subir container com MongoDB já configurado
```bash
# O banco estará disponível na porta 27017
docker-compose up -d
```
