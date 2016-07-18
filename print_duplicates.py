a = sorted([1,1,1,1,1,1])
end = len(a)

if end == 0: 
    print 0

else:
    duplicates = set([ value for index,value\
                   in enumerate(a)\
                   if ((index + 1) < end and value == a[index + 1]) ])
    print ' '.join(str(m) for m in duplicates)
