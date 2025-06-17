// Basic interaction (can be expanded)
document.addEventListener("DOMContentLoaded", () => {
  const select = document.querySelector("select");
  const rows = document.querySelectorAll("tbody tr");

  select.addEventListener("change", () => {
    const filter = select.value.toLowerCase();
    rows.forEach(row => {
      const status = row.querySelector(".status")?.textContent.toLowerCase() || "";
      row.style.display = (filter === "all status" || status.includes(filter)) ? "" : "none";
    });
  });
});
