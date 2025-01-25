export function changeTabLabelTo(newTab){
    const currentTab = document.querySelector('#current-tab');
    currentTab.textContent = newTab;
}