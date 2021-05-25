import {Request, Response} from 'express';
import { productController } from './product.controller';
import { contactController } from "./contact.controller";

export class Routes {       
  public routes(app): void {          
      app.route('/')
      .get((req: Request, res: Response) => {            
          res.status(200).send({
              message: 'It is a GET Request.'
          })
      });
      contactController.addRoutes(app);
      productController.addRoutes(app);
                 
  }
}