var ans = prompt ("Are we there?");

while ( -1 == ans.indexOf("yes")) {
	ans=prompt ("are we there?");
}

console.log("ans " + ans );
