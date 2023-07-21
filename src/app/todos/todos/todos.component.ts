import { Component } from '@angular/core';
import { HeadersComponent } from '../headers/headers.component';
import { FooterComponent } from '../footer/footer.component';
import { MainComponent } from '../main/main.component';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  standalone: true,
  imports: [HeadersComponent, FooterComponent, MainComponent],
})
export class TodosComponent {}