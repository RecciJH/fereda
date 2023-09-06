let observer = new IntersectionObserver(verificarVisibilidad, {});

let cody = document.querySelector('.fade-in');

function verificarVisibilidad(entries){
let entry = entries[0];
if(entry.isIntersecting){
cody.classList.add('active');
}else{
    cody.classList.remove('active');

}
}
