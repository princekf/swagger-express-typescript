import {Request, Response} from 'express';
import { StudentController } from "./student.controller";

export class Routes {       
  public studentController: StudentController = new StudentController();
  public routes(app): void {          
      app.route('/')
      .get((req: Request, res: Response) => {            
          res.status(200).send({
              message: 'It is a GET Request.'
          })
      });

      // Create a new contact
      app.route('/student')
      .post(this.studentController.addNewStudent);
      // Get all contacts
      app.route('/student')
      .get(this.studentController.getStudents)
      app.route('/student/:studentId')
      // edit specific contact
      .get(this.studentController.getStudentWithID)
      .put(this.studentController.updateStudent)
      .delete(this.studentController.deleteStudent)
                 
  }
}