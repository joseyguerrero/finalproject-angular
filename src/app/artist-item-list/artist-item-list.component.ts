import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ArtistItem } from '../shared/artist-item';
import { MatDialog } from '@angular/material/dialog';
import { EditItemModalComponent } from '../edit-item-modal/edit-item-modal.component';


export interface UpdateEvent{
  old: ArtistItem;
  new: ArtistItem;
}
@Component({
  selector: 'app-artist-item-list',
  templateUrl: './artist-item-list.component.html',
  styleUrls: ['./artist-item-list.component.scss']
})

export class ArtistItemListComponent implements OnInit {

  @Input() artistItems: ArtistItem[] = []

  @Output() delete: EventEmitter<ArtistItem> = new EventEmitter<ArtistItem>();
  @Output() update: EventEmitter<UpdateEvent> = new EventEmitter<UpdateEvent>();

  constructor(public dialog:MatDialog) { }

  onDelete(item: ArtistItem) {
    this.delete.emit(item);
  }

  onCardClicked(item: ArtistItem){
    // Show the edit modal from Angular Material
    const dialogref = this.dialog.open(EditItemModalComponent, {
      width: '580px',
      data: item
    })

    // Handle the dialog box after the user clicks away
    dialogref.afterClosed().subscribe(result => {
      if(result){
        this.update.emit({
          old:item,
          new:result
        })
      }
    })

  }
  ngOnInit(): void {
  }

}
