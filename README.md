<div align="center">

<!-- TÍTULO Y BANNER -->

🎮 GameBench Backend API

<img src="https://www.google.com/search?q=https://via.placeholder.com/1200x300/0d1117/ffffff%3Ftext%3DGameBench%2BArchitecture" alt="GameBench Banner" width="100%" />

<p>
<b>Plataforma de microservicios distribuidos para la gestión, análisis y predicción de rendimiento en videojuegos.</b>
</p>

<!-- BADGES -->

<p>
<img src="https://www.google.com/search?q=https://img.shields.io/badge/Node.js-v18-339933%3Fstyle%3Dfor-the-badge%26logo%3Dnode.js%26logoColor%3Dwhite" alt="NodeJS" />
<img src="https://www.google.com/search?q=https://img.shields.io/badge/Docker-Enabled-2496ED%3Fstyle%3Dfor-the-badge%26logo%3Ddocker%26logoColor%3Dwhite" alt="Docker" />
<img src="https://www.google.com/search?q=https://img.shields.io/badge/MongoDB-Ready-47A248%3Fstyle%3Dfor-the-badge%26logo%3Dmongodb%26logoColor%3Dwhite" alt="MongoDB" />
<img src="https://www.google.com/search?q=https://img.shields.io/badge/Microservices-Arch-E34F26%3Fstyle%3Dfor-the-badge%26logo%3Dserverless%26logoColor%3Dwhite" alt="Architecture" />
</p>

<!-- MENÚ RÁPIDO -->

<p>
<a href="#-descripción-general">📌 Descripción</a> •
<a href="#-arquitectura-del-sistema">🏗️ Arquitectura</a> •
<a href="#-stack-tecnológico">🛠️ Stack</a> •
<a href="#-instalación-y-ejecución">🚀 Despliegue</a> •
<a href="#-documentación-de-endpoints">📄 API Docs</a>
</p>

</div>

📌 Descripción General

GameBench es una solución backend robusta diseñada para centralizar la información técnica y artística de videojuegos. Su núcleo reside en la capacidad de predecir el rendimiento (FPS) en diferentes configuraciones de hardware mediante algoritmos de comparación.

✨ Características Principales

👤 Gestión de Identidad: Usuarios, roles y perfiles de hardware (CPU/GPU).

🎮 Catálogo Sincronizado: Integración preparada para APIs externas (IGDB/Steam).

⭐ Sistema de Reseñas: Feedback técnico y artístico de la comunidad.

📈 Motor de Predicción: Estimación de rendimiento basada en benchmarks de hardware.

🏗️ Arquitectura del Sistema

El proyecto sigue un patrón de Microservicios orquestados, donde cada dominio de negocio está aislado en su propio contenedor.

🔌 Mapa de Puertos y Servicios

Servicio

Puerto

Responsabilidad

🛡️ API Gateway

8080

Entrypoint. Enrutamiento, Rate Limiting y Auth Guard.

👤 Users Service

3001

Autenticación (JWT), gestión de perfiles y hardware.

📚 Catalog Service

3002

Búsqueda, filtrado y detalles de videojuegos.

📝 Reviews Service

3003

Lógica de reseñas y cálculo de predicciones (FPS).

📂 Estructura del Proyecto

GameBench_backend/
├── api-gateway/         # Nginx o servicio Node de entrada
├── users-service/       # Microservicio de Usuarios
├── catalog-service/     # Microservicio de Catálogo
├── reviews-service/     # Microservicio de Reseñas
├── docker-compose.yml   # Orquestación de contenedores
└── README.md            # Documentación


🛠️ Stack Tecnológico

<div align="center">

Core

Infraestructura

Datos

<img src="https://www.google.com/search?q=https://skillicons.dev/icons%3Fi%3Dnodejs,express" />

<img src="https://www.google.com/search?q=https://skillicons.dev/icons%3Fi%3Ddocker,nginx,git" />

<img src="https://www.google.com/search?q=https://skillicons.dev/icons%3Fi%3Dmongodb" />

Node.js + Express

Docker + Gateway

MongoDB

</div>

✅ Pre-requisitos

El entorno está diseñado para ser agnóstico al Sistema Operativo. No necesitas instalar Node.js ni bases de datos localmente.

[x] Docker Desktop (Daemon corriendo)

[x] Git

🚀 Instalación y Ejecución

Sigue estos pasos para levantar el ecosistema completo:

1️⃣ Clonar el repositorio

git clone [https://github.com/Geryiman/GameBench_backend.git](https://github.com/Geryiman/GameBench_backend.git)
cd gamebench-backend


2️⃣ Iniciar Contenedores (Docker Compose)

Este comando descargará las imágenes necesarias y levantará la red virtual.

docker-compose up --build


⏳ Nota: La primera ejecución puede tomar unos minutos mientras se construyen las imágenes y se descargan los volúmenes de MongoDB.

📄 Documentación de Endpoints

Ejemplos rápidos de consumo de la API a través del Gateway (Puerto 8080).

<details>
<summary>🔐 <b>Auth & Usuarios</b></summary>

Método

Endpoint

Descripción

POST

/api/auth/register

Registrar nuevo usuario

POST

/api/auth/login

Iniciar sesión (Retorna JWT)

GET

/api/users/profile

Obtener perfil (Requiere Token)

</details>

<details>
<summary>🎮 <b>Catálogo de Juegos</b></summary>

Método

Endpoint

Descripción

GET

/api/games

Listar todos los juegos

GET

/api/games/:id

Detalle de un juego específico

GET

/api/games/search?q=

Buscar por nombre

</details>

<details>
<summary>⭐ <b>Reseñas y Predicciones</b></summary>

Método

Endpoint

Descripción

POST

/api/reviews

Crear una reseña

GET

/api/reviews/game/:id

Ver reseñas de un juego

POST

/api/predict/fps

Calcular FPS estimados

</details>

<div align="center">





<p>Made with ❤️ by the <b>GameBench Team</b></p>
<p>
<a href="https://www.google.com/search?q=https://github.com/Geryiman/GameBench_backend/issues">Reportar Bug</a> •
<a href="https://www.google.com/search?q=https://github.com/Geryiman/GameBench_backend/pulls">Contribuir</a>
</p>
</div>
