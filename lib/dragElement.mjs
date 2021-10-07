class DragElement {
    constructor(container, width, el = null) {
        if(!el) {
            el = document.createElement('div');
        }

        // Elements
        this.container = container;
        this.dragItem = el;
        this.maxWidth = width/2;
        
        // dragItem classes
        this.dragItem.classList.add('dragItem');

        // Variables
        this.active = false;
        this.currentX;
        this.initialX;
        this.xOffset = 0;

        // Event Listeners
        this.container.addEventListener("touchstart", this.DragStart.bind(this), false);
        this.container.addEventListener("touchmove", this.Drag.bind(this), false);
        this.container.addEventListener("touchend", this.DragEnd.bind(this), false);

        this.container.addEventListener("mousedown", this.DragStart.bind(this), false);
        this.container.addEventListener("mousemove", this.Drag.bind(this), false);
        this.container.addEventListener("mouseup", this.DragEnd.bind(this), false);
        this.container.addEventListener("mouseleave", this.DragEnd.bind(this), false);
    }

    DragStart(e) {
        if(e.type === 'touchstart') {
            this.initialX = e.touches[0].clientX - this.xOffset;
        } else {
            this.initialX = e.clientX - this.xOffset;
        }

        if(e.target === this.dragItem) {
            this.active = true;
        }
    }

    Drag(e) {
        if(this.active) {
            e.preventDefault();

            if(e.type === 'touchmove') {
                this.currentX = e.touches[0].clientX - this.initialX;
            } else {
                this.currentX = e.clientX - this.initialX;
            }

            this.xOffset = this.currentX;

            this.currentX = (this.currentX > this.maxWidth) ? this.maxWidth : this.currentX;
            this.currentX = (this.currentX < -this.maxWidth) ? -this.maxWidth : this.currentX;
            this.SetTranslateX(this.currentX, this.dragItem);
        }
    }

    DragEnd(e) {
        this.initialX = this.currentX;

        this.active = false;
    }

    SetTranslateX(xPos, el) {
        el.style.transform = `translateX(${xPos}px)`;
    }
}

export { DragElement }