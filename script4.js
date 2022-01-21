const btn = document.querySelector('[data-modal-button]');
const btnClose = document.querySelector('[data-modal-close]');
const modal = document.querySelector('[data-modal]');

btn.addEventListener('click', function(){
	
	modal.classList.remove('hidden');
})

btnClose.addEventListener('click', function(){
	
	modal.classList.add('hidden');
})
modal.addEventListener('click', function(){
	
	modal.classList.add('hidden');
})

modal.querySelector('.modal-window').addEventListener('click', function(event)
{
	event.stopPropagation();
})
