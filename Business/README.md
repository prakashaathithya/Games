# Business Board

A property trading board game for two to four players, in the browser. Single HTML file, no build step and no libraries — the whole thing is DOM and CSS grid.

Stages 1 and 2 are in. It plays a full game with cards, buildings, mortgages and jail.

## What works now

**The board.** 40 spaces: 22 properties in eight colour groups, four railways, two utilities, two taxes, Chance and Treasury, and the four corners. Two to four players, against the computer or passing one device around.

**Moving.** Two dice, a salary for passing Start, doubles roll again, and three doubles in a row sends you to Jail.

**Property.** Buy unowned deeds or pass. Rent doubles when one player holds a full colour group. Railways pay 25, 50, 100 or 200 by how many the owner holds; utilities pay 50, or 100 for the pair.

**Building.** Own a full colour group and you can build. Houses must go up evenly across the group — no second house anywhere until every property in it has one — and the fifth building is a hotel. Rent multiplies 5×, 15×, 40×, 60× and 80× the base as they go up. Selling returns half the cost.

**Mortgages.** Mortgage any deed you own free of buildings for half its price. A mortgaged property collects no rent and blocks building anywhere in its group. Redeeming costs 55% of the price — the half back, plus interest.

**Jail.** Landing on Go to Jail, drawing the card, or rolling three doubles puts you there. Get out by paying the ₹50 fine, spending a get-out-of-jail card, or rolling a double. Three failed rolls and you pay the fine and move anyway. A double rolled to escape does not earn another turn.

**Cards.** Sixteen Chance and sixteen Treasury cards, shuffled, cycling through the deck. Moves, fixed payments, collect-from-everyone, pay-everyone, per-building repair bills, straight to Jail, and two get-out-of-jail cards that stay in hand until used.

**Debt.** A player who cannot cover a payment is made to raise the money first — buildings sold at half, then deeds mortgaged — and only goes bankrupt if that still is not enough. The creditor receives whatever the player actually had.

Names, prices and rents are our own. Base rents sit near a tenth of the purchase price, steeper than the traditional table, which keeps games short.

## Not in yet

| Stage | Adds |
| --- | --- |
| 3 | Auctions when a property is passed on, player-to-player trading, and deeds passing to the creditor on bankruptcy rather than back to the bank |
| 4 | Token movement animation, sounds, save and resume, and AI difficulty levels |

## Controls

| Action | Input |
| --- | --- |
| Roll, then end turn | The buttons, or Space / Enter |
| Buy or pass | The buttons, while the offer is open |
| Jail | Pay ₹50, use a card, or roll for a double |
| Build, sell, mortgage | The buttons beside each deed, on your turn |

The deed list only ever shows the player whose turn it is, which keeps pass-and-play honest on a shared screen.

The computer keeps ₹250 in hand before buying an ordinary property, always takes a railway or utility it can afford, builds up its cheapest complete group while holding ₹350 back, and pays its way out of Jail when it can afford to.

## Licence

MIT
