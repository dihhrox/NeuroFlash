const includeTargets = document.querySelectorAll("[data-include-src]");

async function injectSharedInclude(target) {
  const src = target.getAttribute("data-include-src");

  if (!src) {
    return;
  }

  try {
    const response = await fetch(src);

    if (!response.ok) {
      throw new Error(`Failed to load include: ${src} (${response.status})`);
    }

    target.innerHTML = await response.text();
  } catch (error) {
    console.error("Shared include failed:", error);
  }
}

includeTargets.forEach((target) => {
  void injectSharedInclude(target);
});
