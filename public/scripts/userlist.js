const list = $("#userStatusRows");

async function getUsers()
{
    await $.get("/api/user", (data, status) => {
        console.log(data);
    })
}

async function getID()
{
    await $.get("/api/session_id", (data, status) => {
        console.log(data);
    })
}

getUsers();
getID();
