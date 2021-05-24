import { StudentModel } from './student.model';
import { Request, Response } from 'express';

export class StudentController {
  public addNewStudent(req: Request, res: Response) {
    const collegeName = req.get('COLLEGE_NAME');
    const Student = StudentModel.createModel(collegeName, '2020');
    let newStudent = new Student(req.body);

    newStudent.save((err, student) => {
      if (err) {
        res.send(err);
      }
      res.json(student);
    });
  }

  public getStudents(req: Request, res: Response) {
    const collegeName = req.get('COLLEGE_NAME');
    const Student = StudentModel.createModel(collegeName, '2020');
    Student.find({}, (err, student) => {
      if (err) {
        res.send(err);
      }
      res.json(student);
    });
  }

  public getStudentWithID(req: Request, res: Response) {
    const collegeName = req.get('COLLEGE_NAME');
    const Student = StudentModel.createModel(collegeName, '2020');
    Student.findById(req.params.studentId, (err, student) => {
      if (err) {
        res.send(err);
      }
      res.json(student);
    });
  }

  public updateStudent(req: Request, res: Response) {
    const collegeName = req.get('COLLEGE_NAME');
    const Student = StudentModel.createModel(collegeName, '2020');
    Student.findOneAndUpdate({ _id: req.params.studentId }, req.body, { new: true }, (err, student) => {
      if (err) {
        res.send(err);
      }
      res.json(student);
    });
  }

  public deleteStudent(req: Request, res: Response) {
    const collegeName = req.get('COLLEGE_NAME');
    const Student = StudentModel.createModel(collegeName, '2020');
    Student.remove({ _id: req.params.studentId }, (err) => {
      if (err) {
        res.send(err);
      }
      res.json({ message: 'Successfully deleted student!' });
    });
  }


}