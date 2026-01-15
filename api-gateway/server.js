const express = require('express');
const proxy = require('express-http-proxy');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

// Mensaje de bienvenida en la raíz
app.get('/', (req, res) => {
    res.json({ 
        message: 'Bienvenido a GameBench API Gateway', 
        status: 'Online',
        version: '1.0.0'
    });
});

// --- RUTAS DE REDIRECCIÓN (PROXY) ---

// 1. Redirigir tráfico de /api/auth al microservicio de USERS
console.log(`Configurando ruta Auth hacia: ${process.env.USERS_SERVICE_URL}`);
app.use('/api/auth', proxy(process.env.USERS_SERVICE_URL || 'http://localhost:3001'));

// 2. Redirigir tráfico de /api/games al microservicio de CATALOG
console.log(`Configurando ruta Games hacia: ${process.env.CATALOG_SERVICE_URL}`);
app.use('/api/games', proxy(process.env.CATALOG_SERVICE_URL || 'http://localhost:3002'));

// 3. Redirigir tráfico de /api/reviews al microservicio de REVIEWS
console.log(`Configurando ruta Reviews hacia: ${process.env.REVIEWS_SERVICE_URL}`);
app.use('/api/reviews', proxy(process.env.REVIEWS_SERVICE_URL || 'http://localhost:3003'));

app.listen(PORT, () => {
    console.log(`API Gateway corriendo en el puerto ${PORT}: GYMG is here `);
});