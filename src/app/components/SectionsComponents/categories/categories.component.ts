import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css',
})
export class CategoriesComponent {
  Form: FormGroup;
  showbox: boolean = false;
  url: string = '';

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.Form = this.formBuilder.group({
      category: [''],
    });
  }

  showBoxCategory(event) {
    this.Form.patchValue({
      category: event.value,
    });
    console.log(this.Form.get('category').value);
    switch (this.Form.get('category').value) {
      case 'prescolar a segundo':
        this.url = '';
        break;
      case 'tercero a quinto':
        this.url = '';
        break;
      case 'sexto a octavo':
        this.url = '';
        break;
      case 'noveno a undecimo':
        this.url = 'https://deporstar.com/ds/torneo/20350/info';
        break;
    }
    this.showbox = true;
  }
}
