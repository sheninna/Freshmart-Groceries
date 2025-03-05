require('dotenv').config()

const express = require('express')

//Services
const productServices = require('./routes/inventory-route')
const posServices = require('./routes/pos-routes')
const authService = require('./routes/auth-routes')

//request mapper
const mapper = '/api/v1'

//init app
const app = express()

//middleware
app.use(express.json())
app.use((req, res, next) =>{
    console.log(req.path, req.method)
    next()
})

// API Routes
app.use(`${mapper}/inventory`, productServices);
app.use(`${mapper}/pos`, posServices);
app.use(`${mapper}/auth`, authService);
app.use(`${mapper}/employees`, employeeRoutes); // 🔥 Fixed Route

// Catch-All 404 Handler
app.use((req, res) => {
    res.status(404).json({ error: 'No such endpoint exists' });
});

// Start Server
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`ESB running on port ${PORT}`);
});