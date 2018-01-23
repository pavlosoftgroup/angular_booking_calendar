import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-group-modal',
  templateUrl: './group-modal.component.html',
  styleUrls: ['./group-modal.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class GroupModalComponent implements OnInit {
  public groupForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<GroupModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.groupForm = new FormGroup({
      title: new FormControl('', [Validators.required])
    });
  }

  saveModal() {
    const title = this.groupForm.value.title;
    this.dialogRef.close(title);
  }

  closeModal() {
    this.dialogRef.close();
  }

}
