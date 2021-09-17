
const express = require('express')
const Joi = require('joi')
const app = express();

app.use(express.json());

const users = [
    {
        id: 1,
        name: 'deep'
    },
    {
        id: 2,
        name: 'ishwor'
    }
];

app.get('/', (req, res) => {
    res.send('Welcome Home');
});

// to get all users
app.get('/api/users/', (req, res) => {
    res.send(users);
});


//to get particular user
app.get('/api/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user){
        return res.status(404).send('User not found');
    }
    res.send(user);
});

//to PUSH user with out validation
        // app.post('/api/users/',(req, res) => {
        //     const user=[
        //         {
        //             id:users.length+1,
        //             name:req.body.name
        //         }
        //     ];
        //     users.push(user);
        // });


//to PUSH user with validation
app.post('/api/users/', (req, res) => {

    const schema = Joi.object({
        name: Joi.string().min(3).required()
    });

    const result = schema.validate(req.body);

    if (result.error) {
       return res.sendStatus(400).send(result.error);
    }
    const user = [
        {
            id: users.length + 1,
            name: req.body.name
        }
    ];
    users.push(user);
});

//to update user
app.put('/api/users/:id', (req, res)=>{
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user){
        return res.status(404).send('User not found');
    }


    const schema = Joi.object({
        name: Joi.string().min(3).required()
    });
    const result = schema.validate(req.body);
    if (result.error) {
        return res.sendStatus(400).send(result.error);
    }

    user.name=req.body.name;
    res.send(user);
});

//to delete a user
app.delete('/api/users/:id',(req, res)=>{
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) {
        return res.status(404).send('User not found');
    }

    const index = users.indexOf(user);
    users.splice(index, 1);
});



//to get multiple parameters from URL
        // app.get('/api/posts/:year/:title', (req, res) => {
        //     res.send(req.params);
        // });

const port = 3000;
app.listen(port, () => console.log('listening on port : ' + port));