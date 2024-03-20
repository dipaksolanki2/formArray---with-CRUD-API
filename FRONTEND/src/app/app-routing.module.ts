import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


/*

<div class="container" style="text-align: center;">
  <h2>School Form Task</h2>
</div>

<div class="container" style="border: 2px solid blue; margin: 1rem;">

  <!-- Main School Form -->
  <form [formGroup]="schoolForm" (ngSubmit)="onSubmit()">

    <!-- Students Array -->
    <div formArrayName="students" style="margin-block: 10px;">
      <div *ngFor="let student of students().controls; let studentIndex=index">
        <div [formGroupName]="studentIndex">
          Student Name {{studentIndex + 1 }} :
          <input type="text" formControlName="studentName" /><br><br>
          Roll No:
          <input type="text" formControlName="rollNo" /><br><br>
          Standard:
          <input type="text" formControlName="Standard" /><br><br>

          <!-- Exams Array -->
          <div class="container" style="border: 2px solid black; margin-bottom: 10px;">
            <div formArrayName="exams" style="margin-block: 10px;">

              <div *ngFor="let exam of exams(studentIndex).controls; let examIndex=index">
                <div [formGroupName]="examIndex">
                  Exam Type {{examIndex + 1}} :
                  <input type="text" formControlName="examType" /><br><br>

                  <!-- Subject Array -->
                  <div class="container" style="border: 2px solid rgb(152, 11, 11); margin: 10px;">
                    <div formArrayName="subjects" style="margin-block: 10px;">

                      <div *ngFor="let subject of subjects(studentIndex, examIndex).controls; let subjectIndex=index">
                        <div [formGroupName]="subjectIndex">
                           Subject Name {{subjectIndex + 1}} :
                          <input type="text" formControlName="subjectName" /><br><br>
                          <div class="btn-group">
                            <button type="button" (click)="removeSubject(studentIndex, examIndex, subjectIndex)" class="btn btn-danger">
                              Remove Subject
                            </button>
                          </div>
                        </div> 
                      </div>

                      <button type="button" (click)="addSubject(studentIndex, examIndex)" class="btn btn-success">
                        Add Subject
                      </button>
                    </div>

                  </div>

                  <div class="btn-group">
                    <button type="button" (click)="removeExam(studentIndex, examIndex)" class="btn btn-danger">
                      Remove Exam
                    </button>
                  </div>
                </div>
              </div>

              <button type="button" (click)="addExam(studentIndex)" class="btn btn-warning">
                Add Exam
              </button>
            </div>

            
          </div>

          <div class="btn-group">
            <button type="button" (click)="removeStudent(studentIndex)" class="btn btn-danger">Remove Student</button>
          </div>
        </div>
      </div>

      <button type="button" (click)="addStudent()" class="btn btn-secondary">Add Student</button>
      <hr>
    </div>

    <button [disabled]="schoolForm.invalid || schoolForm.untouched" class="btn btn-primary"  type="submit">Submit Form</button>
  </form>
</div>

*/