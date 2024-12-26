import favicon from "./Assets/to-do-list.png"
import headerLogo from "./Assets/logo.png"
import create from "./domCreate"

export default function setLogo(){
    let headTitle = document.querySelector('head');
    let setFavicon = create.createElement('link');
    setFavicon.setAttribute('rel', 'shortcut icon');
    setFavicon.setAttribute('href', favicon);
    headTitle.appendChild(setFavicon);

    let logoDiv = document.querySelector('#logo');
    let logo = create.createImgWithSrc(headerLogo);
    let logoText = create.createTextElement('p' , "TO DO LIST");
    logoText.style.color = 'var(--french-gray)';

    logoDiv.appendChild(logo);
    logoDiv.appendChild(logoText);
};

setLogo();