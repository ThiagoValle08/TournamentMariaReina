import { TestBed } from '@angular/core/testing';
<<<<<<< HEAD
import { RouterTestingModule } from '@angular/router/testing';
=======
import { RouterModule } from '@angular/router';
>>>>>>> 77fa42b (commit del repocitorio del torneo)
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
<<<<<<< HEAD
        RouterTestingModule
=======
        RouterModule.forRoot([])
>>>>>>> 77fa42b (commit del repocitorio del torneo)
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

<<<<<<< HEAD
  it(`should have as title 'Football_Tournament_Maria_Reina'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Football_Tournament_Maria_Reina');
=======
  it(`should have as title 'torunament'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('torunament');
>>>>>>> 77fa42b (commit del repocitorio del torneo)
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
<<<<<<< HEAD
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, Football_Tournament_Maria_Reina');
=======
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, torunament');
>>>>>>> 77fa42b (commit del repocitorio del torneo)
  });
});
