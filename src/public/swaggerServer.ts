import { createUserRouter } from '../routers/userRouter';
import { createActorRouter } from '../routers/actorRouter';
import { createEmployeeRouter } from '../routers/employeeRouter';
import { createActionTemplateRouter } from '../routers/actionTemplateRouter';
import { createSchemeRouter } from '../routers/schemeRouter';

const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/users", createUserRouter);
app.use("/employees", createEmployeeRouter);
app.use("/actors", createActorRouter);
app.use("/action-templates", createActionTemplateRouter);
app.use("/schemes", createSchemeRouter);

app.listen(3333, () => console.log('Server started on port 3333'));

