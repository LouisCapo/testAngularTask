import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableRoutingModule } from './table-routing.module';
import { TableComponent } from './components/table/table.component';
import { TableModule as PrimeTableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {TooltipModule} from 'primeng/tooltip';
import { RowInputComponent } from '../table/components/row-input/row-input.component'




@NgModule({
  declarations: [TableComponent, RowInputComponent],
  imports: [
    CommonModule,
    TableRoutingModule,
    PrimeTableModule,
    InputTextModule,
    FormsModule,
    ButtonModule,
    ReactiveFormsModule,
    TooltipModule
  ]
})
export class TableModule { }
