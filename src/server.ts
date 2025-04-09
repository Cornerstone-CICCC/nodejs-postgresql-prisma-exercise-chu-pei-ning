import express, { Request, Response } from 'express'
import dotven from 'dotenv'
import productRouter from './routes/product.routes'
dotven.config()

// Create server
const app = express()

// Middleware


// Routes
app.use('/products', productRouter)

// Fallback
app.use((req: Request, res: Response) => {
  res.status(404).send("Invalid route!")
})

// Start server
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/`)
})