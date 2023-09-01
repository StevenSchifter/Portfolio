import random

N = int(input("How many digits in your random number? "))
L = int(input("Lowest digit in your random number? "))
H = int(input("Highest digit in your random number? "))
R = "" # random N-digit string

for D in range(N):
    R += str(random.randrange(L, H))

print("Your random number is: " + R)