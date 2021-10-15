const dbLogin = require('./dbconfig.json').dbLogin;

const Supabase = require('@supabase/supabase-js');

const supabase_client = Supabase.createClient(
    supabaseUrl = dbLogin.url,
    supabaseKey = dbLogin.apiKey
)

async function newUser(first, last, user)
{
    console.log(first, last, user);
    supabase_client.from("User").insert(
        {
            firstName: first,
            lastName: last,
            username: user
        }
    ).then(
        (res, err) => {
            console.log(res, err);
        }
    )
}

module.exports.newUser = newUser;