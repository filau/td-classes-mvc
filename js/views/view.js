import { Observer } from "./../pattern/observer.js";

export class View extends Observer {
    #controller;

    constructor(controller) {
        super();
        this.#controller = controller;
        this.#controller.addObserver(this);
    }

    notify() {
        document.querySelector('#txt-counter').innerText = this.#controller.getCounterValue();
    }
}
