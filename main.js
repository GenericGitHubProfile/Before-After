// import { DragElement } from './lib/dragElement.mjs';
import { PictureSlider } from './lib/pictureSlider.mjs';

let container = document.getElementById('before-after');
let container2 = document.getElementById('test2');
// let slider = document.getElementById('slider');
// let divB = document.getElementById('b');

// let dragEl = new DragElement(container);
let picSlide = new PictureSlider(container, '/pictures/polygon_low_poly_art_130453_1920x1080.jpg', '/pictures/low_poly_polygon_landscape_abstraction_103765_1920x1080.jpg', 1200);
let picSlide2 = new PictureSlider(container2, '/pictures/vortex-flower-22042-1920x1080.jpg', '/pictures/waves-2560x1440-hd-15377.jpg');
// let p1x, p2x = 0;

// function DragElement(slider) {
//     slider.addEventListener('mousedown',DragMouseDown);
// }

// function DragMouseDown(e) {
//     e = e || window.Event;
//     e.preventDefault();

//     p2x = e.clientX;
//     // p2y = e.clientY;
//     document.addEventListener('mouseup', CloseDragEvent);
//     document.addEventListener('mousemove', SliderDrag);
// }

// function SliderDrag(e) {
//     e = e || window.Event;
//     p1x = p2x - e.clientX;
//     // p1x = (p2x > 800) ? 0 : p2x - e.clientX;
//     // p1y = p2y - e.clientY;
//     // p2x = e.clientX;
//     p2x = e.clientX;
//     // p2y = e.clientY;

//     ChangeClipPath(p2x);

//     // slider.style.top = (slider.offsetTop - p1y) + "px";
//     slider.style.left = (slider.offsetLeft - p1x) + "px";
// }

// function CloseDragEvent() {
//     document.removeEventListener('mouseup', CloseDragEvent);
//     document.removeEventListener('mousemove', SliderDrag);
// }

// function ChangeClipPath(x) {
//     divB.style.clipPath = `polygon(800px 0, ${x}px 0, ${x}px 400px, 800px 400px)`;
//     // divB.setAttribute('style', `clip-path: polygon(800px 0, ${x}px 0, ${x}px 400px, 800px 400px)`)
//     // console.log(divB.style.clipPath);
// }

// DragElement(slider);