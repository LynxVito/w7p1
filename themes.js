const THEME = "Theme";

function Theme(bgColour, font, textColour, textSize) {
    this.backgroundColour = bgColour;
    this.fontFamily = font;
    this.textColour = textColour;
    this.textSize = textSize;
}

let theme1 = new Theme("#adddce", "Verdana, Geneva, Tahoma, sans-serif", "#2b46e2", "40px");
let theme2 = new Theme("#adc0dd", "'Times New Roman', Times, serif", "#f385f5", "50px");
let theme3 = new Theme("#c3ddad", "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif", "#f68280", "45px");

function ApplyTheme(themeName) {
    let selectTheme;

    if(themeName === "theme1") {
        // ApplyTheme(theme1);
        // saveThemeInStorage(event.target.value);

        selectTheme = theme1;
    }
    else if(themeName === "theme2") {
        // ApplyTheme(theme2);
        // saveThemeInStorage(event.target.value);

        selectTheme = theme2;
    }
    else if(themeName === "theme3") {
        // ApplyTheme(theme3);
        // saveThemeInStorage(event.target.value);

        selectTheme = theme3;
    }

    document.getElementById(themeName).checked = true;
    document.getElementsByTagName("body")[0].style.backgroundColor = selectTheme.backgroundColour;
    document.getElementsByTagName("header")[0].style.fontFamily = selectTheme.fontFamily;
    document.getElementsByTagName("header")[0].style.color = selectTheme.textColour;
    document.getElementsByTagName("header")[0].style.fontSize = selectTheme.textSize;
}

const radioButtons = document.getElementsByName("radio-button");
console.log(radioButtons);

function ChangeTheme(event) {
    // if(event.target.value === "theme1") {
    //     ApplyTheme(theme1);
    //     saveThemeInStorage(event.target.value);
    // }
    // else if(event.target.value === "theme2") {
    //     ApplyTheme(theme2);
    //     saveThemeInStorage(event.target.value);
    // }
    // else if(event.target.value === "theme3") {
    //     ApplyTheme(theme3);
    //     saveThemeInStorage(event.target.value);
    // }

    ApplyTheme(event.target.value);
    saveThemeInStorage(event.target.value);
}

for(let themeOption of radioButtons) {
    themeOption.addEventListener("change", ChangeTheme);
}

function getThemeFromStorage() {
    const selectedTheme = localStorage.getItem(THEME);
    if(selectedTheme !== null) {
        return selectedTheme;
    }
    else {
        return "theme1";
    }
}

function saveThemeInStorage(theme) {
    localStorage.setItem(THEME, theme);
    // ChangeTheme();
}

ApplyTheme(getThemeFromStorage());
console.log(getThemeFromStorage())
// getThemeFromStorage();