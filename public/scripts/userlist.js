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
        return(data);
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

$(".warning").on("click", async(e) => {
    await updateStatus(await getID(), "Warning")
})

$(".evacuating").on("click", async (e) => {
    await updateStatus(await getID(), "Evacuating")
})

$(".danger").on("click", async(e) => {
    await updateStatus(await getID(), "Danger")
})


//generates the list of people

const search_field = $("#site-search");
const users_list_field = $("#userStatusRows");

async function getListOfPeople()
{
    var users = await getUsers();
    users.forEach((user) => {
        try {
            var row = `<li class="userStatusRow"><img src="/static/images/avatar.png">${user.firstName} ${user.lastName} is ${user.status}</li>`
            console.log(row);
            users_list_field.append(row);
        } catch (error) {
            console.error(error);
        }
    })

}

getListOfPeople();