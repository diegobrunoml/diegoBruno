const abilitiesButton = document.querySelector("#abilities-button");
const boutMeButton = document.querySelector("#boutMeButton");
const buttonContacts = document.querySelector("#buttonContacts");

const divAbility = document.querySelector(".full_screen_container");
const divBoutMe = document.querySelector("#main-info");
const divContact = document.querySelector(".contacts");

const abilitiesContainer = document.querySelector(".full_screen_container");
const menuVisualizationControl = document.querySelector("#menuVisualizationControl");

const imgLikedin = document.querySelector(".linkedin");
const imgGit = document.querySelector(".git");
const imgWorkana = document.querySelector(".workana");

const navMenu = document.querySelector("#lateral");

function makeSmoothScroll(targetElement, behavior = 'smooth', block = 'start') {
    targetElement.scrollIntoView({ behavior, block });
}

abilitiesButton.addEventListener("click", () => {
    makeSmoothScroll(divAbility);
});

boutMeButton.addEventListener("click", () => {
    makeSmoothScroll(divBoutMe);
});

buttonContacts.addEventListener("click", () => {
    makeSmoothScroll(divContact);
});


document.addEventListener("DOMContentLoaded", makeSmoothScroll);


imgGit.addEventListener("click", ()=>{
 window.open("https://github.com/diegobrunoml", '_blank')
})


imgWorkana.addEventListener("click", ()=>{
    window.open("https://www.workana.com/freelancer/7d39c295d746bb5128a96d545ab0b398", '_blank')
   })

imgLikedin.addEventListener("click", ()=>{
    window.open("https://www.linkedin.com/in/diego-bruno-823758278/", '_blank')
})


// Verifica o tamanho da tela

function isMediaQueryActive(query) {
    const mediaQuery = window.matchMedia(query);
    return mediaQuery.matches;
}


// Atualiza o tamanho do conteúdo do site caso o menu esteja visível ou invisível

function contentSizeVerification(){
    const isLargeScreen = isMediaQueryActive("(min-width: 1000px)");

        // Realiza verificações e mudanças nas margens independentemente da classe
    if (navMenu.classList.contains("hidden")) {
        document.querySelector(".medium_height_container").style.marginLeft = "0vw";
        divAbility.style.marginLeft = "0vw";
        document.querySelector(".contacts").style.marginLeft = "0vw";
    } else {
        document.querySelector(".medium_height_container").style.marginLeft =  isLargeScreen ? "1vw" :"3vw";
        divAbility.style.marginLeft = isLargeScreen ? "0vw" :"6vw";
        document.querySelector(".contacts").style.marginLeft = isLargeScreen ? "1vw" :"3vw";
    }
}

function updateContentSize() {

    if (!navMenu.classList.contains("hidden")) {
        navMenu.classList.remove("showing");
        navMenu.classList.add("hidden");
    } else {
        navMenu.classList.remove("hidden");
        navMenu.classList.add("showing");
    }
     
    contentSizeVerification()

}

// Fazendo a verificação das margens sempre que a tela é redimensionada

window.addEventListener("resize", contentSizeVerification);

// Sempre que o botão de abrir o menu é acionado

menuVisualizationControl.addEventListener("click", ()=>{
    updateContentSize()
})

// Garantindo que as margens estejam corretas na inicialização 

updateContentSize()


