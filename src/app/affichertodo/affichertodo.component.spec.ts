import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichertodoComponent } from './affichertodo.component';

describe('AffichertodoComponent', () => {
  let component: AffichertodoComponent;
  let fixture: ComponentFixture<AffichertodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffichertodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffichertodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
