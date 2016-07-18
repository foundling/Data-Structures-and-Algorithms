def ref(a):
    uniques = list(set(a))
    return uniques

def dedup(seq):
    seq, end = sorted(seq), len(seq)

    if end == 0:
        return []

    uniques = [ seq[0] ]
    for i in range(1, end):
        if seq[i] != seq[i - 1]:
            uniques.append( seq[i] )

    return uniques
