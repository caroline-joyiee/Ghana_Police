import { StatementModel } from "../models/police.js";

// function to store data in the database

export const addStatement = async (req, res) => {

    try {
        console.log('request', req.body)
    const addData = await StatementModel.create(req.body)
    res.status(200).send(addData)
    } catch (error) {
        console.log(error)
    }

   

}

export const getStatement = async (req, res) => {
    try {
        const getData = await StatementModel.find()
        {
            res.status(200).send(getData)
        }
        
    } catch (error) {
        console.log(error)
        
    }

}

export const singleStatement = async (req, res) => {
    try {
        const singleData = await StatementModel.findById(req.params.id);
        {
            res.status(200).send(singleData)
        }
        
    } catch (error) {
        
    }
}

export const updateStatment = async (req,res) => {
    try {
        const status = req.body.caseStatus;
        console.log('request', status)
        const updateData = await StatementModel.findByIdAndUpdate(req.params.id, {caseStatus: status});
        {
            res.status(200).send(updateData)
        }
    } catch (error) {
        console.log(error)
        
    }
}

export const deleteStatement = async (req,res) => {
    try {
        
    } catch (error) {
        
    }
}