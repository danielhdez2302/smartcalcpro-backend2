const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors()); // Permite que tu página web en Render se comunique con este servidor

// Ruta privada donde ocurrirán tus cálculos eléctricos protegidos
app.post('/api/calcular', (req, res) => {
    // 1. Aquí recibimos los datos que el usuario ingresó en tu página web
    const datosUsuario = req.body;

    // ==========================================================
    // 2. AQUÍ IRÁN TUS FÓRMULAS Y LÓGICA ELÉCTRICA REAL
    // (Por ahora dejamos este ejemplo de prueba)
    // ==========================================================
    let valorCalculado = datosUsuario.valorEntrada * 2; 

    // 3. Devolvemos únicamente el resultado final a la pantalla del usuario
    res.json({ resultado: valorCalculado });
});

// Configuración del puerto para que Render lo detecte automáticamente
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor server2.js corriendo de forma segura en el puerto ${PORT}`);
});