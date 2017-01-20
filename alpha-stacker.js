var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t",
"u","v","w","x","y","z"]

function stackLetters (alph) {
	var stack = "";	
		for (var i = 0; i < alph.length; i++) {
			if (i % 3 === 0) {
				stack += " " + alph[i];
		}	else {
		// debugger
		console.log(stack);
		stack += alph[i];	
		}
	}
}

stackLetters(alphabet);