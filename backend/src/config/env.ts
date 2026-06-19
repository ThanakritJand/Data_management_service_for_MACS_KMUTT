import dotenv from 'dotenv';

dotenv.config()

export const config =  {
    port: process.env.PORT || 4000 ,
    jwt: process.env.JWT_SECRECT ||  'fallback_secret_key' ,
    jwtExpiresIn: (process.env.JWT_EXPIRES_IN || '1d') as string ,
    databaseURL: process.env.DATABASEURL
}