### Testing task 1:

# Carry out static testing on the code below.
# Comment on any errors that you see below.
```ruby

class CardGame


  def checkforAce(card)
    if card.value = 1   #this is not a comparison, needs == not =
      return true
    else
      return false
    end
  end

# line 20 has a syntax error 'dif' should be 'def' and card1 and card2 should be seperated by a comma. also line 22, card does not exist, should be return card1

  dif highest_card(card1 card2)
  if card1.value > card2.value
    return card
  else
    return card2
  end
end
end

#there is an extra end on line 27 which closes the class so that the following method is outside of the class.
# line 33 should set the value of total, at the moment the variable is not defined. the return statement is in the loop so the total value will be wrong, the total is also not within the string so will not be printed.

def self.cards_total(cards)
  total
  for card in cards
    total += card.value
    return "You have a total of" + total
  end
end
```
