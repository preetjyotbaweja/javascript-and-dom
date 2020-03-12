
let tag = document.getElementById("tag-line");
let headings = document.querySelectorAll(".bg-main-content h2");
let collect = `${tag.textContent}\n`;
for(let heading of headings)
{collect += `${heading.textContent}\n`;}
alert(collect);

	let matter = document.getElementsByClassName("bg-main-content")[0];
let happen = matter.getElementsByClassName("box")[12];
let stuff = happen.children;
collect = `${stuff[0].textContent}\n`;
	var pree;
for (pree = 1; pree < info.length; pree++) {
  	collect +=`${info[pree].textContent}\n`;}
alert(collect);

