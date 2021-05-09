import { Request, Response } from 'express';
import EmailService from '../services/EmailService';

const users = [
    { name: 'Thays', email: 'thays.sn@hotmail.com', password: 'a23sa32@f32o!29o3d' }
]

class UserController {
    async index(req: Request, res: Response){
        return res.json(users);
    }

    async create(req: Request, res: Response){
        const emailService = new EmailService();

        emailService.sendMail({
            to: { name: 'usuario', email: 'usuario@dominio.com'},
            message: {subject: 'Seja bem vindo!', body: 'Seja bem vindo!'}
        });
    }

};


export default new UserController();