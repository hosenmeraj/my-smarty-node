const express = require('express');
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000;
app.use(express.json())

app.use(cors())
app.get('/', (req, res) => {
    res.send('Hello from smarty  node you start you own!!')
});
const users = [
    { id: 1, name: "meraj", email: "m@gmail.com", phone: "01888888" },
    { id: 2, name: "robin", email: "r@gmail.com", phone: "01888888" },
    { id: 3, name: "noman", email: "n@gmail.com", phone: "01888888" },
    { id: 4, name: "raj", email: "r@gmail.com", phone: "01888888" },
    { id: 5, name: "samim", email: "s@gmail.com", phone: "01888888" },
]
app.get('/users', (req, res) => {
    // console.log('query', req.query)
    if (req.query.name) {
        //filter by serch query
        const search = req.query.name.toLowerCase()
        const match = users.filter(user => user.name.toLowerCase().includes(search))
        res.send(match)
    }
    else {

        res.send(users)
    }
})

app.get("/user/:id", (req, res) => {
    console.log(req.params);
    const id = parseInt(req.params.id)
    const user = users.find(u => u.id === id)
    res.send(user)
})

app.post('/user', (req, res) => {
    console.log('request', req.body)
    const user = req.body;
    user.id = users.length + 1;
    users.push(user)
    res.send(user)
})

app.get('/fruits', (req, res) => {
    res.send(["mangon", "apple", "bannana"])
})

app.listen(port, () => {
    console.log('Listening to port', port)
})