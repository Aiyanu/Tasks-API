import { Application, Request, Response, NextFunction } from 'express';
import mongoose from "mongoose"
import Task from "../models/Task"

export const getAllTasks = async(req:Request,res:Response) => {
    try{
        const tasks = await Task.find({})
        res.status(200).json({tasks})
    } catch(err){
        res.status(400).json({err})
    }
}

export const addTask = async(req:Request,res:Response) =>{
    try{
        const tasks = await Task.create(req.body)
        res.status(201).json({tasks})
    } catch(err){
        res.status(401).json({err})
    }
}

export const getSingleTask = async(req:Request,res:Response) =>{
    const {id:TaskID} = req.params
    if(!mongoose.isValidObjectId(TaskID)){
        res.status(400).json({err:"Invalid ID"})
    }
    try{
        const task = await Task.findById({_id:TaskID})
        res.status(200).json({task})
    } catch(err){
        res.status(400).json({err})
    }
}

export const deleteTask = async(req:Request,res:Response) =>{
    const {id:TaskID} = req.params
    if(!mongoose.isValidObjectId(TaskID)){
        res.status(400).json({err:"Invalid ID"})
    }
    try{
        const task = await Task.findByIdAndDelete({_id:TaskID})
        res.status(200).json({task:null,status:"success"})
    } catch(err){
        res.status(400).json({err})
    }
}

export const updateTask = async(req:Request,res:Response) =>{
    const {id:TaskID} = req.params
    if(!mongoose.isValidObjectId(TaskID)){
        res.status(400).json({err:"Invalid ID"})
    }
    try{
        const task = await Task.findByIdAndUpdate({_id:TaskID},{...req.body},{
            new:true,
            runValidators:true
        })
        res.status(200).json({task})
    } catch(err){
        res.status(400).json({err})
    }
}

export const editTask = async(req:Request,res:Response) =>{
    const {id:TaskID} = req.params
    if(!mongoose.isValidObjectId(TaskID)){
        res.status(400).json({err:"Invalid ID"})
    }
    try{
        const task = await Task.findByIdAndUpdate({_id:TaskID},{...req.body},{
            new:true,
            runValidators:true,
            overwrite:true,
        })
        res.status(200).json({task})
    } catch(err){
        res.status(400).json({err})
    }
}