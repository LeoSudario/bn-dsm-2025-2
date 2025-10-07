import express, { json, urlencoded } from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import indexRouter from './routes/index.js';
import usersRouter from './routes/users.js';
import categoriasRouter from './routes/categorias.js'; // Import categoriasRouter
import clientesRouter from './routes/clientes.js'
import fornecedorRouter from './routes/fornecedor.js';

const app = express();

// Middleware setup
app.use(logger('dev'));  // Log every request
app.use(json());         // Parse incoming JSON requests
app.use(urlencoded({ extended: false }));  // Parse URL-encoded bodies
app.use(cookieParser()); // Parse cookies

// Route handling
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/categorias', categoriasRouter);  // Register categoriasRouter
app.use('/clientes', clientesRouter)
app.use('/fornecedores', fornecedorRouter);
export default app;
