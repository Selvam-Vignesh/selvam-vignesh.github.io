// Theme toggle (saved in browser)
(function(){
  const root = document.body;
  const toggle = document.getElementById("themeToggle");
  if (!toggle) return;

  const saved = localStorage.getItem("theme");
  if (saved === "dark" || saved === "light") root.setAttribute("data-theme", saved);

  toggle.addEventListener("click", () => {
    const cur = root.getAttribute("data-theme") || "light";
    const next = cur === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  });
})();

// Dropdown open/close (only on pages that contain it)
(function(){
  const dd = document.getElementById("photoDropdown");
  const btn = document.getElementById("photoBtn");
  if (!dd || !btn) return;

  const close = () => dd.setAttribute("aria-expanded","false");

  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    dd.setAttribute("aria-expanded",
      dd.getAttribute("aria-expanded") === "true" ? "false" : "true"
    );
  });

  document.addEventListener("click", close);
  document.addEventListener("keydown", (e)=>{ if(e.key==="Escape") close(); });
  dd.querySelectorAll("a").forEach(a => a.addEventListener("click", close));
})();

// Footer year
(function(){
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();
