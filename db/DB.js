const config = require('./dbconfig.json');

const supabase = require('@supabase/supabase-js');

module.exports.DB = class DB{
    newPerson(firstName, lastName, username)
    {
        const { data, error } = await supabase
            .from('User')
            .insert([
                {
                    firstName: firstName,
                    lastName: lastName,
                    username: username
                }
        ]);
        return "Created new person";
    }
}