//willyd
//problem 3
//
	var array = [{"numbers" : "1,2,3,4,5"},
		{"letters" : "a,b,c,d,e"}
	];

	function filter(array, test) {
		  var passed = [];
		    for (var i = 0; i < array.length; i++) {
			        if (test(array[i]))
					      passed.push(array[i]);
				  }
		      return passed;
	}

	console.log(filter(array, function(letters) {
		return letters.letters;	
	}));
	
