import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import { MercadoPagoConfig, Preference } from 'mercadopago';
import process from 'process'; // Add this line to import the process object

dotenv.config({ path: 'C:/Users/lego1/Documents/Repos/page_web/.env' });

const app = express();
const port = 5000;

// Configurar CORS para permitir solicitudes desde http://localhost:5173
app.use(cors({ origin: 'http://localhost:5173' }));
app.use(bodyParser.json());

console.log(process.env.VITE_ACCESS_TOKEN_MERCADOPAGO);

app.post('/create-preference', async (req, res) => {
  const preferenceData = req.body;
  console.log('Creating preference with data:', preferenceData);

  try {
    const client = new MercadoPagoConfig({ accessToken: process.env.VITE_ACCESS_TOKEN_MERCADOPAGO });
    const preference = new Preference(client);


    const response = await preference.create(
      preferenceData
    );

    console.log('Preference created:', response);

    res.json(response);
  } catch (error) {
    console.error('Error creating preference:', error);
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});