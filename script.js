const projects = [
  { title: "Quiz App", category: "app" },
  { title: "Chat App", category: "app" },
  { title: "Portfolio Site", category: "web" },
  { title: "E-Commerce Store", category: "web" },
  { title: "Video Conferencing", category: "app" },
  { title: "Personal Diary", category: "java project" }
];

function renderProjects(category) {
  const container = document.getElementById("projects-container");
  container.innerHTML = "";

  const filtered = category === "all" 
    ? projects 
    : projects.filter(p => p.category.toLowerCase() === category.toLowerCase());

  if (filtered.length === 0) {
    container.innerHTML = "<p>No projects found in this category.</p>";
    return;
  }

  filtered.forEach(project => {
    const el = document.createElement("div");
    el.className = "project-card";
    el.innerHTML = `
      <h3>${project.title}</h3>
      <p>Category: ${project.category}</p>
    `;
    container.appendChild(el);
  });
}

function filterProjects(category) {
  renderProjects(category);
}

window.onload = () => renderProjects("all");
