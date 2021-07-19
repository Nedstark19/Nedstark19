import random
def Guessing():
    for i in range(0,3):
        guess_Number = int(input("Enter The Number Between 1 to 10 To Guess:\n (you will have chances) "))
        nUmber = random.randint(0,10)
        if (guess_Number == nUmber):
            return "Correct Guess"
        else:
            print(str(nUmber) + " " + "is correct")
            if i == 0:
                print("2 chances left")
            elif i == 1:
                print("1 chances left")       
    return "Chances gone"       
print(Guessing())
       
