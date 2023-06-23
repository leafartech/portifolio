import clientPromise from '../../lib/mongodb'
import { Request, Response } from 'express'

const admin = async (req: Request, res: Response) => {
    try {

        const client = await clientPromise
        const db = client.db('BASEDEDADOS')
    
        const userData = await db.collection('portifolio').findOne({name: req.body.user})
    
        if (!userData) return res.send({error: 'Dados inválidos'})
    
        if (userData.password !== req.body.password) return res.send({error: 'Dados inválidos'})
    
        res.send(userData)
    } catch(e) {
        console.log(e)
    }
}

export default admin