document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("cv-form");

  // Preview fields
  const previewName = document.getElementById("preview-name");
  const previewEmail = document.getElementById("preview-email");
  const previewEducation = document.getElementById("preview-education");
  const previewExperience = document.getElementById("preview-experience");
  const previewSkills = document.getElementById("preview-skills");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // stop page reload

    // Get values from form
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const education = document.getElementById("education").value.split("\n");
    const experience = document.getElementById("experience").value.split("\n");
    const skills = document.getElementById("skills").value.split(",");

    // Update preview
    previewName.textContent = name || "Your Name";
    previewEmail.textContent = email || "Your Email";

    // Education list
    previewEducation.innerHTML = "";
    education.forEach((item) => {
      if (item.trim() !== "") {
        let li = document.createElement("li");
        li.textContent = item.trim();
        previewEducation.appendChild(li);
      }
    });

    // Experience list
    previewExperience.innerHTML = "";
    experience.forEach((item) => {
      if (item.trim() !== "") {
        let li = document.createElement("li");
        li.textContent = item.trim();
        previewExperience.appendChild(li);
      }
    });

    // Skills
    previewSkills.textContent = skills.map((s) => s.trim()).join(", ");
  });

  // Simple download button (print as PDF)
  const downloadBtn = document.createElement("button");
  downloadBtn.textContent = "Download CV as PDF";
  downloadBtn.style.marginTop = "15px";
  downloadBtn.onclick = function () {
    window.print();
  };

  document.getElementById("preview-section").appendChild(downloadBtn);
});
