let slider = document.getElementById('slider');
let divB = document.getElementById('b');

let p1x = p2x = 0;

function DragElement(slider) {
    slider.addEventListener('mousedown',DragMouseDown);
}

function DragMouseDown(e) {
    e = e || window.Event;
    e.preventDefault();

    p2x = e.clientX;
    // p2y = e.clientY;
    document.addEventListener('mouseup', CloseDragEvent);
    document.addEventListener('mousemove', SliderDrag);
}

function SliderDrag(e) {
    e = e || window.Event;
    // p1x = p2x - e.clientX;
    p1x = (p2x > 800) ? 0 : p2x - e.clientX;
    // p1y = p2y - e.clientY;
    // p2x = e.clientX;
    p2x = e.clientX;
    // p2y = e.clientY;

    ChangeClipPath(p2x);

    // slider.style.top = (slider.offsetTop - p1y) + "px";
    slider.style.left = (slider.offsetLeft - p1x) + "px";
}

function CloseDragEvent() {
    document.removeEventListener('mouseup', CloseDragEvent);
    document.removeEventListener('mousemove', SliderDrag);
}

function ChangeClipPath(x) {
    divB.style.clipPath = `polygon(800px 0, ${x}px 0, ${x}px 400px, 800px 400px)`;
    // divB.setAttribute('style', `clip-path: polygon(800px 0, ${x}px 0, ${x}px 400px, 800px 400px)`)
    // console.log(divB.style.clipPath);
}

DragElement(slider);