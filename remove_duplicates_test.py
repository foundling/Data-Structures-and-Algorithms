from remove_duplicates import ref, dedup

cases = [
    [0],
    [1,4,4,4,2,1,1,1],
    [1,1,1,1,1,1]
]

def test_dedup():

    for case in cases:
        assert dedup(case) == ref(case)
