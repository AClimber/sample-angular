import { Component } from '@angular/core';
import {IRule} from './components/rule-list/rule-list.interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  private updateRules(rules: IRule[]): void {
    console.log('Inclusion rule list was updated. Current count:', rules.length);
  }

  private updateExclusionRules(rules: IRule[]): void {
    console.log('Exclusion rule list was updated. Current count: ', rules.length);
  }
}
