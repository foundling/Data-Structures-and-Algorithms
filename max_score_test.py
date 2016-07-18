from max_score import max_score

students = [ 
    ('A', 40),
    ('B', 99),
    ('C', 0),
    ('D', 1),
    ('E', 99),
    ('F', 00)
]

def test_max_score():
    assert max_score(students) == 'E'
