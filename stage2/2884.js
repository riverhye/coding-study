let [h, m] = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(Number);

// let h = 10
// let m = 50

if (m < 45) {
	h >= 1 ? (m += 15) && (h -= 1) : (m += 15) && (h += 23)
}
else m -= 45

console.log(h, m);