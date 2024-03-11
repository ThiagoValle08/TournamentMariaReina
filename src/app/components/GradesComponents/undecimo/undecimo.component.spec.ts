import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UndecimoComponent } from './undecimo.component';

describe('UndecimoComponent', () => {
  let component: UndecimoComponent;
  let fixture: ComponentFixture<UndecimoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UndecimoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UndecimoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
