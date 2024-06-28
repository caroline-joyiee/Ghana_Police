import { Schema, model } from "mongoose";

const statementSchema = new Schema({
     incidentType: {enum: ['criminal', 'non-criminal']},
    civilianStatus: {enum: ['suspect', 'complainant', 'witness']},
    statement: {type:String},
    caseStatus: {enum: ['open', 'close']},
    createdAt: {type: Date, default: Date.now},
    updateedAt: {type: Date, default: Date.now}

    
})

 export const StatementModel = model('statment', statementSchema)



// const civillianSchema = new Schema({
//     civilianId: {type: String},
//     firstName: {type:String},
//     lastName: {type:String},
//     middleName: {type:String},
//     dateOfBirth: {type:Date}

    
// })


