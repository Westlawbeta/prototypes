import { Component, Input } from '@angular/core';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-plan-tasks-v7',
  templateUrl: './plan-tasks.component.html',
  styleUrls: ['./plan-tasks.component.less']
})
export class PlanTasksComponentv7 {
  taskStatus = "loading";

  tasks: any[] = [
    {
      "taskName": "Task 1",
      "taskStatus": "in-progress",
      "taskDescription": "Identifing the relevant New York anti-discrimination laws governing employment and hiring practices."
    },
    {
      "taskName": "Task 2",
      "taskStatus": "",
      "taskDescription": "Researching case law addressing 'same-protected-class' discrimination claims in New York."
    },
    {
      "taskName": "Task 3",
      "taskStatus": "",
      "taskDescription": "Examining how New York courts have specifically handled failure-to-hire claims where the successful candidate shares the plaintiff's protected characteristic."
    },
    {
      "taskName": "Task 4",
      "taskStatus": "",
      "taskDescription": "Determining if there are any exceptions or special circumstances where such claims can proceed."
    },
    {
      "taskName": "Task 5",
      "taskStatus": "",
      "taskDescription": "Comparing New York's approach to federal precedent on this issue."
    },
    {
      "taskName": "Task 6",
      "taskStatus": "",
      "taskDescription": "Analyzing the legal reasoning behind allowing or disallowing such claims."
    },
    {
      "taskName": "Task 7",
      "taskStatus": "",
      "taskDescription": "Identifing the current legal standard for evaluating these claims in New York."
    }
  ]

  updateTask(step: number) {
    switch(step) {
      case(4):
        this.tasks[0].taskStatus = 'completed';
        this.tasks[1].taskStatus = 'in-progress';
        this.tasks[2].taskStatus = '';
        this.tasks[3].taskStatus = '';
        this.tasks[4].taskStatus = '';
        this.tasks[5].taskStatus = '';
        this.tasks[6].taskStatus = '';
        break;
      case(5):
        this.tasks[0].taskStatus = 'completed';
        this.tasks[1].taskStatus = 'completed';
        this.tasks[2].taskStatus = 'in-progress';
        this.tasks[3].taskStatus = '';
        this.tasks[4].taskStatus = '';
        this.tasks[5].taskStatus = '';
        this.tasks[6].taskStatus = '';
        break;
      case(6):
        this.tasks[0].taskStatus = 'completed';
        this.tasks[1].taskStatus = 'completed';
        this.tasks[2].taskStatus = 'completed';
        this.tasks[3].taskStatus = 'in-progress';
        this.tasks[4].taskStatus = '';
        this.tasks[5].taskStatus = '';
        this.tasks[6].taskStatus = '';
        break;
      case(7):
        this.tasks[0].taskStatus = 'completed';
        this.tasks[1].taskStatus = 'completed';
        this.tasks[2].taskStatus = 'completed';
        this.tasks[3].taskStatus = 'completed';
        this.tasks[4].taskStatus = 'in-progress';
        this.tasks[5].taskStatus = '';
        this.tasks[6].taskStatus = '';
        break;
      case(8):
        this.tasks[0].taskStatus = 'completed';
        this.tasks[1].taskStatus = 'completed';
        this.tasks[2].taskStatus = 'completed';
        this.tasks[3].taskStatus = 'completed';
        this.tasks[4].taskStatus = 'completed';
        this.tasks[5].taskStatus = 'completed';
        this.tasks[6].taskStatus = 'completed';
        break;
      default:
        break;
    }
  }
}