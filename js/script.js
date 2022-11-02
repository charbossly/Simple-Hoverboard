
let boxes = document.querySelectorAll('.box');

function randomString(length, chars) {
    var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
}

boxes.forEach(element => {
    element.addEventListener('mouseover',()=>{
        let color =  `#${randomString(6, '0123456789abcdef')}`;
        element.style.backgroundColor=color;
    })
});
boxes.forEach(element => {
    element.addEventListener('mouseout',()=>{
        element.style.backgroundColor="transparent";
    })
});

let mode = document.querySelector('.mode');
mode.addEventListener('click',()=>{
    document.body.classList.toggle('dark');
    mode.classList.toggle('mode-dark');
})
    