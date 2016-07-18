from show_duplicates import show_dup 

def test_show_dup():
    assert show_dup([]) == []
    assert show_dup([0,0]) == [0]
    assert show_dup([0,0,0]) == [0,0]
