import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { User } from "../model/Types";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";

export class UserController {
    async createUser(req: Request, res: Response) {
        try {

            const { name, email, password, role } = req.body

            if(!name || !email || !password || !role){
                res.status(422).send("Preencha todos os campos")
            }

            const user = await new UserBusiness().findUserByEmail(email)

            if (user) {
                res.status(409).send("Este email já está cadastrado")
            }

            const userId = new IdGenerator().generate()
            const userPassword = new HashManager().createHash(password)

            const newUser = new User(userId, name, email, userPassword, role)
            await new UserBusiness().createUser(newUser)

            res.status(200).send("Usuário Criado!")
            
        } catch (error) {
            
        }
    }
}