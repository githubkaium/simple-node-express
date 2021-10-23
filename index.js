const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const port = 5000;

app.get('/', (req, res) => {
    res.send('Hello from first node with nodemon');
});

const users = [
    { id: 0, name: 'Kami', email: 'kami@gmail.com', phone: '01928374658' },
    { id: 1, name: 'Sami', email: 'sami@gmail.com', phone: '01928375646' },
    { id: 2, name: 'Jami', email: 'jami@gmail.com', phone: '01928374645' }
]

app.get('/users', (req, res) => {
    const search = req.query.search;
    if (search) {
        const searchResult = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(searchResult);
    }
    else {
        res.send(users);
    }
});

//app.METHOD
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post', req.body)
    // res.send(JSON.stringify(newUser))
    res.json(newUser)
})

//dynamic api
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user);
    // console.log(req.params.id);
})

app.listen(port, () => {
    console.log('listening to port:', port)
});
