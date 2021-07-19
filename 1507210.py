contacts = [
        {
        "firstName":"sd",
        "lastName":"samsyeer",
        "number": "05432365213143",
        "likes": ["Pizza", "Codingkugiuhg", "Brownie Points"]
        },
        {
        "firstName":"gy",
        "lastName":"sameer",
        "number": "05432365464543",
        "likes": ["Pizza", "Coding", "Browvjhgjgjnie Points"]
        },
        {
        "firstName":"sds",
        "lastName":"sameer",
        "number": "05432365464543",
        "likes": ["Pizza", "Coding", "Browvjhgjgfghgfhfghjnie Points"]
        },        {
        "firstName":"ba",
        "lastName":"sameer",
        "number": "05432365464543",
        "likes": ["Pizza", "Codbfghfghgfhgfhing", "Browvjhgjgjnie Points"]
        },        {
        "firstName":"na",
        "lastName":"sameer",
        "number": "05432365464543",
        "likes": ["dfgfdgPizza", "Coding", "Browvjhgjgjnie Poidfgdfgfdgnts"]
        },        
        {
        "firstName":"hh",
        "lastName":"sameer",
        "number": "05432346546543",
        "likes": ["Pizzmbjbkja", "Codinhgfhgfhg", "Brownie Points"]
        }
]
# print(len(contacts))
# print(contacts[2]["number"])
def lookUpProfile(name, prop):
    for i in range(0,len(contacts)):
        if (contacts[i]["firstName"] == name):
            if (prop in contacts[i]):
                return contacts[i][prop]
            else:
                return "No Such Property"
    return "nothing"
           

print(lookUpProfile("najj","likes"))       
        
