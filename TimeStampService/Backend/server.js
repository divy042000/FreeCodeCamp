const express = require('express');
const app = express();

const timeRoutes=require('./routes/timeStampRoutes.js');
app.use('/api',timeRoutes);

const port = 5000;


app.listen(port, () => {
 console.log(`Server running at http://localhost:${port}`);
});
