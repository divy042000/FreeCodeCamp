const express =require('express');
const app=express();
const cors=require('cors');
app.use(cors({optionsSuccessStatus:200}));

const ipRoutes=require('./routes/headerRoutes.js');

app.use('/api',ipRoutes);

const port = 5000;
app.listen(port, () => {
 console.log(`Server running at http://localhost:${port}`);
});
