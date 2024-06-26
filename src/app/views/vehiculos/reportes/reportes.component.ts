import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { 
  RowComponent, ColComponent, 
    CardComponent,CardHeaderComponent, 
    CardBodyComponent,
    FormControlDirective,
    BorderDirective,
    TableDirective,
    TableColorDirective,
    TableActiveDirective,
    ButtonDirective,
  
  } 
from '@coreui/angular';
import { DocsExampleComponent } from '@docs-components/public-api';

@Component({
  selector: 'app-reportes',
  standalone: true,
  imports: [RowComponent, ColComponent, 
    CardComponent,CardHeaderComponent, 
    CardBodyComponent,NgStyle,DocsExampleComponent,
    FormControlDirective,BorderDirective,

    TableDirective, 
    TableColorDirective, TableActiveDirective, 
    ButtonDirective 
    ],
  templateUrl: './reportes.component.html',
  styleUrl: './reportes.component.scss'
})
export class ReportesComponent {

}
