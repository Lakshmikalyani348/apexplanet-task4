// Example: Alert on clicking a project title
document.addEventListener("DOMContentLoaded", () => {
  const projectTitles = document.querySelectorAll(".project h2");

  projectTitles.forEach(title => {
    title.addEventListener("click", () => {
      alert(`You clicked on project: ${title.textContent}`);
    });
  });

  // Optional: Dark mode toggle if you add a button with ID "toggle-mode"
  const toggleBtn = document.getElementById("toggle-mode");
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
    });
  }
});
