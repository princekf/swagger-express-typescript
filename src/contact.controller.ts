import { Request, Response } from 'express';

class Contact {
  id: string;
  name: string;
  email?: string;
  mobile?: string;
}

class ContactController {

  private contacts:Array<Contact>;

  constructor() {

    this.init();
    
  }

  private init = () => {
    this.contacts = [
      {
        id: '1',
        name: 'Johnny Depp',
        email: 'johnny.depp@example.com',
        mobile: '1234567'
      },
      {
        id: '2',
        name: 'Angelina Jolie',
        email: 'angelina.jolie@example.com',
        mobile: '1234567'
      }
    ]
  }

  private add = (req: Request, res: Response) => {
    const contact:Contact = req.body;
    if(contact.id && contact.name){
      this.contacts.push(contact);
      return res.status(200).json({message: `Added ${contact.name} successfully`})
    }
    return res.status(400).json({message: 'Invalid contact'});
  };

  private list = (req: Request, res: Response) => {
    return res.status(200).json(this.contacts);
  };

  private fetch = (req: Request, res: Response) => {

    const {id} = req.params;
    const contact = this.contacts.find((cnt => cnt.id === id));
    if(contact){

      return res.status(200).json(contact);

    }
    return res.status(400).json({message: 'No contact found'});
  };

  private update = (req: Request, res: Response) => {
    const {id} = req.params;
    const contact:Contact = req.body;
    const contactE = this.contacts.find((cnt => cnt.id === id));
    if(contactE){
      contactE.name = contact.name;
      contactE.email = contact.email;
      contactE.mobile = contact.mobile;
      return res.status(200).json({message: `Updated ${contact.name} successfully`});

    }
    return res.status(400).json({message: 'No contact found'});
  };

  private remove = (req: Request, res: Response) => {
    const {id} = req.params;
    this.contacts = this.contacts.filter(contact => contact.id !== id);
    return res.status(200).json({message: 'Removed contact'});
  };


  addRoutes(app: any) {
    // Create a new contact
    app.route('/api/contact')
    .post(this.add);
    // Get all contacts
    app.route('/api/contact')
    .get(this.list)
    app.route('/api/contact/:id')
    // get specific contact
    .get(this.fetch)
    // edit specific contact
    .put(this.update)
    // remove specific contact
    .delete(this.remove)
  }
}

export const contactController:ContactController = new ContactController();