def show_dup(seq):

    ''' 
        f :: [] -> { a: [a, a, a], b: [], c: [c] }
        get unique members of seq. remove each one time from seq, and return object
        with key unique name as key, duplicates as data. 
    '''

    dup_dict = {}
    for m in set(seq):
        key = seq.pop(seq.index(m))
        dup_dict[key] = seq.count(key) 

    return dup_dict

def show_dup_alt(seq):
    dup_dict = {}
    # for each unique key in seq
    for m in set(seq):
        # get all ms in sequence
        ms = filter(seq, key=lambda x: x == m)
        # assign first to key, that's guaranteed
        # assign rest to key's associated data and take its length
        # note, slicing out of bounds returns empty lists, not an IndexOutOfRange error.
        key, dups = ms[0], ms[1:] 
        dup_dict[key] = len(dups)

    return dup_dict


