# Use uma imagem base
FROM node:14-alpine

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /usr/src/app

# Copie o package.json e o package-lock.json para instalar as dependências
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie os arquivos da aplicação para o contêiner
COPY . .

# Exponha a porta em que a aplicação está sendo executada
EXPOSE 3000

# Comando para iniciar a aplicação quando o contêiner for iniciado
CMD ["npm", "start"]
