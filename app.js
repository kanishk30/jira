"use strict";

import Model from "./js/model.js";
import View from "./js/view.js";
import Controller from "./js/controller.js";

let app = (() => {
    document.addEventListener('DOMContentLoaded', () => {
        let model = new Model();
        let data = model.getAppState();
        
        let container = document.querySelector('#app');
        let view = new View(container);
        view.generateAddTaskView(data);
        
    },true);
})();  