const create = (function(){

    function createElement(element){
        const item = document.createElement(`${element}`);

        return item;
    }

    function createTextElement(element , text){
        const item = document.createElement(`${element}`);
        item.textContent = text;
        return item;
    };

    function createElementWithID(element , id , text){
        const item = document.createElement(`${element}`);
        item.id = id;
        item.textContent = text;
        return item;
    }

    function createElementWithClass(element , className , text){
        const item = document.createElement(`${element}`);
        item.classList.add(`${className}`);
        item.textContent = text;
        return item;
    }

    function createImgWithSrc(src){
        const img = document.createElement('img');
        img.src = src;
        return img;
    }

    return{createElement , createTextElement , createElementWithID , createElementWithClass , createImgWithSrc}

})();

export default create;