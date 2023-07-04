// Start Search 
let icon = document.querySelector(".icon");
let box = document.querySelector(".search-box");
let clear = document.querySelector(".clear");
let inputSearch = document.getElementById("search");
icon.onclick = function() {
   box.classList.add("active");
}
clear.onclick = function() {
   inputSearch.value = '';
}
document.addEventListener("click", (e) => {
   if (e.target !== box && e.target !== inputSearch) {
      if (box.classList.contains("active")) {
         box.classList.remove("active");
      }
   }
})
box.onclick = function (e) {
	e.stopPropagation();
}
// End Search

