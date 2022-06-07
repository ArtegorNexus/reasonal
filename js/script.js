"use strict"

let burger = document.querySelector('.burger-menu');
let header = document.querySelector('.header__body');

burger.addEventListener('click', function(event){
	burger.classList.toggle('active');
	header.classList.toggle('active');
	document.body.classList.toggle('_ovhid');
});