'use strict';
import Model from './model.js';
import View from './view.js';

export default class Controller {
  constructor() {
    console.log('controllers');
    this.model = new Model();
    this.view = new View();
  }
  draggedID = -1;
  ev;

  submitEventHandler() {
    const btn = document.querySelector('#submit-btn');
    btn.addEventListener('click', () => {
      const totaltasks = this.model.getAppState().length;
      const value = document.querySelector('#addTask').value;
      const payload = {
        task: value,
        state: 'todo',
        id: totaltasks
      };
      this.model.setAppState(payload, true).then(allTasks => {
        console.log(allTasks);
        this.view.render(allTasks, true);
        this.clearText();
      });
    });
  }

  progressEvents() {
      const prog = document.querySelector('.progress');
      prog.addEventListener('dragover', this.dragOver);
      prog.addEventListener('drop', this.dragDrop);
  }

  dragEventHandler(item) {
    const content = document.getElementById(item.id);
    // const itemNode = item;
    content.addEventListener('drag', this.dragStart);
  }

    dragStart(e) {
        window.draggedID = e.target.id;
        e.dataTransfer.setData('text', e.target.id);
    }

    dragOver(e) {
        e.preventDefault();
    }

    dragDrop(e) {
        e.preventDefault();
        // const div = e.dataTransfer.getData('text');
        // console.log(div, 'dragdrop');
        // this.append(document.getElementById(div));

        // HACKY 
        const a = document.getElementById(window.draggedID);
        console.log(a, 'id a')
        this.append(a)
    }

  clearText() {
    const field = document.querySelector('#addTask');
    field.value = '';
  }
}
