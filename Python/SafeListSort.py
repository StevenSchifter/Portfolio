class SafeListSort:
    def __init__(self):
        self.safeList = []
        self.x = 0
    def GetSafeList(self):
        return self.safeList
    def GetSafeListReversed(self):
        self.safeList.reverse()
        return self.safeList
    def GetSafeListAtIndex(self, i):
        try:
            return self.safeList[i]
        except IndexError:
            print("Invalid list index specified: " + str(i))
    def SafeFloatSort(self,myList):
        self.__init__()
        while self.x < len(myList):
            try:
                self.safeList.append(float(myList[self.x]))
                self.x += 1
            except:
                print("Non-numeric list value encountered at index " + str(self.x))
                break
        self.SafeSort()
    def SafeIntSort(self,myList):
        self.__init__()
        while self.x < len(myList):
            try:
                self.safeList.append(int(myList[self.x]))
                self.x += 1
            except:
                print("Non-numeric list value encountered at index " + str(self.x))
                break
        self.SafeSort()
    def SafeStringSort(self,myList):
        self.__init__()
        while self.x < len(myList):
            self.safeList.append(str(myList[self.x]))
            self.x += 1
        self.SafeSort()
    def SafeSort(self):
        try:
            self.safeList.sort()
        except:
            print("Unable to sort list.")

# Testing code

print("Initializing class and test list")
sls = SafeListSort()
testList = [2, '0', 1, 3, 'pie']

print("Testing float sort")
sls.SafeFloatSort(testList)
print(sls.GetSafeList())
a = 0
while a < len(testList):
    print(sls.GetSafeListAtIndex(a))
    a += 1
print(sls.GetSafeListReversed())

print("Testing integer sort")
sls.SafeIntSort(testList)
print(sls.GetSafeList())
b = 0
while b < len(testList):
    print(sls.GetSafeListAtIndex(b))
    b += 1
print(sls.GetSafeListReversed())

print("Testing string sort")
sls.SafeStringSort(testList)
print(sls.GetSafeList())
c = 0
while c < len(testList):
    print(sls.GetSafeListAtIndex(c))
    c += 1
print(sls.GetSafeListReversed())

print("End of tests")