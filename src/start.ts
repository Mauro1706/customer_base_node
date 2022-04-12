import * as express from "express";
import * as bodyParser from "body-parser"
import * as cors from "cors";

import Database from './database/db';
import ClientController from "./controller/clientController";
import ContractStatusController from "./controller/contractStatusController";

import swaggerUi = require('swagger-ui-express');
import fs = require('fs');

class App {
    public app: express.Application;
    private _db: Database;
    private bodyParser;

    /* Swagger files start */
    private swaggerFile: any = (process.cwd()+"/swagger/swagger.json");
    private swaggerData: any = fs.readFileSync(this.swaggerFile, 'utf8');
    private customCss: any = fs.readFileSync((process.cwd()+"/swagger/swagger.css"), 'utf8');
    private swaggerDocument = JSON.parse(this.swaggerData);
    /* Swagger files end */

    constructor() {
        this.app = express();   
        this._db = new Database();
        this._db.createConnection();
        this.middler();
        this.routes();     
    }

    enableCors(){
        const options : cors.CorsOptions = {
            methods: "GET,OPTIONS,PUT,POST,DELETE",
            origin: "*"
        }

        this.app.use(cors(options));
    }

    middler(){
        this.enableCors();
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }

    routes(){
        /**
         * @openapi
         * /:
         *   get:
         *     description: Welcome to swagger-jsdoc!
         *     responses:
         *       200:
         *         description: Returns a mysterious string.
         */
        this.app.route('/').get((req, res) => {
            res.send({ versao : '0.0.1'});
        })
        
        this.app.route('/api/v1/client').get(ClientController.get)
        this.app.route('/api/v1/client/by/:status?').get(ClientController.getBy)
        this.app.route('/api/v1/client/:id').get(ClientController.getById)
        this.app.route('/api/v1/client').post(ClientController.create)
        this.app.route('/api/v1/client/:id').put(ClientController.update)
        this.app.route('/api/v1/client/disable/:id').put(ClientController.disable)
        this.app.route('/api/v1/client/action/:id/:action').put(ClientController.chargeGrateful)

        this.app.route('/api/v1/contract/status').get(ContractStatusController.get)
        this.app.route('/api/v1/contract/status/:id').get(ContractStatusController.getById)
        this.app.route('/api/v1/contract/status').post(ContractStatusController.create)
        this.app.route('/api/v1/contract/status/:id').put(ContractStatusController.update)
        this.app.route('/api/v1/contract/status/:id').delete(ContractStatusController.delete)

        // swagger docs
        this.app.use('/api/docs', swaggerUi.serve,
            swaggerUi.setup(this.swaggerDocument, null, null, this.customCss));
    }
}

export default new App();