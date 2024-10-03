import dotenv from 'dotenv';
import bodyParser from 'body-parser';

import express, { Express, Request, Response } from "express";
import path from 'path';
import { fileURLToPath } from 'url';
import authRoutes from './routes/authRoutes.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, '../.env') });

const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use('/auth', authRoutes);



app.get('/', (req:Request, res:Response) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
