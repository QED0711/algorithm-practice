# Given a string, determine whether any permutation of it is a palindrome.

# For example, carrace should return true, since it can be rearranged to form racecar, which is a palindrome. daily should return false, since there's no rearrangement that can form a palindrome.


from collections import Counter

def count_chars(s):
    cnt = Counter()
    for char in s:
        cnt[char] += 1
    return dict(cnt)

def get_even_odd_counts(count):
    even_count = 0
    odd_count = 0
    for key, counts in count.items():
        if counts % 2 == 0:
            even_count += 1
        else:
            odd_count += 1

    return (even_count, odd_count)

def arrange_palindrome(s):
    # handle case
    s = s.lower()

    if len(s) == 0:
        return False
    if len(s) == 1:
        return True # doesn't handle single space

    if len(s) % 2 == 0: # even
        even_count, odd_count = get_even_odd_counts(count_chars(s))
        return False if odd_count > 0 else True 

    else: # odd
        even_count, odd_count = get_even_odd_counts(count_chars(s))        
        return False if not odd_count == 1 else True 
        

if __name__ == '__main__':
    print(arrange_palindrome("")) # False
    print(arrange_palindrome("a")) # True
    print(arrange_palindrome("abba")) # True
    print(arrange_palindrome("abcd")) # False
    print(arrange_palindrome("Carrace")) # True

