import express from 'express';

const app = express();

app.get('/health', (req, res) => {
    res.json({
        name: "Health App",
        message: "Sucessfull!!"
    }).status(201)
})

export { app }

export default app;