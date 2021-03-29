const userData = [
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

const seedUserData = () => user.bulkCreate(userData);
