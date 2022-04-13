import * as express from "express";
import * as bodyParser from "body-parser"
import * as cors from "cors";

import Database from './database/db';
import ClientController from "./controller/clientController";
import ContractStatusController from "./controller/contractStatusController";

class App {
    public app: express.Application;
    private _db: Database;
    private bodyParser;

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
        this.app.route('/').get((req, res) => {
            res.send({ versao : '0.0.1'});
        })
        
        this.app.route('/api/v1/client').get(ClientController.get)
        this.app.route('/api/v1/client/by/:status?').get(ClientController.getBy)
        this.app.route('/api/v1/client/:id').get(ClientController.getById)
        this.app.route('/api/v1/client').post(ClientController.create)
        this.app.route('/api/v1/client/:id').delete(ClientController.delete)
        this.app.route('/api/v1/client/:id').put(ClientController.update)
        this.app.route('/api/v1/client/disable/:id').put(ClientController.disable)
        this.app.route('/api/v1/client/action/:id/:action').put(ClientController.chargeGrateful)

        this.app.route('/api/v1/contract/status').get(ContractStatusController.get)
        this.app.route('/api/v1/contract/status/:id').get(ContractStatusController.getById)
        this.app.route('/api/v1/contract/status').post(ContractStatusController.create)
        this.app.route('/api/v1/contract/status/:id').put(ContractStatusController.update)
        this.app.route('/api/v1/contract/status/:id').delete(ContractStatusController.delete)
    }
}

export default new App();