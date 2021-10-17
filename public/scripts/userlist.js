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

async function updateStatus(id, status)
{
    var id = await getID();
    if(id && id.length > 0)
    {
        console.log("Error: No ID found, try signing in");
    }
    else
    {
        await $.ajax({
            type: "PUT",
            url: '/api/player',
            data: JSON.stringify({'status': status}),
            contentType: "application/json; charset=utf-8",
            success : function(data) {              
                console.log(data);
            },
            error : function(request,error)
            {
                console.error(error);
            }
         });
    }
}

$(".safe").on("click", async (e) => {
    await updateStatus(await getID(), "Safe")
})

getUsers();
getID();
