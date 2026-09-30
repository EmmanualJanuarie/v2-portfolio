"use strict";

const menuToggle = document.querySelector(".menu-toggle");
const primaryNav = document.querySelector("#primary-nav");

if (menuToggle && primaryNav) {
  const closeMenu = () => {
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
    primaryNav.classList.remove("is-open");
  };

  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Open navigation menu" : "Close navigation menu");
    primaryNav.classList.toggle("is-open", !isOpen);
  });

  primaryNav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) closeMenu();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });
}

const year = document.querySelector("#current-year");
if (year) year.textContent = String(new Date().getFullYear());

// Add project-specific repository and live demo URLs here when they are ready.
const projectLinks = {
  udes: { repository: "https://github.com/EmmanualJanuarie/umbrella", liveSite: "https://emmanualjanuarie.github.io/umbrella/#/login" },
  "dotnet-api": { repository: "", liveSite: "" },
  "dotnet-inventory": { repository: "", liveSite: "" },
  "dotnet-desktop": { repository: "", liveSite: "" },
  "internship-kbs": { repository: "https://github.com/EmmanualJanuarie/KBS_portal", liveSite: "https://emmanualjanuarie.github.io/KBS_portal" },
};

function safeWebUrl(value) {
  try {
    const url = new URL(value);
    return url.protocol === "https:" || url.protocol === "http:" ? url.href : "";
  } catch {
    return "";
  }
}

// Add the public credential verification URL here when it is available.
const credentialLinks = {
  "devops-engineer-expert": "https://learn.microsoft.com/api/credentials/share/en-us/EmmanualJanuarie-0471/35E1E9417CEDE322?sharingId=3C00639A1DE75581",
};

document.querySelectorAll("[data-credential-link]").forEach((slot) => {
  const url = safeWebUrl(credentialLinks[slot.dataset.credentialLink]);
  if (!url) return;

  const link = document.createElement("a");
  link.className = "credential-link";
  link.href = url;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.textContent = "View credential";
  slot.replaceWith(link);
});

function activateProjectLink(button, href) {
  if (!button || !href) return;

  const link = document.createElement("a");
  link.className = "button project-action";
  link.href = href;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.textContent = button.textContent;
  button.replaceWith(link);
}

document.querySelectorAll("[data-project-actions]").forEach((container) => {
  const projectId = container.dataset.projectActions;
  const links = projectLinks[projectId] || {};
  const repositoryButton = container.querySelector('[data-project-link="repository"]');
  const liveSiteButton = container.querySelector('[data-project-link="liveSite"]');
  if (repositoryButton && !links.repository) repositoryButton.title = "Add the project repository URL in script.js";
  if (liveSiteButton && !links.liveSite) liveSiteButton.title = "Add the live project URL in script.js";
  activateProjectLink(repositoryButton, safeWebUrl(links.repository));
  activateProjectLink(liveSiteButton, safeWebUrl(links.liveSite));
});
