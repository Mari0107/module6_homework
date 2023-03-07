 function showNumber (num1, num2) {
	let progress = num1;  
	let timerId = setInterval(function() {
	  console.log(progress);
	  if (progress == num2) {
		clearInterval(timerId);
	  }
	  progress++;
	}, 1000);
  }
  
  showNumber (5, 15); 