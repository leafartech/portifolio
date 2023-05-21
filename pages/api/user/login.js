import clientPromise from '../../../lib/mongodb'

export default async function Login(req, res) {
    try {
        const client = await clientPromise;
        const db = client.db("BASEDEDADOS");

        let person = null
        await db.collection('blog').find({ name: req.body.one}).forEach(item => {
            person = item
        })

        if (person === null ) return res.send({error: true})

        res.send(person)
    } catch(e) {
        console.log(e)
    }
}