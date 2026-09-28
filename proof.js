"use strict";

// Add screenshots/videos to assets/proof/<project-id>/ and register each file below.
// Supported media types are "image" and "video". Use accurate alt text and captions.
const proofProjects = {
  udes: {
    title: "UDES — Digital Evidence Management System",
    summary: "Screenshots and recordings for the evidence-management workflow. Demonstration media should use synthetic data only.",
    backId: "project-udes",
    media: [],
  },
  azure: {
    title: "Azure Infrastructure Lab",
    summary: "Screenshots and recordings documenting the Azure infrastructure lab.",
    backId: "project-azure",
    media: [],
  },
  networking: {
    title: "Network Troubleshooting Lab",
    summary: "Screenshots, diagrams, and recordings documenting network topology and troubleshooting work.",
    backId: "project-networking",
    media: [],
  },
  "windows-server": {
    title: "Windows Server Administration Lab",
    summary: "Screenshots and recordings documenting server administration tasks and outcomes.",
    backId: "project-windows-server",
    media: [],
  },
  "cloud-security": {
    title: "Cloud Security Lab",
    summary: "Screenshots and recordings documenting cloud identity, access, network controls, and monitoring.",
    backId: "project-cloud-security",
    media: [],
  },
};

const params = new URLSearchParams(window.location.search);
const projectId = params.get("project");
const project = Object.hasOwn(proofProjects, projectId) ? proofProjects[projectId] : null;
const title = document.querySelector("#proof-title");
const summary = document.querySelector("#proof-summary");
const breadcrumb = document.querySelector("#breadcrumb-project");
const backLink = document.querySelector("#project-back");
const gallery = document.querySelector("#proof-gallery");
const count = document.querySelector("#proof-count");
const year = document.querySelector("#current-year");

if (year) year.textContent = String(new Date().getFullYear());

function setEmptyState(message) {
  const empty = document.createElement("div");
  empty.className = "proof-empty";
  const heading = document.createElement("h3");
  heading.textContent = "Project media will appear here";
  const description = document.createElement("p");
  description.textContent = message;
  empty.append(heading, description);
  gallery.replaceChildren(empty);
}

function addMediaItem(item) {
  if (!item || (item.type !== "image" && item.type !== "video") || typeof item.src !== "string") return false;
  const figure = document.createElement("figure");
  figure.className = "proof-item";
  const media = document.createElement(item.type === "video" ? "video" : "img");
  media.src = item.src;
  if (item.type === "video") {
    media.controls = true;
    media.preload = "metadata";
    if (item.poster) media.poster = item.poster;
  } else {
    media.loading = "lazy";
    media.alt = item.alt || item.title || "Project screenshot";
  }
  const caption = document.createElement("figcaption");
  const heading = document.createElement("strong");
  heading.textContent = item.title || (item.type === "video" ? "Project recording" : "Project screenshot");
  caption.append(heading, document.createTextNode(item.caption || ""));
  figure.append(media, caption);
  gallery.append(figure);
  return true;
}

if (!project) {
  document.title = "Project proof not found | Your Name";
  title.textContent = "Project proof not found";
  summary.textContent = "Choose a project from the portfolio to view its proof and media.";
  breadcrumb.textContent = "Not found";
  count.textContent = "";
  setEmptyState("This project link is not recognized. Return to the Projects section and choose a project.");
} else {
  document.title = `${project.title} | Project proof`;
  title.textContent = project.title;
  summary.textContent = project.summary;
  breadcrumb.textContent = project.title;
  backLink.href = `index.html#${project.backId}`;
  const validMedia = project.media.filter(addMediaItem);
  count.textContent = `${validMedia.length} ${validMedia.length === 1 ? "item" : "items"}`;
  if (validMedia.length === 0) {
    setEmptyState("No proof files have been added yet. Put project images or videos in assets/proof/ and register them in proof.js. Keep private data, credentials, and customer information out of published media.");
  }
}
