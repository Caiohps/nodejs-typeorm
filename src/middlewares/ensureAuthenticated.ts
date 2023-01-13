import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
    sub: string;
}

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {

    //receber o token
    const authToken = request.headers.authorization;

    // validar se o token está preenchido
    if (!authToken) {
        return response.status(401).end();
    }

    const [,token] = authToken.split(" ");


    // verificar o token (validar)
    try {
        const { sub } = verify(token, "f4a01227dd89558eca770d5a546a1650") as IPayload;
        
        // recuperar informações do usuário
        request.user_id = sub;
        
        return next();
    } catch (err) {
        return response.status(401).end();
        
    }



}