import { Component } from '@angular/core';
import { FooterComponent } from './components/footer/footer.component';
import { HeadersComponent } from './components/headers/headers.component';
import { MainComponent } from './components/main/main.component';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  standalone: true,
  imports: [HeadersComponent, FooterComponent, MainComponent],
})
export class TodosComponent {}