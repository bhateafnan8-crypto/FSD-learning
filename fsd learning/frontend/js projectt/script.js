// var typed = new Typed(".type",{
//     Strings : ["web developer"," web designer","app developer"],
//     typeSpeed : 150,
//     backSpeed : 150,
//     looped : true
// })
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed');
    var typed = new Typed(".type", {
        strings: ["web developer", "web designer", "app developer"],
        typeSpeed: 150,
        backSpeed: 150,
        loop: true
    });
});
