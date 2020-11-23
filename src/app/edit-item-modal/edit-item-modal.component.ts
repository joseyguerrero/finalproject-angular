import { Component, Inject, Input, OnInit } from '@angular/core';
import { ArtistItem } from '../shared/artist-item';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { inject } from '@angular/core/testing';

@Component({
  selector: 'app-edit-item-modal',
  templateUrl: './edit-item-modal.component.html',
  styleUrls: ['./edit-item-modal.component.scss']
})
export class EditItemModalComponent implements OnInit {

  constructor(public dialogRef:MatDialogRef<EditItemModalComponent>,
    @Inject(MAT_DIALOG_DATA) public item: ArtistItem) { }

    onSubmitted(updatedItem:ArtistItem){
      this.dialogRef.close(updatedItem)
    }

  ngOnInit(): void {
  }

}
