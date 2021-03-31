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
},
{
    name: "Al Ness",
    email: 'al@example.com',
    password: 'passwordD'
},
{
    name: "Frank Ho",
    email: 'frank@example.com',
    password: 'passwordE'
}
]

const seedUser = () => User.bulkCreate(users,{
    individualHooks: true,
    returning: true,
  });

module.exports = seedUser;
