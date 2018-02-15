function isPalindrome(n) {

    let s = n.toString();
    for (let i = 0, len = s.length, max = len - 1; i < Math.floor(len/2); ++i) {
        if (s[max - i] !== s[i])
            return false;
    }

    return true;

}
