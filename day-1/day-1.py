# Get input from input.txt
with open('input.txt','r') as f:
    inp = [int(line.strip()) for line in f]
a = sum([1 for i,x in enumerate(inp[1:], start=1) if x > inp[i-1]])
# print a in red color
print('\033[91m' + str(a) + '\033[0m')
b = sum([1 for i,x in enumerate(inp[1:-2], start=1) if sum(inp[i:i+3]) > sum(inp[i-1:i+2])])
# print b in green color
print('\033[92m' + str(b) + '\033[0m')


# Sussy wussy
print('\033[95m' + 'On the first day of Christmas, Microsoft gave to me…' + '\033[0m')
print('\033[95m' + 'A pile of defenders false positives.' + '\033[0m')