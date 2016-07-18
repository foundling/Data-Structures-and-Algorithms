def show_dup(seq):
    ''' return sorted list of unique members of seq. remove each one time from seq, and return seq. '''

    for i in set(seq):
        seq.pop(seq.index(i))
    return sorted(seq)




