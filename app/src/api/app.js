/**
 * Created by Carlos Leonardo Camilo Vargas HUuamán on 12/9/16.
 */
const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();
require("./config/db").migrate()

const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: "Customer API User",
            description: "Customer API User",
            contact: {
                name: "Amazing Developer"
            },
            servers: ["http://localhost:8123"]
        },
        securityDefinitions: {
            api_key: {
                type: 'apiKey',
                name: 'token',
                in:"header"
            }
        },
        security: [
            {
                api_key: []
            }
        ]
    },
    apis: ["./routes/*.js"]
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

const routerSales = require('./routes/sales');
const routerSalesItens = require('./routes/salesitens');
const routerClient = require('./routes/client');
const routerProduct = require('./routes/product');
const routerUsers = require('./routes/users');
const routerAuth = require('./routes/auth');

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/sales', routerSales);
app.use('/salesitens', routerSalesItens);
app.use('/client', routerClient);
app.use('/product', routerProduct);
app.use('/users', routerUsers);
app.use('/auth', routerAuth);

app.use((req, res, next) => {
    const err = new Error('Rota não encontrada');
    err.status = 404;
    res.send(err.message);
});

app.listen(8123);
