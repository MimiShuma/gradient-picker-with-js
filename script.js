const gradientBox = document.querySelector(".gradient-box");
const selectMenu = document.querySelector(".select-box select");
const colorInputs = document.querySelectorAll(".colors input");
const textareaValue = document.querySelector("textarea");
const randomColorsBtn = document.querySelector(".random-colors");
const copyBtn = document.querySelector(".copy");

const getRandomColors = () => {
    const randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
    return `#${randomHex}`;
}


const generateGradient = (isRandom) => {
    if (isRandom) {
        colorInputs[0].value = getRandomColors();
        colorInputs[1].value = getRandomColors();
    }
    const gradient = `linear-gradient(${selectMenu.value}, ${colorInputs[0].value}, ${colorInputs[1].value})`;
    gradientBox.style.background = gradient;
    textareaValue.value = `background: ${gradient};`;
}

const copyCode = () => {
    navigator.clipboard.writeText(textareaValue.value);
    copyBtn.innerText = "Code Copied";
    setTimeout(() => copyBtn.innerText = "Copy Code", 1600);
}

colorInputs.forEach(input => {
    input.addEventListener("input", () => generateGradient(false));
})

selectMenu.addEventListener("change", () => generateGradient(false));

randomColorsBtn.addEventListener("click", () => generateGradient(true));

copyBtn.addEventListener("click", copyCode);
