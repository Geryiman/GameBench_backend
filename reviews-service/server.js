const express = require('express');
const app = express();
const PORT = process.env.PORT || 3003;

app.use(express.json());

// --- RUTAS DE REVIEWS Y PREDICCIÓN ---

// [GET] /game/:gameId (Obtener reviews de un juego)
app.get('/game/:gameId', (req, res) => {
    res.json({
        gameId: req.params.gameId,
        reviews: [
            { user: 'User1', score_tech: 8, score_art: 10, comment: 'Corre bien en media' },
            { user: 'User2', score_tech: 4, score_art: 9, comment: 'Mucho lag' }
        ]
    });
});

// [POST] /create (Crear nueva review)
app.post('/create', (req, res) => {
    // TODO: Semana 5 - Guardar en Mongo Reviews
    res.json({ message: 'Review publicada correctamente' });
});

// [POST] /predict (Algoritmo de predicción)
app.post('/predict', (req, res) => {
    const { userHardware, gameRequirements } = req.body;
    // TODO: Semana 5 - Lógica de comparación de hardware
    res.json({
        prediction: 'Jugable',
        fps_estimated: '45-60 FPS',
        bottleneck: 'CPU'
    });
});

app.listen(PORT, () => {
    console.log(`Reviews Service corriendo en puerto ${PORT}`);
});