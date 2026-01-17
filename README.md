<div align="center">

# 🎮 GameBench Backend API

**Plataforma de microservicios distribuidos para la gestión, análisis y predicción de rendimiento en videojuegos**

---

### 🔗 Navegación Rápida

[📌 Descripción](#-descripción-general) • [🏗️ Arquitectura](#-arquitectura-del-sistema) • [🛠️ Stack](#-stack-tecnológico) • [🚀 Instalación](#-instalación-y-ejecución) • [📡 API](#-documentación-de-endpoints) • [👨‍💻 Desarrollo](#-desarrollo-local)

</div>

## 📌 Descripción General

GameBench es una solución backend robusta y escalable diseñada para centralizar la información técnica y artística de videojuegos. Su núcleo reside en la capacidad de **predecir el rendimiento (FPS)** en diferentes configuraciones de hardware mediante algoritmos inteligentes de comparación.

### ✨ Características Principales

| Característica | Descripción |
|---|---|
| 👤 **Gestión de Identidad** | Usuarios, roles y perfiles de hardware (CPU/GPU) |
| 🎮 **Catálogo Sincronizado** | Integración preparada para APIs externas (IGDB/Steam) |
| ⭐ **Sistema de Reseñas** | Feedback técnico y artístico de la comunidad |
| 📈 **Motor de Predicción** | Estimación de FPS basada en benchmarks de hardware |
| 🔐 **Seguridad JWT** | Autenticación de tokens seguros |
| 📊 **Rate Limiting** | Control de tráfico para garantizar estabilidad |

## 🏗️ Arquitectura del Sistema

El proyecto sigue un patrón **Microservicios orquestados**, donde cada dominio de negocio está aislado en su propio contenedor. Esta arquitectura permite:

- 🔄 **Escalabilidad independiente** de cada servicio
- 🛡️ **Aislamiento de fallos** entre componentes
- 📦 **Despliegue flexible** con Docker
- 🔌 **Comunicación desacoplada** mediante API REST

### 🔌 Mapa de Puertos y Servicios

| Servicio | Puerto | Responsabilidad |
|----------|--------|---|
| 🛡️ **API Gateway** | `8080` | Entrypoint único. Enrutamiento, Rate Limiting y Auth Guard |
| 👤 **Users Service** | `3001` | Autenticación (JWT), gestión de perfiles y hardware |
| 📚 **Catalog Service** | `3002` | Búsqueda, filtrado y detalles de videojuegos |
| 📝 **Reviews Service** | `3003` | Lógica de reseñas y cálculo de predicciones (FPS) |

### 📂 Estructura del Proyecto

```
GameBench_backend/
├── api-gateway/              # 🛡️ Nginx o Node de entrada (Puerto 8080)
├── users-service/            # 👤 Microservicio de Usuarios (Puerto 3001)
├── catalog-service/          # 📚 Microservicio de Catálogo (Puerto 3002)
├── reviews-service/          # 📝 Microservicio de Reseñas (Puerto 3003)
├── docker-compose.yml        # 🐳 Orquestación de contenedores
├── README.md                 # 📖 Documentación principal
└── ROADMAP.md                # 🗺️ Hoja de ruta del proyecto
```




## ✅ Pre-requisitos

El entorno está diseñado para ser **agnóstico al Sistema Operativo**. No necesitas instalar Node.js ni bases de datos localmente.

- ✅ **Docker Desktop** (Daemon corriendo)
- ✅ **Git**
- ✅ **Mínimo 4GB de RAM** para ejecutar los contenedores
- ✅ **Puertos 8080, 3001, 3002, 3003 disponibles**

> **💡 Tip:** Si tienes problemas con Docker, reinicia el daemon: `docker restart`

## 🚀 Instalación y Ejecución

### 1️⃣ Clonar el repositorio

```bash
git clone https://github.com/Geryiman/GameBench_backend.git
cd GameBench_backend
```

### 2️⃣ Iniciar Contenedores (Docker Compose)

Este comando descargará las imágenes necesarias y levantará la red virtual.

```bash
docker-compose up --build
```

> ⏳ **Nota:** La primera ejecución puede tomar 3-5 minutos mientras se construyen las imágenes y se descargan los volúmenes de MongoDB.

### 3️⃣ Verificar que todo esté corriendo

```bash
docker ps
```

Deberías ver 5 contenedores activos:
- `api-gateway`
- `users-service`
- `catalog-service`
- `reviews-service`
- `mongodb`

### 4️⃣ Acceder a la API

- **Gateway (Endpoint principal):** http://localhost:8080
- **Users Service:** http://localhost:3001
- **Catalog Service:** http://localhost:3002
- **Reviews Service:** http://localhost:3003

### 🛑 Detener los contenedores

```bash
docker-compose down
```

Para detener y eliminar volúmenes (base de datos):
```bash
docker-compose down -v
```

## 📡 Documentación de Endpoints

Ejemplos de consumo de la API a través del **Gateway (Puerto 8080)**.

### 🔐 Auth & Usuarios

| Método | Endpoint | Descripción | Auth |
|--------|----------|-------------|------|
| `POST` | `/api/auth/register` | Registrar nuevo usuario | ❌ |
| `POST` | `/api/auth/login` | Iniciar sesión (Retorna JWT) | ❌ |
| `GET` | `/api/users/profile` | Obtener perfil del usuario | ✅ Bearer Token |
| `PUT` | `/api/users/profile` | Actualizar perfil | ✅ Bearer Token |
| `GET` | `/api/users/hardware` | Obtener perfiles de hardware | ✅ Bearer Token |

**Ejemplo de Login:**
```bash
curl -X POST http://localhost:8080/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"user@example.com","password":"password123"}'
```

### 🎮 Catálogo de Juegos

| Método | Endpoint | Descripción | Auth |
|--------|----------|-------------|------|
| `GET` | `/api/games` | Listar todos los juegos | ❌ |
| `GET` | `/api/games/:id` | Detalle de un juego específico | ❌ |
| `GET` | `/api/games/search?q=<query>` | Buscar por nombre | ❌ |
| `POST` | `/api/games` | Crear nuevo juego | ✅ Bearer Token |

**Ejemplo de Búsqueda:**
```bash
curl -X GET "http://localhost:8080/api/games/search?q=Elden%20Ring"
```

### ⭐ Reseñas y Predicciones

| Método | Endpoint | Descripción | Auth |
|--------|----------|-------------|------|
| `POST` | `/api/reviews` | Crear una reseña | ✅ Bearer Token |
| `GET` | `/api/reviews/game/:gameId` | Ver reseñas de un juego | ❌ |
| `GET` | `/api/reviews/user/:userId` | Ver reseñas de un usuario | ❌ |
| `POST` | `/api/predict/fps` | Calcular FPS estimados | ✅ Bearer Token |

**Ejemplo de Predicción FPS:**
```bash
curl -X POST http://localhost:8080/api/predict/fps \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -d '{
    "gameId":"123",
    "hardwareProfile":{
      "cpu":"Intel i9-13900K",
      "gpu":"RTX 4090"
    }
  }'
```

## 👨‍💻 Desarrollo Local

### Inspeccionar Logs de un Servicio

```bash
# Ver logs en tiempo real del API Gateway
docker-compose logs -f api-gateway

# Ver logs de todos los servicios
docker-compose logs -f

# Ver últimas 100 líneas
docker-compose logs --tail=100
```

### Acceder a la Shell de MongoDB

```bash
docker-compose exec mongodb mongosh
```

### Reconstruir un Servicio Específico

```bash
docker-compose up --build users-service
```

### Variables de Entorno

Cada servicio puede configurarse con variables de entorno. Crea un archivo `.env` en la raíz:

```env
# MongoDB
MONGO_URL=mongodb://mongodb:27017/gamebench

# JWT
JWT_SECRET=your_super_secret_key_here
JWT_EXPIRY=24h

# API Gateway
GATEWAY_PORT=8080
RATE_LIMIT_WINDOW=15m
RATE_LIMIT_MAX_REQUESTS=100
```

## 🐛 Troubleshooting

| Problema | Solución |
|----------|----------|
| **"Port 8080 is already in use"** | `lsof -i :8080` y matar el proceso, o cambiar el puerto en docker-compose.yml |
| **"Cannot connect to Docker daemon"** | Reinicia Docker Desktop o verifica que esté corriendo |
| **MongoDB no persiste datos** | Verifica que los volúmenes están configurados correctamente en docker-compose.yml |
| **Contenedores crashean al iniciar** | Revisa logs: `docker-compose logs <service>` |

## 📚 Documentación Adicional

- [ROADMAP.md](./ROADMAP.md) - Hoja de ruta y características planificadas
- [Guía de Contribución](#-contribución) - Cómo contribuir al proyecto
- [Issues](https://github.com/Geryiman/GameBench_backend/issues) - Reportar bugs

## 🤝 Contribución

Las contribuciones son bienvenidas. Por favor:

1. **Fork** el repositorio
2. **Crea una rama** para tu feature: `git checkout -b feature/AmazingFeature`
3. **Commit** tus cambios: `git commit -m 'Add some AmazingFeature'`
4. **Push** a la rama: `git push origin feature/AmazingFeature`
5. **Abre un Pull Request**

### Estándares de Código

- Usa **ES6+** en JavaScript
- Sigue la estructura de carpetas existente
- Incluye comentarios en código complejo
- Ejecuta tests antes de hacer PR

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver [LICENSE](LICENSE) para más detalles.

## 📞 Soporte

- **Issues:** [GitHub Issues](https://github.com/Geryiman/GameBench_backend/issues)
- **Discussions:** [GitHub Discussions](https://github.com/Geryiman/GameBench_backend/discussions)

---

<div align="center">

**Hecho con ❤️ por el equipo de GameBench**

⭐ Si te gusta el proyecto, dale una estrella en GitHub ⭐

[⬆ Volver arriba](#-gamebench-backend-api)

</div>
