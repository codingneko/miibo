import express from 'express';
import { Express } from 'express';
import dotenv from 'dotenv';
import pino, { Logger } from 'pino';

dotenv.config();

const port = process.env.PORT || 8080;
const logger: Logger = pino();
const app: Express = express();

app.listen(port, () => {
    logger.info(`server is running on port ${port}`);
});
