document.addEventListener("DOMContentLoaded",()=>{
  const menuButton=document.querySelector(".menu-toggle");
  const nav=document.querySelector(".nav-links");
  if(menuButton&&nav){menuButton.addEventListener("click",()=>{const open=nav.classList.toggle("open");menuButton.setAttribute("aria-expanded",String(open));menuButton.textContent=open?"×":"☰"});nav.querySelectorAll("a").forEach(link=>link.addEventListener("click",()=>{nav.classList.remove("open");menuButton.setAttribute("aria-expanded","false");menuButton.textContent="☰"}))}
  const filters=[...document.querySelectorAll(".filter")];
  const projects=[...document.querySelectorAll(".project")];
  filters.forEach(button=>button.addEventListener("click",()=>{filters.forEach(item=>item.classList.toggle("active",item===button));const category=button.dataset.filter;projects.forEach(project=>{const show=category==="all"||project.dataset.category===category;project.hidden=!show})}));
  const sections=[...document.querySelectorAll("main section[id]")];
  const links=[...document.querySelectorAll(".nav-links a")];
  if("IntersectionObserver" in window){const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){links.forEach(link=>link.classList.toggle("active",link.getAttribute("href")==="#"+entry.target.id))}}),{rootMargin:"-35% 0px -55% 0px"});sections.forEach(section=>observer.observe(section))}
});