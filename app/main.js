// Render when refreshed
window.onload = () => {
  const color = document.getElementById("color-input").value;
  const mode = document.getElementById("mode-input").value;
  renderColors(color.replace('#', ''), mode);
};

const colorForm = document.getElementById("color-form");
colorForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const color = document.getElementById("color-input").value;
  const mode = document.getElementById("mode-input").value;
  document.body.style.backgroundColor = color;
  
  // Get hex value of color but need to remove its '#'
  renderColors(color.replace("#",""), mode);
});

function renderColors(color, mode) {
  fetch(
    `https://www.thecolorapi.com/scheme?hex=${color}&format=json&mode=${mode}&count=5`
  )
    .then((res) => res.json())
    .then((data) => {
      let colorHtml = ``;
      data.colors.forEach((color) => {
        colorHtml += `
          <div class="h-[460px] w-[110px] cursor-pointer flex flex-col text-center" data-color="${color.hex.clean}">
            <div id="${color.hex.clean}-btn" class="h-full" style="background-color: ${color.hex.value};"></div>
            <h1 class="my-3">${color.hex.value}</h1>
          </div>
        `;
      });
      document.getElementById("color-container").innerHTML = colorHtml;
    });
}


