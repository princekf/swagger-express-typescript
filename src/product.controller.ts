import { Request, Response } from 'express';

class Product {
  id: string;
  name: string;
  price: number;
}

class ProductController {

  private products:Array<Product>;

  constructor() {

    this.init();
    
  }

  private init = () => {
    this.products = [
      {
        id: '1',
        name: 'Lakid ROR Laptop',
        price: 1232
      },
      {
        id: '2',
        name: 'Mogh YT Mobile',
        price: 436
      }
    ]
  }

  private add = (req: Request, res: Response) => {
    const product:Product = req.body;
    if(product.id && product.name){
      this.products.push(product);
      return res.status(200).json({message: `Added ${product.name} successfully`})
    }
    return res.status(400).json({message: 'Invalid product'});
  };

  private list = (req: Request, res: Response) => {
    return res.status(200).json(this.products);
  };

  private fetch = (req: Request, res: Response) => {

    const {id} = req.params;
    const product = this.products.find((cnt => cnt.id === id));
    if(product){

      return res.status(200).json(product);

    }
    return res.status(400).json({message: 'No product found'});
  };

  private update = (req: Request, res: Response) => {
    const {id} = req.params;
    const product:Product = req.body;
    const productE = this.products.find((cnt => cnt.id === id));
    if(productE){
      productE.name = product.name;
      productE.price = product.price;
      return res.status(200).json({message: `Updated ${product.name} successfully`})

    }
    return res.status(400).json({message: 'No product found'});
  };

  private remove = (req: Request, res: Response) => {
    const {id} = req.params;
    this.products = this.products.filter(product => product.id !== id);
    return res.status(200).json({message: 'Removed product'});
  };


  addRoutes(app: any) {
    // Create a new product
    app.route('/api/product')
    .post(this.add);
    // Get all products
    app.route('/api/product')
    .get(this.list)
    app.route('/api/product/:id')
    // get specific product
    .get(this.fetch)
    // edit specific product
    .put(this.update)
    // remove specific product
    .delete(this.remove)
  }
}

export const productController:ProductController = new ProductController();