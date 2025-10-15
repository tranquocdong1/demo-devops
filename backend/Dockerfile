# Base image nhẹ
FROM node:20-alpine

# Tạo thư mục ứng dụng
WORKDIR /app

# Copy package files trước (để tận dụng cache)
COPY package*.json ./

# Cài dependencies
RUN npm install --production

# Copy toàn bộ mã nguồn
COPY . .

# Expose cổng backend
EXPOSE 8081

# Biến môi trường mặc định
ENV PORT=8081

# Lệnh khởi động
CMD ["node", "src/server.js"]
