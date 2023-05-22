import clientPromise from '../../../lib/mongodb'
import NextCors from 'nextjs-cors'

export default async function Login(req, res) {
    try {
        await NextCors(req, res, {
            // Options
            methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
            origin: '*',
            optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
        });

        
        const client = await clientPromise;
        const db = client.db("BASEDEDADOS");
        
        let person = null
        await db.collection('blog').find({ name: req.body.one}).forEach(item => {
            person = item
        })
        
        if (person === null ) return res.send({error: true})
        
        res.setHeader('Access-Control-Allow-Origin', 'https://rafabezerra.com.br'); // ou especifique o domínio do cliente permitido
        res.setHeader('Access-Control-Allow-Methods', 'POST'); // Métodos HTTP permitidos (nesse caso, apenas POST)
        res.send(person)
    } catch(e) {
        console.log(e)
    }
}
