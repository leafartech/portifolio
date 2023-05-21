import clientPromise from '../../../lib/mongodb'

export default async function Login(req, res) {
    try {
        const client = await clientPromise;
        const db = client.db("BASEDEDADOS");

        let person = null
        await db.collection('blog').find({name: 'Rafa'}).forEach(item => {
            person = item
        })
        person.projects.unshift({
            name: req.body.name,
            description: req.body.description,
            data: req.body.data,
            subject: req.body.subject,
            link: req.body.link,
            body: [
                [req.body.contentSub1, req.body.contentData1],
                [req.body.contentSub2, req.body.contentData2],
                [req.body.contentSub3, req.body.contentData3]
            ]
        })

        await db.collection('blog').findOneAndUpdate({name: 'Rafa'}, {
            $set: {
                "projects": person.projects
            }
        })

        res.send(person)
    } catch(e) {
        console.log(e)
    }
}