def by_score(seq):
    return seq[1]

def max_score(seq):
    students_by_score = sorted(seq, key=by_score)
    student = students_by_score[-1]
    student_name = student[0] 
    return student_name

