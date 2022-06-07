import {Request, Response } from "express";
export const CreateBookGuard ={
    async checkIfUserIsAdmin (req:Request | any, res:Response){
        if(req.user.role === "user"){
            return res.status(400).json({message:"sorry you are not an admin"})
        }
        

    }
}