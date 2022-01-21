const button = document.querySelector('#button');
const content = document.querySelector('#content');
button.addEventListener("click", function(){
	if(content.classList.toggle('content-hidden')){
		button.textContent= "Открыть блок";
	}
	else
	{
		button.textContent= "Закрыть блок";
	}
	/*if(button.textContent=="Открыть блок"){
		button.textContent= "Закрыть блок";
	}
	else
	{
		button.textContent= "Открыть блок";
	}*/
})