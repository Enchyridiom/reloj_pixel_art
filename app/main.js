window.onload = function() {
    setInterval(getTime, 1000);
};

function getTime(){
  
	let date = new Date();

	let hours    = date.getHours();
	let minutes  = date.getMinutes();
	let year     = date.getFullYear();
	let month    = date.getMonth();
	let day      = date.getDate();
	
	let dateString = ( hours < 10 ? '0' : '' ) + hours + ' : ' + ( minutes < 10 ? '0' : '' ) + minutes;

	let weekString = day + ' - ' + ( month + 1 ) + ' - ' + year;

	document.querySelector('#time').innerHTML = dateString;

	document.querySelector('#date').innerHTML = weekString;
			
}


