import * as dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import { ProfileRouter } from './routes/profile';
import swaggerUI from 'swagger-ui-express';
import swaggerDocument from './generated/swagger-output.json';

dotenv.config();

if (!process.env.PORT) {
  process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

app.use(cors());
app.use(express.json());
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use('/api/profile', ProfileRouter);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
