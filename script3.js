const headers = document.querySelectorAll('[data-tab]');
const contentBoxes = document.querySelectorAll('[data-tab-content]');
console.log(contentBoxes);
headers.forEach(function(item){
	item.addEventListener('click', function(){
		contentBoxes.forEach(function(item){
			item.classList.add('tab-content-hidden');
			console.log('Click');
		})
		const content = document.querySelector('#'+this.dataset.tab);
		content.classList.remove('tab-content-hidden');
	})
}) 