const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

// Conexión a Base de Datos (Placeholder para Semana 3)
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/gamebench_users_db';
// mongoose.connect(MONGO_URI)... (Lo activaremos la próxima semana)

// --- RUTAS PÚBLICAS Y PRIVADAS ---

// [POST] /register (Registro de usuario)
app.post('/register', (req, res) => {
    // TODO: Semana 3 - Crear usuario en Mongo
    res.json({ message: 'Usuario registrado exitosamente (Simulado)', userId: 'user_123' });
});

// [POST] /login (Inicio de sesión)
app.post('/login', (req, res) => {
    // TODO: Semana 3 - Validar credenciales y generar JWT
    res.json({ message: 'Login exitoso', token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...' });
});

// [GET] /profile (Obtener perfil y hardware) - Ruta Privada
app.get('/profile', (req, res) => {
    // TODO: Validar Token
    res.json({
        username: 'GamerPro',
        hardware: { cpu: 'Intel i5', gpu: 'RTX 3060', ram: '16GB' }
    });
});

app.listen(PORT, () => {
    console.log(`Users Service corriendo en puerto ${PORT}: Gestión de Usuarios`);
});