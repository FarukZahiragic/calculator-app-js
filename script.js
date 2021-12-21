function otvori() {
	document.getElementById("sidebar").style.width="600px";
	document.getElementById("sidebar").style.height="800px";
}

function zatvori() {
	document.getElementById("sidebar").style.width="0";
	document.getElementById("sidebar").style.height="0";
}

function number(value) {
	document.Calculator.rez.value +=value;
	return false;
}

function numv(value) {
	document.Calculator.rez.value=value;
	return false;
}

function jednako() {
	document.Calculator.rez.value=eval(document.Calculator.rez.value);
	return false;
}

function kvadrat() {
	document.Calculator.rez.value=Math.pow(document.Calculator.rez.value, 2);
	return false;
}

function kub() {
	document.Calculator.rez.value=Math.pow(document.Calculator.rez.value, 3);
	return false;
}

function korjen() {
	document.Calculator.rez.value=Math.pow(document.Calculator.rez.value, 1/2);
	return false;
}

function korjen3() {
	document.Calculator.rez.value=Math.pow(document.Calculator.rez.value, 1/3);
	return false;
}

function postotak() {
	document.Calculator.rez.value=document.Calculator.rez.value/100;
	return false;
}

function sin() {
	document.Calculator.rez.value=Math.sin(document.Calculator.rez.value);
	return false;
}

function cos() {
	document.Calculator.rez.value=Math.cos(document.Calculator.rez.value);
	return false;
}

function tan() {
	document.Calculator.rez.value=Math.tan(document.Calculator.rez.value);
	return false;
}

function backspace() {
	document.Calculator.rez.value=Math.floor(document.Calculator.rez.value/10);
	return false;
}