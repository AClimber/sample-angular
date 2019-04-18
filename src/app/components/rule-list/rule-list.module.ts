import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { RuleListComponent } from './rule-list.component';
import { RuleItemComponent } from './rule-item/rule-item.component';

@NgModule({
  declarations: [
    RuleListComponent,
    RuleItemComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [],
  exports: [
    RuleListComponent
  ]
})
export class RuleListModule { }
