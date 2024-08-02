const express = require('express');
const bodyParser = require('body-parser');
const emailRoutes = require('./routes/emailRoutes');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use('/api', emailRoutes);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
