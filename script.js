const passwordInput = document.getElementById("password");
const toggleBtn = document.getElementById("toggle");
const barFill = document.getElementById("barFill");
const strengthText = document.getElementById("strengthText");
const ruleItems = document.querySelectorAll("#rules li");
const rules = {
  length: (pw) => pw.length >= 8,
  lower: (pw) => /[a-z]/.test(pw),
  upper: (pw) => /[A-Z]/.test(pw),
  number: (pw) => /[0-9]/.test(pw),
  special: (pw) => /[^A-Za-z0-9]/.test(pw),
};
const levels = [
  { label: "Start typing...", color: "#cbd5e1", width: 0 },
  { label: "Very weak", color: "#d64545", width: 20 },
  { label: "Weak", color: "#e8833a", width: 40 },
  { label: "Okay", color: "#e0b61f", width: 60 },
  { label: "Strong", color: "#6ab04c", width: 80 },
  { label: "Very strong", color: "#1f9d55", width: 100 },
];
function checkPassword() {
  const pw = passwordInput.value;
  let score = 0;
  ruleItems.forEach((item) => {
    const ruleName = item.dataset.rule;
    const passed = rules[ruleName](pw);
    item.classList.toggle("ok", passed);
    if (passed) score++;
  });
  if (pw.length === 0) score = 0;
  const level = levels[score];
  barFill.style.width = level.width + "%";
  barFill.style.background = level.color;
  strengthText.textContent = level.label;
  strengthText.style.color = score === 0 ? "#5b6776" : level.color;
}
passwordInput.addEventListener("input", checkPassword);
toggleBtn.addEventListener("click", () => {
  const isHidden = passwordInput.type === "password";
  passwordInput.type = isHidden ? "text" : "password";
  toggleBtn.textContent = isHidden ? "Hide" : "Show";
});
const bubbleBox = document.getElementById("bubbles");
function makeBubble() {
  const bubble = document.createElement("span");
  bubble.className = "bubble";
  const size = 15 + Math.random() * 55;    
  bubble.style.width = size + "px";
  bubble.style.height = size + "px";
  bubble.style.left = Math.random() * 100 + "%";
  bubble.style.animationDuration = 8 + Math.random() * 10 + "s";
  bubble.style.animationDelay = Math.random() * 8 + "s";
  bubbleBox.appendChild(bubble);
}
for (let i = 0; i < 25; i++) {
  makeBubble();
}
