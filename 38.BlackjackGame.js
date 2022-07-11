function BlackJack(card) {
  var count = 0;
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;

    case 10:
    case "A":
    case "K":
    case "Q":
    case "J":
      count--;
      break;
  }

  var holdBet = "Hold";
  if (count > 0) {
    holdBet = "Bet";
  }

  return count + " " + holdBet;
}

BlackJack(2);
BlackJack(5);
BlackJack(6);
BlackJack(8);
BlackJack("A");
BlackJack("K");
console.log(BlackJack(3));
