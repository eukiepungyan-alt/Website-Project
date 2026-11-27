// typing effect on the home title
const title = document.querySelector(".HomeText h1");
if (title) {
 const text = title.textContent.trim();
 title.style.minHeight = title.offsetHeight + "px";
 title.innerHTML = '<span></span><span class="caret"></span>';
 let i = 0;
 const typer = setInterval(() => {
  title.firstChild.textContent = text.slice(0, ++i);
  if (i == text.length) clearInterval(typer);
 }, 60);
}

// copy phone number
const copy = document.getElementById("copy");
if (copy) {
 copy.addEventListener("click", () => {
  navigator.clipboard.writeText("+639058861415");
  copy.textContent = "Copied!";
  setTimeout(() => copy.textContent = "Copy", 1500);
 });
}
