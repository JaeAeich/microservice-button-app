const express = require('express');
const app = express();

// Use the environment variable or a default value
const MICRO_LINK = process.env.MICROSERVICE_LINK || 'https://example.com';

app.get('/', (req, res) => {
  res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Microservice Button</title>
        </head>
        <body>
            <h1>Open Microservice version written in node</h1>
            <button id="openServiceButton">Go to Microservice</button>
            <script>
                // Inject the environment variable into the client-side JavaScript
                const MICROSERVICE_LINK = "${MICRO_LINK}";

                document.getElementById('openServiceButton').addEventListener('click', () => {
                    if (MICROSERVICE_LINK) {
                        window.open(MICROSERVICE_LINK, '_blank');
                    } else {
                        alert('Microservice link is not defined!');
                    }
                });
            </script>
        </body>
        </html>
    `);
});

// Start the server
app.listen(80, () => {
  console.log('Server is running on port 80');
});
