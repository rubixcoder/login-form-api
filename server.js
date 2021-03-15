const express = require('express');
const cors = require('cors');

const app = express();
const logger = require('./config/logger.config');
const userRoutes = require('./routes/user.route');

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const port = process.env.PORT || 3000;

app.use(require('body-parser').urlencoded({extended: true}));
app.use(require('body-parser').json())
app.use(cors());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
userRoutes(app);

app.listen(port, () => {
    logger.info(`Application started on port: ${port}`);
});
