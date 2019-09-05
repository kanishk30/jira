'use strict';
import Controller from "./controller.js";
// import {  } from "../main.css";


export default class View {

    constructor(container) {
        this.container = container;
        
    }

    generateAddTaskView(data) {
        const enterTask = document.querySelector('.enter-task');
        const frag = document.createDocumentFragment();

        const textarea = document.createElement('textarea');
        textarea.setAttribute('id', 'addTask');
        textarea.setAttribute('placeholder', 'Add a Task');

        const btn = document.createElement('button');
        const btnText = document.createTextNode('Submit Task');
        btn.appendChild(btnText);
        btn.setAttribute('id', 'submit-btn');

        frag.appendChild(textarea);
        frag.appendChild(btn);
        enterTask.appendChild(frag);
        this.render(data);
    }

    render(data, addOneOnly) {
        let controller = new Controller();
        const content = document.querySelector('.content');
        while(content.firstChild) {
            content.removeChild(content.firstChild)
        }

        data.forEach(item => {
            const content = document.querySelector('.content');
            const div = document.createElement('div');
            const head = document.createTextNode(item.task);
            div.appendChild(head);

            div.classList.add('card')
            div.setAttribute('id', item.id);
            div.setAttribute('draggable', true);
            
            content.appendChild(div);
            controller.dragEventHandler(div);
        });
        
        controller.progressEvents();
        if(!addOneOnly) {
            controller.submitEventHandler();
            // controller.addDragEvents()
        }
    }
}