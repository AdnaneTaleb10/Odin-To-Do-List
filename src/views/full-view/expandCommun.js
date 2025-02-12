export function removeAllExpanded() {
    const fullView = document.querySelector("#full-view");
  
    do {
      fullView.firstElementChild.remove();
    } while (fullView.firstElementChild);
  }