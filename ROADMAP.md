Roadmap de Desarrollo - GameBench Backend

Este documento detalla el plan de implementación progresiva para el backend de GameBench, dividido por entregables semanales.

Semana 2: Arquitectura y Estructura Base

Objetivo: Establecer la infraestructura Docker y la comunicación entre servicios.

[x] Configuración de Dockerfile optimizado (Node 20 Alpine) para microservicios.

[x] Configuración de docker-compose.yml orquestando 3 servicios + MongoDB.

[x] Implementación del API Gateway (Proxy reverso).

[x] Definición de estructura de carpetas (MVC) en cada servicio.

[x] Creación de Endpoints Mock (simulados) para desbloquear el desarrollo Frontend.

[x] Verificación de conectividad de red interna entre contenedores.

Semana 3: Identidad y Persistencia de Usuarios

Objetivo: Implementar autenticación real y almacenamiento de datos de usuario.

[ ] User Service: Implementar conexión a MongoDB (Mongoose).

[ ] User Service: Definir Esquema de Usuario (User Schema).

[ ] User Service: Implementar hash de contraseñas con bcrypt.

[ ] User Service: Implementar generación de JWT en endpoint /login.

[ ] User Service: Crear CRUD para el perfil de hardware (CPU/GPU del usuario).

[ ] Gateway: Implementar Middleware de validación de JWT para rutas protegidas.

Semana 4: Integración de APIs Externas (Catálogo)

Objetivo: Obtener y servir datos reales de videojuegos.

[ ] Catalog Service: Obtención de credenciales API para IGDB y Steam.

[ ] Catalog Service: Implementar controlador de búsqueda conectado a IGDB.

[ ] Catalog Service: Implementar lógica de caché local para reducir peticiones externas.

[ ] Catalog Service: Integración con Steam API para obtención de requisitos de sistema.

[ ] Catalog Service: Normalización de datos (unificar respuestas de IGDB + Steam).

Semana 5: Lógica de Negocio y Predicción

Objetivo: Funcionalidad principal y algoritmo de predicción.

[ ] Reviews Service: Implementar conexión a su propia base de datos lógica.

[ ] Reviews Service: CRUD de Reseñas (Score Técnico + Score Artístico).

[ ] Reviews Service: Implementar algoritmo de comparación (Hardware vs Requisitos).

[ ] Reviews Service: Finalizar endpoint /predict con lógica real.

[ ] General: Pruebas de integración del flujo completo (Registro -> Búsqueda -> Predicción).

[ ] General: Limpieza de código y eliminación de mocks restantes.