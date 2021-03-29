const { User } = require('../models');
const users = [
{
    name: "Bob Crosby",
    email: 'bob@example.com',
    password: 'passwordA'
},
{
    name: "Richard Haymes",
    email: 'richard@example.com',
    password: 'passwordB'
},
{
    name: "Russ Columbo",
    email: 'russ@example.com',
    password: 'passwordC'
}
]

const seedUser = () => User.bulkCreate(users);

module.exports = seedUser;
