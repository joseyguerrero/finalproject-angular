import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ArtistItem } from '../shared/artist-item';

@Component({
  selector: 'app-add-artist-form',
  templateUrl: './add-artist-form.component.html',
  styleUrls: ['./add-artist-form.component.scss']
})
export class AddArtistFormComponent implements OnInit {
  @Input() item: ArtistItem = new ArtistItem('')
  @Output() formSubmit: EventEmitter<ArtistItem> = new EventEmitter


  constructor() { }

  onSubmit(form: NgForm) {
    console.log(this.formSubmit.emit(form.value))
  }

  ngOnInit(): void {
  }

}
