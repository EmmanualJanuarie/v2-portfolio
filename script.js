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
  udes: { repository: "", liveSite: "" },
  azure: { repository: "", liveSite: "" },
  networking: { repository: "", liveSite: "" },
  "windows-server": { repository: "", liveSite: "" },
  "cloud-security": { repository: "", liveSite: "" },
};

function safeWebUrl(value) {
  try {
    const url = new URL(value);
    return url.protocol === "https:" || url.protocol === "http:" ? url.href : "";
  } catch {
    return "";
  }
}

function makeProjectAction(label, href, options = {}) {
  if (!href) {
    const button = document.createElement("button");
    button.className = "button project-action project-action-unavailable";
    button.type = "button";
    button.disabled = true;
    button.textContent = label;
    button.title = options.title || "Add this project URL in script.js";
    button.setAttribute("aria-label", `${label} unavailable until a project URL is added`);
    return button;
  }

  const link = document.createElement("a");
  link.className = "button project-action";
  link.href = href;
  link.textContent = label;
  if (options.newTab) {
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  }
  return link;
}

document.querySelectorAll("[data-project-actions]").forEach((container) => {
  const projectId = container.dataset.projectActions;
  const links = projectLinks[projectId] || {};
  const repositoryUrl = safeWebUrl(links.repository);
  const liveSiteUrl = safeWebUrl(links.liveSite);

  container.replaceChildren(
    makeProjectAction("Code repository", repositoryUrl, { newTab: true }),
    makeProjectAction("Live site", liveSiteUrl, { newTab: true }),
    makeProjectAction("Proof & media", `proof.html?project=${encodeURIComponent(projectId)}`, {
      newTab: true,
      title: "Open project proof and media in a new tab",
    }),
  );
});
