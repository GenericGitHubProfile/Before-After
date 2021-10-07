import { PictureSlider } from './lib/pictureSlider.mjs';

let container = document.getElementById('before-after');
let container2 = document.getElementById('test2');

let picSlide = new PictureSlider(container, '/pictures/polygon_low_poly_art_130453_1920x1080.jpg', '/pictures/low_poly_polygon_landscape_abstraction_103765_1920x1080.jpg', 1200);
let picSlide2 = new PictureSlider(container2, '/pictures/vortex-flower-22042-1920x1080.jpg', '/pictures/waves-2560x1440-hd-15377.jpg');