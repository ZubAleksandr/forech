let colum = document.querySelectorAll("input");
colum.forEach((inputEl)=>{
	inputEl.addEventListener("change", mac())
})
function mac() {
	alert("input");
}