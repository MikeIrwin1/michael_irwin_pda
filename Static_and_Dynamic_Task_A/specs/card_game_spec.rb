require ('minitest/autorun')
require ('minitest/rg')
require_relative('../card')
require_relative('../card_game')

class CardGameTest < Minitest::Test

  def setup
    @card1 = Card.new('spades', 1)
    @card2 = Card.new('clubs', 10)
    @game1 = CardGame.new()
    @cards = [@card1, @card2]
  end

  def test_check_for_ace
    # arrange
    game1 = @game1.checkforAce(@card1)
    # assert
    assert_equal(true, game1)
  end

  def test_highest_card
    assert_equal(@card2, @game1.highest_card(@card2, @card1))
  end

  def test_cards_total
    assert_equal("You have a total of 11", CardGame.cards_total(@cards))
  end

end
