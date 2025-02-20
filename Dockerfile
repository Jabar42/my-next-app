# Usa una imagen ligera de Node.js
FROM node:18-alpine

# Crea y usa el directorio de trabajo
WORKDIR /app

# Copia solo los archivos esenciales para instalar dependencias
COPY package.json package-lock.json ./

# Asegurar instalación completa y limpiar caché de Next.js
RUN npm install --force && npm cache clean --force

# Copia el resto del código
COPY . .

# Configura la variable para evitar consumo excesivo de memoria
ENV NODE_OPTIONS="--max-old-space-size=256"

# Verifica que todas las dependencias están disponibles
RUN ls -la node_modules | grep tailwindcss || (echo "Tailwind no encontrado" && exit 1)

# Corre `next build`
RUN npm run build

# Expone el puerto en el que Next.js corre
EXPOSE 3000

# Comando de inicio
CMD ["npm", "start", "-p", "3000"]

