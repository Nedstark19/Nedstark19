print("This Programme is only to find one missing factor d, t and s. \n Out of three one must enter 'u' unknown\n ***units ignored***")
def dts():
    
    d = str(input("enter distance, if unknown enter \"u\": \n"))
    t = str(input("enter time, if unknown enter \"u\": \n"))
    s = str(input("enter speed, if unknown enter \"u\": \n"))
    if (d or t or s) == "u":
        return 'must present one unknow factor'
    elif (d or t or s) == "u":    
        if d == "u":
            t = int(t)
            s = int(s) 
            return "distance is " + str(t*s) 
        elif t == "u":
            d = int(d)
            s = int(s) 
            return "time is " + str(d/s) 
        elif s == "u":
            t = int(t)
            d = int(d) 
            return "speed is " + str(d/t) 
print(dts())        
