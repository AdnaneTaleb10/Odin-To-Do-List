const create = (function () {
  function createElement(element) {
    const item = document.createElement(`${element}`);

    return item;
  }

  function createTextElement(element, text) {
    const item = document.createElement(`${element}`);
    item.textContent = text;
    return item;
  }

  function createElementWithID(element, ...ids) {
    const item = document.createElement(element);
    item.id = ids.join(" ");
    return item;
  }

  function createElementWithClass(elementName, ...classNames) {
    const element = document.createElement(elementName);
    element.classList.add(...classNames);
    return element;
  }

  function createImgWithSrc(src) {
    const img = document.createElement("img");
    img.src = src;
    return img;
  }

  return {
    createElement,
    createTextElement,
    createElementWithID,
    createElementWithClass,
    createImgWithSrc,
  };
})();

export default create;
