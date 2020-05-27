let sections = Array.prototype.slice.call(document.getElementsByClassName('section'));
let currentPage = 1;

const setSectionStyle = (section, styleValue) => {
    section.style.opacity = styleValue;
    section.style.zIndex = styleValue;
}

const checkIfInfoModalShouldBeOpen = () => localStorage.getItem('infoOk') === 'ok';

if(!checkIfInfoModalShouldBeOpen()) document.getElementById('infoModal').style.display = 'flex';

sections.map(section => `section${currentPage}` !== section.id ? setSectionStyle(section, '0') : setSectionStyle(section, '1'));
sections.map((section, index) => {
    section.style.zIndex = (sections.length - index).toString();
});

window.addEventListener('keydown', (e) => {
    if(e.defaultPrevented) return;
    if (currentPage >= 1 && currentPage <= sections.length) {
        if (e.key === 'ArrowLeft') {
            previousSection();
        }
        if (e.key === 'ArrowRight') {
            nextSection();
        }
    }
})

const nextSection = () => {
    if (currentPage < sections.length) {
        currentPage++;
        sections.map(section => `section${currentPage}` !== section.id ? setSectionStyle(section, '0') : setSectionStyle(section, '1'));
    }
}

const previousSection = () => {
    if (currentPage > 1) {
        currentPage--;
        sections.map(section => `section${currentPage}` !== section.id ? setSectionStyle(section, '0') : setSectionStyle(section, '1'));
    }
}

const closeInfoModal = () => {
    localStorage.setItem('infoOk', 'ok');
    document.getElementById('infoModal').style.opacity = '0';
    setTimeout(() => {
        document.getElementById('infoModal').style.display = 'none';
    }, 1000);
}

const changeCurrentPage = page => {
    currentPage = page;
    sections.map(section => `section${currentPage}` !== section.id ? setSectionStyle(section, '0') : setSectionStyle(section, '1'));
}
