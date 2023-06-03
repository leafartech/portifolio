import clientPromise from '../../lib/mongodb'

export default async function GET(req, res) {
    const client = await clientPromise
    const db = client.db('BASEDEDADOS')

    let userData = null

    await db.collection('portifolio').find({name: 'RAFAEL BORGES BEZERRA'}).forEach(user => userData = user)

    res.send(userData['blogPosts'])
}