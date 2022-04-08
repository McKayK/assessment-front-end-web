console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Your Duck form submitted successfully!!');
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

let image = document.querySelector('#rubber-duck')
image.addEventListener('mouseover', compliment => {
	alert('You deserve a hug right now.')
})