# Business Board

A property trading board game for two to four players, in the browser. Single HTML file, no build step and no libraries — the whole thing is DOM and CSS grid.

All four stages are in. It plays a complete game: cards, buildings, mortgages, jail, auctions, trading, three computer difficulties, sound, and a game that survives closing the tab.

## What works now

**The board.** 40 spaces: 22 properties in eight colour groups, four railways, two utilities, two taxes, Chance and Treasury, and the four corners. Two to four players, against the computer or passing one device around.

**Moving.** Two dice, a salary for passing Start, doubles roll again, and three doubles in a row sends you to Jail.

**Property.** Buy unowned deeds or pass. Rent doubles when one player holds a full colour group. Railways pay 25, 50, 100 or 200 by how many the owner holds; utilities pay 50, or 100 for the pair.

**Building.** Own a full colour group and you can build. Houses must go up evenly across the group — no second house anywhere until every property in it has one — and the fifth building is a hotel. Rent multiplies 5×, 15×, 40×, 60× and 80× the base as they go up. Selling returns half the cost.

**Mortgages.** Mortgage any deed you own free of buildings for half its price. A mortgaged property collects no rent and blocks building anywhere in its group. Redeeming costs 55% of the price — the half back, plus interest.

**Jail.** Landing on Go to Jail, drawing the card, or rolling three doubles puts you there. Get out by paying the ₹50 fine, spending a get-out-of-jail card, or rolling a double. Three failed rolls and you pay the fine and move anyway. A double rolled to escape does not earn another turn.

**Cards.** Sixteen Chance and sixteen Treasury cards, shuffled, cycling through the deck. Moves, fixed payments, collect-from-everyone, pay-everyone, per-building repair bills, straight to Jail, and two get-out-of-jail cards that stay in hand until used.

**Auctions.** Any deed nobody buys goes under the hammer — turned down, or unaffordable. Every player still in the game bids, including whoever just declined it. Bids rise in steps of about a twentieth of the list price, or five steps at once, and the last bidder standing pays what they bid. If nobody bids at all, the deed stays with the bank.

**Trading.** Offer any combination of your deeds, their deeds and cash in either direction. Buildings must be sold before a deed in that colour group can move. The computer judges an offer on what the deeds are worth to it — nearly double for one that completes a set — and wants about 15% more than it gives up. It also makes offers of its own, paying up to 1.7 times list for the deed that would complete one of its groups. In pass-and-play the other player answers on the same screen.

**Debt.** A player who cannot cover a payment is made to raise the money first — buildings sold at half, then deeds mortgaged — and only goes bankrupt if that still is not enough. Everything then passes to whoever they owed: the cash they had, the deeds with their mortgages intact, any get-out-of-jail cards, and half the cost of every building, which goes back to the bank. A debt owed to the bank instead puts the deeds back on the market.

**Moving.** Tokens walk the board a space at a time rather than teleporting, which is also how the salary is paid: arriving at Start during the walk is the only way it is collected, so a card that sends you backwards past it correctly pays nothing.

**Sound.** Dice, footsteps, cash, payments, the auctioneer's gavel, bankruptcy and the win are all synthesised with the Web Audio API — no audio files. Switchable off, and the choice is remembered.

**Difficulty.** Three computer levels, changeable mid-game:

| | Easy | Normal | Hard |
| --- | --- | --- | --- |
| Cash kept back when buying | 420 | 250 | 120 |
| Chases a lot at auction to | 0.8× | 1.0× | 1.25× its valuation |
| Cash held before building | 620 | 350 | 200 |
| Wants more than it gives, in a trade | 35% | 15% | 5% |
| Values a deed completing a set at | 1.3× | 1.8× | 2.1× |

**Save and resume.** The game writes itself to local storage whenever it is sitting at a stable point, and picks up where it left off when you come back. Closing the tab mid-turn costs at most the roll in progress. Start new game clears it.

Names, prices and rents are our own. Base rents sit near a tenth of the purchase price, steeper than the traditional table, which keeps games short.

## Controls

| Action | Input |
| --- | --- |
| Roll, then end turn | The buttons, or Space / Enter |
| Buy, or send to auction | The buttons, while the offer is open |
| Bid | The auction sheet: one step, five steps, or pass |
| Trade | The Trade button, any time on your turn |
| Jail | Pay ₹50, use a card, or roll for a double |
| Build, sell, mortgage | The buttons beside each deed, on your turn |

The deed list only ever shows the player whose turn it is, which keeps pass-and-play honest on a shared screen.

The computer keeps ₹250 in hand before buying an ordinary property, always takes a railway or utility it can afford, builds up its cheapest complete group while holding ₹350 back, and pays its way out of Jail when it can afford to.

## Licence

MIT
