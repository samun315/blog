import { Request } from "express";
import bcrypt from "bcrypt";
import config from "config";

export const generateHashPassword = async (password: string)=>{
    const salt = await bcrypt.genSalt(config.get<number>("SALT_ROUNDS"));

    return await bcrypt.hash(password, salt);
}


export const comparePassword =async (password:string, hashPassword:string) => {
    return await bcrypt.compare(password, hashPassword);
}

export const getToken =async (req:Request) => {
    
}