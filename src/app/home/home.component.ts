import { Component, OnInit } from '@angular/core';
import { ArtistItem } from '../shared/artist-item';
import { UpdateEvent } from '../artist-item-list/artist-item-list.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  artistItems: ArtistItem[] = new Array<ArtistItem> ()

  constructor() { }

  ngOnInit(): void {
  }

  addItem(newItem: ArtistItem){
    this.artistItems.push(newItem);
    
  }

  deleteItem(item: ArtistItem){
    let index = this.artistItems.indexOf(item)
    this.artistItems.splice(index,1);
    
  }

  updateItem(updateEvent: UpdateEvent){
            // replace the item with the updted/submitted item from the form
            this.artistItems[this.artistItems.indexOf(updateEvent.old)] = updateEvent.new;
            
  }


}
