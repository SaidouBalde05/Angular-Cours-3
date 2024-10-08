import { NgModule } from '@angular/core';

import { ComplexFormRoutingModule } from './complex-form-routing.module';
import { ComplexFormComponent } from './components/complex-form/complex-form.component';
import { HighlightDirective } from '../shared/directives/highlight.directive';
import { ShortenPipe } from '../shared/pipe/shorten.pipe';
import { ComplexFormService } from './services/complex-form.service';
import { UsernamePipe } from '../shared/pipe/username.pipe';


@NgModule({
  declarations: [
    // ShortenPipe,
    UsernamePipe,
    // TimeAgoPipe, 
  ],
  imports: [
    ComplexFormRoutingModule,
    ComplexFormComponent,
  ],
  providers:[
    ComplexFormService
  ]
  // exports:[
  //   MaterialModule,
  //   ShortenPipe,
  //   UsernamePipe,
  //   TimeAgoPipe,
  //   HighlightDirective,
  //   ReactiveFormsModule
  // ]
})
export class ComplexFormModule { }
