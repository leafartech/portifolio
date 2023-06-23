import clientPromise from '../../lib/mongodb'
import { Request, Response } from 'express'

export default async function Blog(req: Request, res: Response) {
    const client = await clientPromise
    const db = client.db('BASEDEDADOS')
    console.log(req.body)

    const userData = await db.collection('portifolio').findOne({name: req.body.name})

    if (!userData) return res.send({error: 'Dados inválidos'})
    console.log(req.body)

    let updated = userData
    if (typeof updated['blogPosts'] === 'undefined') {
        updated['blogPosts'] = []
    }

    let subject = req.body.subject.toLowerCase().replace(/\s/g, '-')
    let exists = false
    updated['blogPosts'].map((post: []) => {
        Object.keys(post)[0] === subject ? exists = true : ''
    })

    if (!exists) { //Assunto não existe
        updated['blogPosts'].push({
            [req.body.subject.toLowerCase().replace(/\s/g, '-')]: [{
                title: req.body.mainTitle,
                description: req.body.mainDescription,
                topics: req.body.topicTitle,
                contents: req.body.topicContent
            }]
        })
    } else { //Assunto já existe
        let p = 0
        userData['blogPosts'].map((post: [], index: number) => {
            Object.keys(post)[0] === subject ? p = index : '' 
        })
        
        updated['blogPosts'][p][subject].push(
            {
                title: req.body.mainTitle,
                description: req.body.mainDescription,
                topics: req.body.topicTitle,
                contents: req.body.topicContent
            }
        )
    }
        
    await db.collection('portifolio').findOneAndUpdate({name: req.body.name}, {
        $set: {
            'blogPosts': updated['blogPosts']
        }
    })

    res.send({success: true, ...userData})
}