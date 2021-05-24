import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export class StudentModel {
    private static StudentSchema = new Schema({
        firstName: {
            type: String,
            trim: true,
            required: 'First name is mandatory'
        },
        lastName: {
            type: String,
            trim: true,
            required: 'Last name is mandatory'
        },
        email: {
            type: String            
        },
        cource: {
            type: String            
        },
        phone: {
            type: Number            
        },
        created_date: {
            type: Date,
            default: Date.now
        }
    });

    public static createModel = (college_name:string, year_of_admission:string) => {
        const mongoConnection = mongoose.connection.useDb('db_' + college_name);
        return mongoConnection.model('Student', StudentModel.StudentSchema, 'students_' + year_of_admission);
    }
}