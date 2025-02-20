# Usa una imagen ligera de Node.js
FROM node:18-alpine

# Crea y usa el directorio de trabajo
WORKDIR /app

# Copia solo los archivos esenciales para instalar dependencias
COPY package.json package-lock.json ./

# Instala todas las dependencias, incluyendo devDependencies
RUN npm install --legacy-peer-deps

# Copia el resto del código
COPY . .

# Configura la variable para evitar consumo excesivo de memoria
ENV NODE_OPTIONS="--max-old-space-size=256"

# Corre `next build` manualmente en vez de dejar que Railway lo haga antes de instalar
RUN npm run build

# Expone el puerto en el que Next.js corre (Railway usa una variable de entorno)
EXPOSE 3000

# Comando de inicio
CMD ["npm", "start", "-p", "3000"]
