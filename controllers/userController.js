import db from '../db.js';
import shortid from 'shortid';

const users = db.data.users;

const index = function (req, res) {
    res.render('users/index', {
        users: users
    });
}
const search = function (req, res) {
    var name = req.query.name;
    var matchedUsers = users.filter(function (user) {
        return user.name.toLowerCase().indexOf(name.toLowerCase()) !== -1;
    });
    res.render('users/index', {
        users: matchedUsers,
        keywork: name
    });
}

const create = function (req, res) {
    res.render('users/create');
};
const detail = function (req, res) {
    var user = users.find(user => user.id == req.params.id);
    res.render('users/create', {
        user: user
    });
};
const save = async function (req, res) {
    req.body.id = shortid.generate();
    await db.data.users.push(req.body);
    await db.write();
    res.redirect('/users');
};

export { index, search, detail, create, save };