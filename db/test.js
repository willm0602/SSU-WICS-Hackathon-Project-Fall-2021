const {newUser} = require('./DB');

async function test()
{
    const person = await newUser(
        "Johnathan",
        "Doe",
        "testtest32"
    );
    console.log(person);
}

test();