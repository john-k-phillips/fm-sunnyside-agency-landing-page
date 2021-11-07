let navIsOpen = false;

const toggleMenu = () => {
    const dropdownItems = document.querySelector('.dropdown-items');

    navIsOpen =  !navIsOpen;
    if (navIsOpen) { 
        dropdownItems.style.display = 'flex';
    } else {
        dropdownItems.style.display = 'none'
    }
}