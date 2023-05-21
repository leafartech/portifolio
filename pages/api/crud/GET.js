import clientPromise from '../../../lib/mongodb'

export default async function Login(req, res) {
    try {
        const client = await clientPromise;
        const db = client.db("BASEDEDADOS");

        let person = null
        await db.collection('blog').find({name: 'Rafa'}).forEach(item => {
            person = item
        })

        res.send(person.projects)
    } catch(e) {
        console.log(e)
    }
}