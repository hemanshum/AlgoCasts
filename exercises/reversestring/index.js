// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
	let revStr;
	for (let i of str) {
		if (!revStr) {
			revStr = i;
		} else {
			revStr = i + revStr;
		}
	}
	return revStr;
}

module.exports = reverse;
