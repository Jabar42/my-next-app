# Usa una imagen ligera de Node.js
FROM node:18-alpine

# Crea y usa el directorio de trabajo
WORKDIR /app

# Copia solo los archivos esenciales para instalar dependencias
COPY package.json package-lock.json ./

# Instala dependencias asegurando compatibilidad
RUN npm install --legacy-peer-deps --omit=dev

# Copia el resto del código
COPY . .

# Configura la variable para evitar consumo excesivo de memoria
ENV NODE_OPTIONS="--max-old-space-size=256"

# Construye la app (NEXT_TELEMETRY_DISABLED evita recopilar datos)
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build

# Expone el puerto en el que Next.js corre (Railway usa una variable de entorno)
EXPOSE 3000

# Comando de inicio (usa $PORT en lugar de 3000)
CMD ["sh", "-c", "npm start -- -p ${PORT:-3000}"]

