//NAVBAR
let lastScrooltop = 0;
navbar = document.getElementById('navbar');

window.addEventListener('scroll',function(){
    const scrollTop = window.pageYOffset ||
    this.document.documentElement.scrollTop;

    if( scrollTop > lastScrooltop){
        navbar.style.top ="-50px";
    }else{
        navbar.style.top= "0";
    }
    lastScrooltop =scrollTop;

});

// BOUTTON POUR SCROLLER JUSQUA SECTION SUIVANTE




// TYPED (texte auto écrit)
var typed = new Typed('.typed', {
    strings: [ 'Bonjour à toutes et à tous', 'Bonjour à toutes et à tous',
               "Je me présente, je m'appelle Gabriel Gaugain et je suis français. Je suis jeune diplomé ingénieur de l'école "
               + "PHELMA du groupement Grenoble INP, avec une specialité Biomedial Engineering (master internationnal). "
               + "Je suis un scientifique avant tout avec un interet pour le domaine des neurosciences et les domaines connexes."
               + "Mais j'aime aussi beaucoup les métier de l'informatique et notamment la programmation."],
    typeSpeed: 40,
    backSpeed: 0,
    smartBackspace: true,
    loop: true
});













