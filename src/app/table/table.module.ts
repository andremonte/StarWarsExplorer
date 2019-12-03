import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableRoutingModule } from './table-routing.module';
import { TableComponent } from './table.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [TableComponent],
  imports: [
    CommonModule,
    TableRoutingModule,
    MatTableModule,
    MatSortModule,
    MatInputModule,
    MatPaginatorModule,
    
  ],
  exports:[TableComponent]
})
export class TableModule { }
