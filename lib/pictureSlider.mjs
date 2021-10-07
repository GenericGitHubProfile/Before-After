import { DragElement } from "./dragElement.mjs";

class PictureSlider {
    constructor(holder, backgroundPic, clippedPic, width = 800, height = null) {
        if(!height) {
            height = width * 0.5625; // Ratio between 1920 and 1080
        }

        this.container = document.createElement('div');
        this.container.classList.add('pictureSlide');
        holder.appendChild(this.container);

        this.backgroundPic = document.createElement('div');

        this.clippedPic = document.createElement('div');
        this.width = width;
        this.height = height;

        this.SetupImagesCss([this.backgroundPic, this.clippedPic]);

        this.container.appendChild(this.backgroundPic);
        this.container.appendChild(this.clippedPic);

        this.dragEl = new DragElement(this.container, this.width);
        this.container.appendChild(this.dragEl.dragItem);
        this.container.addEventListener('mousedown', this.DragStart.bind(this), false);

        this.backgroundPic.style.backgroundImage = `url(${backgroundPic})`;
        this.clippedPic.style.backgroundImage = `url(${clippedPic})`;

        this.container.style.width = `${this.width}px`;
        this.container.style.height = `${this.height}px`;

        this.clippedPic.style.clipPath = `polygon(${this.width}px 0, ${this.width/2}px 0, ${this.width/2}px ${this.height}px, ${this.width}px ${this.height}px)`;
    }

    DragStart(e) {
        if(e.target === this.dragEl.dragItem) {
            const event = this.Drag.bind(this);
            this.container.addEventListener('mousemove', event, false);
            this.container.addEventListener('mouseup', (e) => {
                this.container.removeEventListener('mousemove', event, false);
            });
        }
    }

    Drag() {
        this.ChangeClipPath(this.dragEl.currentX);
    }

    ChangeClipPath(xPos) {
        let movedWidth = (this.width/2) + xPos;
        this.clippedPic.style.clipPath = `polygon(${this.width}px 0, ${movedWidth}px 0, ${movedWidth}px ${this.height}px, ${this.width}px ${this.height}px)`;
    }

    SetupImagesCss(imageDivArr) {
        imageDivArr.forEach((imageDiv) => this.ImageCss(imageDiv));
    }

    ImageCss(imageDiv) {
        imageDiv.style.width = `${this.width}px`;
        imageDiv.style.height = `${this.height}px`;
        imageDiv.style.position = 'absolute';
        imageDiv.style.backgroundSize = 'cover';
    }
}

export { PictureSlider }