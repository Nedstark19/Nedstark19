user_name = input("Enter User Name: \t")
password = input("Enter Passwor: \t")
def login():
    if (user_name != "" and user_name != None):
        if(password != "" and password != None):
            if(user_name == "sameer"):
                if (password == "1234"):
                    return "Thanks Login will commence now."
                else:
                    return "Please enter correct password"
            else:
                return "Please enter correct Username"
        else:
            return "Please enter password"    
    else:
        return "Please enter username"
print(login())        
