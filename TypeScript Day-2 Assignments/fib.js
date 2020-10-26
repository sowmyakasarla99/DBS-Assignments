var i;
var s = [];
s[0] = 0;
s[1] = 1;
console.log(s[0]);
console.log(s[1]);
for (i = 2; i <= 10; i++) {
    s[i] = s[i - 2] + s[i - 1];
    console.log(s[i] + " ");
}
