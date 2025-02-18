//your JS code here. If required.

function find(element)
{
	let level = 0;

	while(element)
		{
			level++;
			element = element.parentElement;
		}
	return level;
}


let element = document.getElementById("level");

 alert("The level of the element is: "+find(element));