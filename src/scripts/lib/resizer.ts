const resizer = document.getElementById("resizer") as HTMLElement;
const leftPanel = document.getElementById("left-panel") as HTMLElement;
const container = document.getElementById("split-container") as HTMLElement;

let isResizing = false;

resizer?.addEventListener("mousedown", (e) => {
  isResizing = true;
  document.body.style.cursor = "col-resize";
  document.body.style.userSelect = "none";
});

document.addEventListener("mousemove", (e) => {
  if (!isResizing) return;

  const containerRect = container.getBoundingClientRect();
  const padding = 16;
  const availableWidth = containerRect.width - padding * 2;

  const newWidth = e.clientX - containerRect.left - padding;

  if (newWidth >= 250 && newWidth <= availableWidth - 250) {
    const percentage = (newWidth / availableWidth) * 100;
    leftPanel.style.width = `${percentage}%`;
    leftPanel.style.flex = "none";
  }
});

document.addEventListener("mouseup", () => {
  if (isResizing) {
    isResizing = false;
    document.body.style.cursor = "default";
    document.body.style.userSelect = "auto";
  }
});
