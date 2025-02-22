const express = require('express');
const fetch = require('node-fetch');
const app = express();
const port = 3000;

app.get('/fetch-emails', async (req, res) => {
    try {
        const response = await fetch('https://pobben.app.n8n.cloud/webhook-test/6576c0a0-377e-4bab-bbc1-0a817cd95973');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});