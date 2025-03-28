function Theme(bgColour, font, textColour, textSize) {
    this.backgroundColour = bgColour;
    this.fontFamily = font;
    this.textColour = textColour;
    this.textSize = textSize;
}

let theme1 = new Theme("#adddce", "Verdana, Geneva, Tahoma, sans-serif", "#2b46e2", "40px");
let theme2 = new Theme("#adc0dd", "'Times New Roman', Times, serif", "#f385f5", "50px");
let theme3 = new Theme("#c3ddad", "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif", "#f68280", "45px");

function ApplyTheme(selectTheme) {
    document.getElementsByTagName("body")[0].style.backgroundColor = selectTheme.backgroundColour;
    document.getElementsByTagName("header")[0].style.fontFamily = selectTheme.fontFamily;
    document.getElementsByTagName("header")[0].style.color = selectTheme.textColour;
    document.getElementsByTagName("header")[0].style.fontSize = selectTheme.textSize;
}

ApplyTheme(theme1);

const radioButtons = document.getElementsByName("radio-button");
console.log(radioButtons)

function changeTheme(event) {
    if(event.target.value === "theme1") {
        ApplyTheme(theme1);
    }
    else if(event.target.value === "theme2") {
        ApplyTheme(theme2);
    }
    else if(event.target.value === "theme3") {
        ApplyTheme(theme3);
    }
}

for(let themeOption of radioButtons) {
    themeOption.addEventListener("change", changeTheme);
}



