const express = require('express');

let app = express();

let users = [
    { id: '1', name: 'andrew', email: 'andy@gmail.com' },
    { id: '2', name: 'john', email: 'john@gmail.com' }
];

let squabs = [
    { id: '1', userId: '1', body: 'I have so many complaints' },
    { id: '2', userId: '1', body: 'never mind' },
    { id: '3', userId: '2', body: 'hello there' },
    { id: '4', userId: '2', body: 'I am tired' }
];

let authenticate = (req, res, next) => {
    if (req.query.password === 'letmein') {
        next();
    } else {
        res.end('you shall not pass');
    }
};

let listUsers = (req, res) => {
    authenticate(req, res, () => {
        res.send(users);
    });
};

let squabsByUser = (req, res) => {
    let userId = req.params.userId;
    let mySquabs = squabs.filter(squab => {
        squab.userId === userId;
    });
};

app.get('/users', authenticate, listUsers);
app.get('/users/:userId/squabs', authenticate, squabsByUser);

app.listen(3000);
