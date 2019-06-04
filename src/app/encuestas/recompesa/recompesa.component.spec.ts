import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecompesaComponent } from './recompesa.component';

describe('RecompesaComponent', () => {
  let component: RecompesaComponent;
  let fixture: ComponentFixture<RecompesaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecompesaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecompesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
