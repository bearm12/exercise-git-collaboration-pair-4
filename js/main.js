'use strict';
const face = document.querySelector('.js-face');
const head = document.querySelector('.js-head');


// function winkFace(){
//     face.innerHTML = ';)';
// }

function normalFace (){
    face.innerHTML = ':)';
}
head.addEventListener('click', (){
    face.innerHTML = ';)';
});
head.addEventListener('mouseout', normalFace);