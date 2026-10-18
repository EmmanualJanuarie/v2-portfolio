"use strict";

// Add authorised lab screenshots/videos to assets/proof/<lab-id>/ and register each file below.
// Supported media types are "image" and "video". Use accurate alt text and captions.
const proofProjects = {
  "soc-lab-template": {
    title: "Laboratory experience report",
    summary: "Authorised lab evidence will appear here after a report is completed and reviewed.",
    backId: "project-soc-lab-template",
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
const viewer = document.querySelector("#proof-viewer");
const viewerTitle = document.querySelector("#viewer-title");
const viewerBody = document.querySelector("#viewer-body");
const viewerCaption = document.querySelector("#viewer-caption");
const viewerClose = viewer?.querySelector(".viewer-close");
let activeViewerTrigger = null;

if (year) year.textContent = String(new Date().getFullYear());

function setEmptyState(message) {
  const empty = document.createElement("div");
  empty.className = "proof-empty";
  const heading = document.createElement("h3");
  heading.textContent = "Lab evidence will appear here";
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
    media.controlsList = "nodownload noremoteplayback";
    media.disablePictureInPicture = true;
    media.disableRemotePlayback = true;
    media.addEventListener("contextmenu", (event) => event.preventDefault());
    if (item.poster) media.poster = item.poster;
  } else {
    media.loading = "lazy";
    media.alt = item.alt || item.title || "Lab screenshot";
  }
  const caption = document.createElement("figcaption");
  const captionCopy = document.createElement("div");
  captionCopy.className = "proof-caption-copy";
  const heading = document.createElement("strong");
  heading.textContent = item.title || (item.type === "video" ? "Lab recording" : "Lab screenshot");
  captionCopy.append(heading, document.createTextNode(item.caption || ""));
  const enlargeButton = document.createElement("button");
  enlargeButton.className = "button button-outline proof-enlarge";
  enlargeButton.type = "button";
  enlargeButton.textContent = "Enlarge";
  enlargeButton.setAttribute("aria-label", `Enlarge ${item.type}: ${heading.textContent}`);
  enlargeButton.addEventListener("click", () => openViewer(item, enlargeButton));
  caption.append(captionCopy, enlargeButton);
  figure.append(media, caption);
  gallery.append(figure);
  return true;
}

function openViewer(item, trigger) {
  if (!viewer || !viewerBody) return;
  activeViewerTrigger = trigger;
  viewerTitle.textContent = item.title || (item.type === "video" ? "Lab recording" : "Lab screenshot");
  viewerCaption.textContent = item.caption || "";
  const media = document.createElement(item.type === "video" ? "video" : "img");
  media.src = item.src;
  if (item.type === "video") {
    media.controls = true;
    media.autoplay = true;
    media.preload = "metadata";
    media.controlsList = "nodownload noremoteplayback";
    media.disablePictureInPicture = true;
    media.disableRemotePlayback = true;
    media.addEventListener("contextmenu", (event) => event.preventDefault());
    if (item.poster) media.poster = item.poster;
  } else {
    media.alt = item.alt || item.title || "Lab screenshot";
  }
  viewerBody.replaceChildren(media);
  viewer.showModal();
  viewerClose?.focus();
}

if (viewer && viewerClose) {
  viewerClose.addEventListener("click", () => viewer.close());
  viewer.addEventListener("click", (event) => {
    if (event.target === viewer) viewer.close();
  });
  viewer.addEventListener("close", () => {
    viewerBody?.querySelector("video")?.pause();
    viewerBody?.replaceChildren();
    activeViewerTrigger?.focus();
    activeViewerTrigger = null;
  });
}

if (!project) {
  document.title = "Lab proof not found | Emmanual Januarie";
  title.textContent = "Lab proof not found";
  summary.textContent = "Choose a lab from the portfolio to view its supporting evidence.";
  breadcrumb.textContent = "Not found";
  count.textContent = "";
  setEmptyState("This lab link is not recognized. Return to the Labs section and choose a lab.");
} else {
  document.title = `${project.title} | Lab proof`;
  title.textContent = project.title;
  summary.textContent = project.summary;
  breadcrumb.textContent = project.title;
  backLink.href = `index.html#${project.backId}`;
  const validMedia = project.media.filter(addMediaItem);
  count.textContent = `${validMedia.length} ${validMedia.length === 1 ? "item" : "items"}`;
  if (validMedia.length === 0) {
    setEmptyState("No proof files have been added yet. Add authorised lab images or videos under assets/proof/ and register them in proof.js. Keep private data, credentials, and sensitive system details out of published media.");
  }
}
