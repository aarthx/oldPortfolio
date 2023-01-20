//Funções de include jQuery, injetar html no html
$(function() {
    $('#navegacao').load('./pages/nav.html')
    $('#imersaoDev1').load('./pages/imersaoDev1.html') 
    $('#nlwRocketseat1').load('./pages/nlwRocketseat1.html')
    $('#jsAppIdeas').load('./pages/simpleAppsJs.html')

})

$(function() {
    $('.imersaoDev1').hide()
    $('.nlw-rocketseat1').hide()
    $('.simple-js-ideas').hide()

})

document.body.classList.toggle("dark");
function mudaTema() {
    document.body.classList.toggle("dark");
}

//Função de maximizar minimizar divisoes
function showHide(i) {
    if(i == 1) {
        $('.simple-js-ideas').slideToggle(600);
    } else if (i == 2) {
        $('.nlw-rocketseat1').slideToggle(600);
    } else if ( i == 3) {
        $('.imersaoDev1').slideToggle(800);  
    } 
}

function goHome() {
    $('#principal').load('./pages/home.html')
}

$('#button1').on('click', () => {showHide(1)})
$('#button2').on('click', () => {showHide(2)})
$('#button3').on('click', () => {showHide(3)})


