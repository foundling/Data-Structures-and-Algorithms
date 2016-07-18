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

