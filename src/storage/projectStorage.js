let array = [];

const projects = (function () {
  if (localStorage.getItem("projects") === null) {
    localStorage.setItem("projects", JSON.stringify(array));
  }

  function storeProjects(obj) {
    let parsed = JSON.parse(localStorage.getItem("projects"));
    parsed.push(obj);
    localStorage.setItem("projects", JSON.stringify(parsed));
    updateProjectsIds();
  }

  function removeProject(i) {
    let parsed = JSON.parse(localStorage.getItem("projects"));
    parsed.splice(i, 1);
    localStorage.setItem("projects", JSON.stringify(parsed));
    updateProjectsIds();
  }

  function getAllProjects() {
    return JSON.parse(localStorage.getItem("projects"));
  }

  function editProjects(i, newTitle, newLink, newDescription) {
    let parsed = JSON.parse(localStorage.getItem("projects"));
    if (newTitle !== "") {
      parsed[i].title = newTitle;
    }

    parsed[i].link = newLink;
    parsed[i].description = newDescription;
    localStorage.setItem("projects", JSON.stringify(parsed));
  }

  return {
    storeProjects,
    removeProject,
    getAllProjects,
    editProjects,
  };
})();

function updateProjectsIds(){
    let stored = JSON.parse(localStorage.getItem('projects'));
    for(let i = 0; i < stored.length; i++){
        stored[i].id = i;
    };
    localStorage.setItem('projects', JSON.stringify(stored));
}

export default projects;