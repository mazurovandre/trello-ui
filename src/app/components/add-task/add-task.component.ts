import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatError, MatFormField, MatInput, MatLabel } from "@angular/material/input";
import { MatButton } from "@angular/material/button";
import { AddTaskService } from "./add-task.service";
import { NgIf } from "@angular/common";

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormField,
    MatLabel,
    MatInput,
    MatButton,
    MatError,
    FormsModule,
    NgIf
  ],
  providers: [AddTaskService],
  templateUrl: './add-task.component.html',
})
export class AddTaskComponent implements OnInit {
  @Output() addTask = new EventEmitter();
  myForm!: FormGroup;

  constructor(private fb: FormBuilder, private addTaskService: AddTaskService) {
  }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      title: ['', Validators.required],
      description: ['']
    });
  }

  submitForm() {
    if (this.myForm.valid) {
      this.addTaskService.addTask(this.myForm.value)
        .subscribe(response => {
          console.log('Form submitted!', response);
          this.addTask.emit(response);
          this.myForm.reset();
        })
    } else {
      console.log('Form is invalid');
    }
  }
}
