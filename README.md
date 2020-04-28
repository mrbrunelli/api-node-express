# Como criar API com Node.js

## Lista passo a passo

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

4. Instalar o MongoDB
```bash
npm install --save mongodb
```

5. Instalar o Mongoose. O Mongoose traduz os dados do banco de dados para objetos Javascript para que possam ser utilizados por sua aplicação.
```bash
npm install --save mongoose
```