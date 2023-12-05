import express from 'express';
import { Request, Response } from 'express'
import { sampleproduct } from './data'
const app = express();
app.get('/api/products', (req: Request, res: Response) => {
    res.json(sampleproduct)
})
const PORT = 4000
app.listen(PORT, () => {
    console.log(`server started at http://localhost:${PORT}`)
})