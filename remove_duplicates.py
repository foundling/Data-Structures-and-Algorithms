def ref(a):
    uniques = list(set(a))
    return uniques

def dedup(l):
    l = sorted(l)
    end = len(l)

    if end == 0:
        return []

    uniques = [ l[0] ]
    for i in range(1, end):
        if l[i] != l[i - 1]:
            uniques.append( l[i] )

    return uniques

a = [1,4,4,4,2,1,1,1,1]
a = [1,1,1,1,1,1]
print sorted(a)
print 'ref: ', ref(a)
print 'dedup: ', dedup(a)
