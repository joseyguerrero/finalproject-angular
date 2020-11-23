import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistItemListComponent } from './artist-item-list.component';

describe('ArtistItemListComponent', () => {
  let component: ArtistItemListComponent;
  let fixture: ComponentFixture<ArtistItemListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistItemListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
