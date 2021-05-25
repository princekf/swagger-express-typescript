import * as express from "express";
import {Routes} from './apiRoutes';
import * as swaggerUi from 'swagger-ui-express';
import fs = require('fs');

class App {

    public app: express.Application;
    public routes:Routes = new Routes();
    private swaggerFile:string = `${process.cwd()}/swagger/index.json`
    private swaggerData:string = fs.readFileSync(this.swaggerFile, 'utf8');
    private swaggerJSON = JSON.parse(this.swaggerData);

    constructor() {
        this.app = express();
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.routes.routes(this.app);
        this.app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(this.swaggerJSON, null, null, null));
    }

}

export default new App().app;