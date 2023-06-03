import clientPromise from '../../lib/mongodb'

export default async function Blog(req, res) {
    const client = await clientPromise
    const db = client.db('BASEDEDADOS')

    let userData = null

    await db.collection('portifolio').find({name: req.body.name}).forEach(user => userData = user)

    if (userData === null) return res.send({error: 'Dados inválidos'})

    let updated = userData
    if (typeof updated['blogPosts'] === 'undefined') {
        updated['blogPosts'] = []
    }

    let subject = req.body.subject.toLowerCase().replace(/\s/g, '-')
    let exists = false
    updated['blogPosts'].map((post) => {
        Object.keys(post)[0] === subject ? exists = true : ''
    })

    if (!exists) { //Assunto não existe
        updated['blogPosts'].push({
            [req.body.subject.toLowerCase().replace(/\s/g, '-')]: [{
                title: req.body.title,
                description: req.body.desc,
                topics: req.body.topicTitle,
                contents: req.body.topicContent
            }]
        })
    } else { //Assunto já existe
        let p = 0
        userData['blogPosts'].map((post, index) => {
            Object.keys(post)[0] === subject ? p = index : '' 
        })
        
        updated['blogPosts'][p][subject].push(
            {
                title: req.body.title,
                description: req.body.desc,
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