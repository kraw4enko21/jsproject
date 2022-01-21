const btnOpen=document.querySelectorAll('[data-modal-button]');
const btnClose = document.querySelectorAll('[data-modal-close]');
const modal = document.querySelectorAll('[data-modal]');

btnOpen.forEach(function(item){
	item.addEventListener('click', function(){
		const open = document.querySelector('#'+this.dataset.modalButton);
		open.classList.remove('hidden');
		btnClose.forEach(function(item){
			item.addEventListener('click',function(){
				open.classList.add('hidden');
			})
		})
		modal.forEach(function(item){
			item.addEventListener('click', function(){
				open.classList.add('hidden');
			})
			item.querySelector('.modal-window').addEventListener('click', function(){
				event.stopPropagation();
			})
		})
	})
})
