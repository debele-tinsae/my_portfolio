const sections = document.querySelectorAll(".section");
const navLi = document.querySelectorAll(".list");

window.onscroll = () => {
    var current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;

      if (pageYOffset >= sectionTop - 150) {
        current = section.getAttribute("id"); 
      }
      });
    navLi.forEach((li) => {
      const inner_tag = li.getElementsByTagName('a')
      li.classList.remove("active");
      if (inner_tag[0].classList.contains(current)) { 
        li.classList.add("active");
    }});
};
const panes = document.querySelectorAll('.pane-container .pane');

for (let j = 0; j < panes.length; j++) {
const btn = document.createElement('div');
btn.classList.add('btn');

btn.innerHTML = `  <box-icon class="menu" name="right-arrow-alt"></box-icon>`;
panes[j].appendChild(btn);

panes[j].addEventListener('mouseover', () => {
  panes.forEach((pane) => {
    pane.style.background = 'rgba(0, 0, 0, 0.552)';
  });
  panes[j].style.background = 'transparent';
});

panes[j].addEventListener('mouseout', () => {
  panes.forEach((pane) => {
    pane.style.background = '';
  });
  panes[j].style.background = '';
});
}

const btn = document.querySelector('.discover');
const curtains = document.querySelectorAll('.curtain');
const discover_page = document.querySelector('.discover-page');
const pane_container = document.querySelector('.pane-container');

btn.addEventListener('click', discoverPage);

function discoverPage() {
curtains.forEach((curtain) => {
  curtain.classList.add('active');
});
discover_page.classList.add('active');
}

const back = document.querySelector('.ret.left');
const nxt = document.querySelector('.ret.right');

back.addEventListener('click', () => {
curtains.forEach((curtain) => {
  curtain.classList.remove('active');
});
discover_page.classList.remove('active');
});

var index = 0;

function nxtpane() {
panes.forEach((pane) => {
  pane.style.background = 'rgba(0, 0, 0, 0.552)';
});

panes[index].style.background = 'transparent';

index++;

if (index >= panes.length) {
  index = 0;
}
}

nxt.addEventListener('click', nxtpane);