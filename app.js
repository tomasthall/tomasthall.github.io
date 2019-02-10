let sections = Array.prototype.slice.call(document.getElementsByClassName('section'));
let currentPage = 1;
sections.map(section => `section${currentPage}` !== section.id ? section.style.opacity = '0' : section.style.opacity = '1');

sections.map((section, index) => {
  section.style.zIndex = sections.length - index;
});


// TODO: Implement scroll
// let isScrolling;
//
// window.onscroll = function (e) {
//   console.log(this.oldScroll > this.scrollY);
//   this.oldScroll = this.scrollY;
// }

window.addEventListener('keydown', (e)=> {
  if(currentPage >= 1 && currentPage <= sections.length) {
    if(e.keyCode == 37) {
        previousSection();
    }
    if(e.keyCode == 39) {
        nextSection();
    }
  };
})

function nextSection() {
  if(currentPage < sections.length) {
      currentPage++;
      sections.map(section => `section${currentPage}` !== section.id ? section.style.opacity = '0' : section.style.opacity = '1');
  }
}

// TODO: check why that stupid nav sucks balls

function previousSection() {
  if(currentPage > 1) {
      currentPage--;
      sections.map(section => `section${currentPage}` !== section.id ? section.style.opacity = '0' : section.style.opacity = '1');
  }
}