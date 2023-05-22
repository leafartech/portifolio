import clientPromise from '../../../lib/mongodb'

export default async function Login(req, res) {
    try {
        const client = await clientPromise;
        const db = client.db("BASEDEDADOS");

        let person = null
        await db.collection('blog').find({name: 'Rafa'}).forEach(item => {
            person = item
        })

        res.setHeader('Access-Control-Allow-Origin', 'https://rafabezerra.com.br'); // ou especifique o domínio do cliente permitido
        res.setHeader('Access-Control-Allow-Methods', 'GET'); // Métodos HTTP permitidos (nesse caso, apenas POST)
        res.send(person.projects)
    } catch(e) {
        console.log(e)
    }
}