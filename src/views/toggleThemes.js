const toggleBtn = document.querySelector('#toggle-theme');

toggleBtn.addEventListener('click', () => {
    if(localStorage.getItem('theme') === 'dark'){
        applyTheme.light();
    } else{
        applyTheme.dark();
    };
});

const applyTheme = (function(){
    let root = document.querySelector(':root');
    
    function dark(){
        root.style.setProperty('--background', '#343a40');
        root.style.setProperty('--black', '#ced4da');
        root.style.setProperty('--dark-gray', '#adb5bd');
        root.style.setProperty('--default-gray', '#6c757d');
        root.style.setProperty('--light-gray', '#495057');
        root.style.setProperty('--borders-gray', '#6c757d');
        localStorage.setItem('theme', 'dark');
    };
    
    function light(){
        root.style.setProperty('--background', '#FFFFFF');
        root.style.setProperty('--black', '#495057');
        root.style.setProperty('--dark-gray', '#6d6a75ff');
        root.style.setProperty('--default-gray', '#adb5bdff');
        root.style.setProperty('--light-gray', '#ebebeb');
        root.style.setProperty('--borders-gray', '#D3D3D3');
        localStorage.setItem('theme', 'light');
    };

    return { dark, light }
})();

if(localStorage.getItem('theme') === 'dark'){
    applyTheme.dark();
} else{
    applyTheme.light();
};

export default applyTheme