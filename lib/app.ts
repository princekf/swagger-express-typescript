import * as express from "express";
import * as bodyParser from "body-parser";
import {Routes} from './apiRoutes';
import * as mongoose from "mongoose";

class App {

    public app: express.Application;
    public routes:Routes = new Routes();
    // Since database is defined at runtime, no need to provide the database name in mongo connection url.
    public mongoUrl: string = 'mongodb://localhost/'; 

    constructor() {
        this.app = express();
        this.config();        
        this.routes.routes(this.app);
        mongoose.connect(this.mongoUrl, {
          useNewUrlParser: true,
        });
    }

    private config(): void{
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }

}

export default new App().app;