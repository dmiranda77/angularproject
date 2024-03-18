import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipelistComponent } from './pages/pipelist/pipelist.component';
import { PipedemoRoutingModule } from './pipedemo-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [PipelistComponent],
  imports: 
  [ 
    CommonModule, 
    PipedemoRoutingModule,
    SharedModule
    ],
})
export class PipedemoModule {}