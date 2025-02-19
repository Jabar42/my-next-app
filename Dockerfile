# Usa la imagen oficial de Node.js
FROM node:18-alpine

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia package.json y package-lock.json antes para aprovechar la caché
COPY package.json package-lock.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de la aplicación
COPY . .

# Expone el puerto 3000 para la app
EXPOSE 3000

# Comando por defecto para correr Next.js
CMD ["npm", "run", "dev"]
