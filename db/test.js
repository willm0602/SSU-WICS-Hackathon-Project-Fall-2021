const {newUser, getUsers, newShelter, getShelters} = require('./DB');

async function test()
{
    var shelters = await getShelters();
    console.log(shelters);
}

test();