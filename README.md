# RPG-initiative-track

### Installation

1.	Download repository
2.	Install dependencies:

	```
	npm install
	bower install
	```
3.	Run server:

	```
	npm start
	```
4. If you are the Game Master log on `localhost:3000/list`
5. If you are a player log on `localhost:3000`

### Instructions GMs

GMs can create their initiative table by adding characters with the form in the header.

IMPORTANT: use a different name for every character.

GMs can keep track of Health Points and buffs/malus durations (`effects`), without showing them to the players.

GMs can edit the table on the fly and the table will automatically sort the initiative correctly and automatically synchronzie with all the clients connected.

By clicking on the `clock` icon, the GM will select the corrisponding character WITHOUT affecting the duration of ongoing effects (only the `next` button changes ongoing effects dynamically).

By clicking the `next` button the GM will select the next character in the initiative table AND if the previously selected character had ongoing effects it will automatically decrease the their duration.

### Instructions Players

Players can view only the name, initiative values and the buff/malus descriptions of the current character selected by the GM.
