const DB = require('./DB');
const db = DB.DB;

async function test()
{
    console.log(db);
    const newPerson = await DB.newPerson(
        "Johnathan",
        "Doe",
        "testtest32"
    );
}

console.log(test());