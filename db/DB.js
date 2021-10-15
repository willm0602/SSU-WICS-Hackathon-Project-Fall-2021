const dbLogin = require('./dbconfig.json');

const Supabase = require('@supabase/supabase-js');

console.log(dbLogin);

async function newUser(first, last, user)
{
    console.log(dbLogin);
}

module.exports.newUser = newUser;