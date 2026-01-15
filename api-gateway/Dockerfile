# Usamos una imagen ligera de Node.js 20
FROM node:20-alpine

# Directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiamos los archivos de dependencias primero (para aprovechar caché)
COPY package.json ./

# Instalamos dependencias
RUN npm install

# Copiamos el resto del código
COPY . .

# Exponemos el puerto (esto es informativo, el docker-compose lo mapea real)
EXPOSE 3000

# Comando para iniciar
CMD ["node", "server.js"]