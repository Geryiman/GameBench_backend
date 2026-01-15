const express = require('express');
const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.json());

// --- RUTAS DE JUEGOS ---

// [GET] /search (Buscar juegos en IGDB)
app.get('/search', (req, res) => {
    const query = req.query.q;
    // TODO: Semana 4 - Conectar con IGDB API
    res.json({
        source: 'Mock Data (IGDB Pending)',
        results: [
            { id: 1, title: `Resultado para ${query}`, cover: 'url_img' },
            { id: 2, title: 'Cyberpunk 2077', cover: 'url_img' }
        ]
    });
});

// [GET] /details/:id (Detalle + Requisitos Steam)
app.get('/details/:id', (req, res) => {
    const gameId = req.params.id;
    // TODO: Semana 4 - Obtener ID de Steam y sus requisitos
    res.json({
        gameId: gameId,
        title: 'Cyberpunk 2077',
        requirements: {
            minimum: { gpu: 'GTX 1060', cpu: 'i7-4790' },
            recommended: { gpu: 'RTX 2060', cpu: 'i7-12700' }
        }
    });
});

app.listen(PORT, () => {
    console.log(`Catalog Service corriendo en puerto ${PORT}: Juegos y Requisitos`);
});