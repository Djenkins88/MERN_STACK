import express from 'express'
import dotenv from 'dotenv'
dotenv.config();
import userRoutes from './routes/userRoutes.js'
//import db from './config/connection.js'

const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send({ message : "Hello World" })
})

app.use('/api/users', userRoutes);

// db.once('open', () => {
// })
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})