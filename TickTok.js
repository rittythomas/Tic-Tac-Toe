var select = document.querySelectorAll("td");

function changeMarker()
{
	if(this.textContent === ''){
		this.textContent = 'X';
	}
	else if(this.textContent === 'X'){
		this.textContent ='O';
	}
	else{
		this.textContent ='';
	}
};
for (i = 0; i< select.length; i++)
{
	select[i].addEventListener('click',changeMarker);
}