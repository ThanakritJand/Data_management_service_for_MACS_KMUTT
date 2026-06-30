import jwt from 'jsonwebtoken'
import { config } from '../config/env.js'
export const generateToken = (payLoad : {id: number; email: string; password:string; role: string}) => {
    return jwt.sign(payLoad , config.jwt , {
        expiresIn: config.jwtExpiresIn as any
    }) 
}