from credit_card.credit_card_validator import is_valid_credit_card

def test_valid_credit_card_visa():
    assert is_valid_credit_card('4532015112830366') == True  # Valid Visa card number

def test_valid_credit_card_mastercard():
    assert is_valid_credit_card('5500000000000004') == True  # Valid MasterCard number

def test_invalid_credit_card():
    assert is_valid_credit_card('1234567812345678') == False  # Invalid card number

def test_invalid_credit_card_too_short():
    assert is_valid_credit_card('1234') == False  # Too short to be valid

def test_invalid_credit_card_with_non_digit_characters():
    assert is_valid_credit_card('4532abcd1122efgh') == False  # Contains non-digit characters
