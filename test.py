import requests

args = {
    "firstName": "Connor",
    "lastName": "Cavaliere",
    "userName": "cavy_08",
    "status": 4
}

url = 'http://localhost:3000/api/user'
id_url = 'http://localhost:3000/api/user_id'
session = requests.Session()
session.post(url, json=args)
data = session.get(id_url, json=args)
print(data.content)