import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RuleListComponent } from './rule-list.component';
import { RuleItemComponent } from './rule-item/rule-item.component';

@NgModule({
  declarations: [
    RuleListComponent,
    RuleItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [],
  exports: [
    RuleListComponent
  ]
})
export class RuleListModule { }
