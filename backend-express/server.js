
import express from 'express';
import cors from 'cors'
import { User } from '../models/User.js';
import { connect } from '../database/db.js';


const app = express();

app.use(cors())
app.use(express.json())

let arr = ['Tahsin','Tuhin','Badar','Dip','Apu','Najibur']


app.get('/', (req, res) => {
    
    res.send('This is an express server with database for testing.It has  /get for get request and  /post for post request')
});

app.get('/get', (req, res) => {
    
    User.find().then(todo => res.json(todo)
    ).then(console.log('\n'))

});

app.post('/post',async(req,res)=>{

    const e = await User.create({
        name:req.body.name,
        age:req.body.age
    })
    e.save()

    User.find().then(user => res.json(user))
})




app.listen(4001,()=>{
    console.log('Listening on port 4001');
});