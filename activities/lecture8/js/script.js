function performCalculation(operation) {
	// Retrieve input values
	const num1 = parseFloat(document.getElementById('number1').value);
	const num2 = parseFloat(document.getElementById('number2').value);
  
	if (isNaN(num1) || isNaN(num2)) {
	  alert('Please enter valid numbers.');
	  return;
	}
  
	let result;
  
	switch (operation) {
	  case 'add':
		result = num1 + num2;
		break;
	  case 'subtract':
		result = num1 - num2;
		break;
	  case 'multiply':
		result = num1 * num2;
		break;
	  case 'divide':
		if (num2 === 0) {
		  alert('Division by zero is not allowed.');
		  return;
		}
		result = num1 / num2;
		break;
	  default:
		alert('Invalid operation.');
		return;
	}
  
	// Display the result
	alert(`The result is: ${result}`);
	console.log(`The result of ${operation} is: ${result}`);
  }
  function displayGreeting() {
	const greetingElement = document.getElementById('greeting');
	const currentHour = new Date().getHours();
	let greeting;
  
	if (currentHour < 12) {
	  greeting = 'Good Morning!';
	} else if (currentHour < 17) {
	  greeting = 'Good Afternoon!';
	} else if (currentHour < 19) {
		greeting = 'Good Evening!';
	}
	else {
	  greeting = 'Good Night!';
	}
  
	greetingElement.textContent = greeting;
  }
  
  window.onload = displayGreeting;
  