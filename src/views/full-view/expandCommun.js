/* export function removeAllExpanded() {
    const fullView = document.querySelector("#full-view");
  
    do {
      fullView.firstElementChild.remove();
    } while (fullView.firstElementChild);
  } */

let emptyViewText = document.createElement("div");
emptyViewText.id = "empty-view";
emptyViewText.textContent = "Try clicking in a task or project to expand it";

export function removeAllExpanded(displayEmptyText = false) {
  const fullView = document.querySelector("#full-view");

  if (fullView.firstElementChild !== null) {
    do {
      fullView.firstElementChild.remove();
    } while (fullView.firstElementChild);
  }

  /*   while (fullView.firstElementChild) {
    fullView.firstElementChild.remove();
  } */

  if (displayEmptyText) {
    fullView.append(emptyViewText);
  }
}
