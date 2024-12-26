import './style.css';
import favicon from './Assets/to-do-list.png';
function setFavicons(favicon){
    let headTitle = document.querySelector('head');
    let setFavicon = document.createElement('link');
    setFavicon.setAttribute('rel', 'shortcut icon');
    setFavicon.setAttribute('href', favicon);
    headTitle.appendChild(setFavicon);
};
setFavicons(favicon);