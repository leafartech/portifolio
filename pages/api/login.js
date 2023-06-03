import clientPromise from '../../lib/mongodb'

export default async function Login(req, res) {
    console.log(req.body)
    const client = await clientPromise
    const db = client.db('BASEDEDADOS')


    let userData = null

    await db.collection('portifolio').find({name: req.body.name}).forEach(user => userData = user)

    if (userData === null) return res.send({error: 'Dados inválidos'})

    if (userData.password !== req.body.password) return res.send({error: 'Dados inválidos'})

    res.send(userData)
}