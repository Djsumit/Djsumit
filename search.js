function hideFooter() {
    document.getElementById('footer').style.display = 'none';
}

function showFooter() {
    document.getElementById('footer').style.display = 'block';
}

function hideAllSections() {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
}

function showAllSections() {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.display = 'flex';
    });
    document.getElementById('not-found').style.display = 'none';
}

function search() {
    const query = document.getElementById('search-bar').value.toLowerCase();
    const sections = document.querySelectorAll('.section');
    let found = false;

    if (query === '') {
        showAllSections();
        hideFooter();
        return;
    }

    hideAllSections();

    sections.forEach(section => {
        const heading = section.querySelector('h2').innerText.toLowerCase();
        if (heading.includes(query)) {
            section.style.display = 'flex';
            found = true;
        }
    });

    document.getElementById('not-found').style.display = found ? 'none' : 'block';
}

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        search();
    }
}

function handleClickOutside(event) {
    const searchBar = document.getElementById('search-bar');
    if (!searchBar.contains(event.target) && searchBar.value === '') {
        showAllSections();
        showFooter();
    }
}

document.getElementById('search-bar').addEventListener('focus', hideFooter);
document.getElementById('search-bar').addEventListener('blur', function() {
    if (document.getElementById('search-bar').value === '') {
        showAllSections();
        showFooter();
    }
});
document.getElementById('search-bar').addEventListener('input', search);
document.getElementById('search-bar').addEventListener('keypress', handleKeyPress);
document.addEventListener('click', handleClickOutside);
document.addEventListener('keyup', (event) => {
    if (event.key === 'Escape') {
        showAllSections();
        showFooter();
    }
});
