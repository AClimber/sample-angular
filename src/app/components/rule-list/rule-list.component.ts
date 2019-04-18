import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {IRule, IType} from './rule-list.interfaces';

@Component({
  selector: 'app-rule-list',
  templateUrl: './rule-list.component.html',
  styleUrls: ['./rule-list.component.less']
})
export class RuleListComponent implements OnInit {
  private rules: IRule[];
  private types: IType[];
  @Output() updateRules: EventEmitter<IRule[]> = new EventEmitter<IRule[]>();

  ngOnInit(): void {
    this.rules = [];
    this.types = [{
      id: 1, name: 'Contains'
    }, {
      id: 2, name: 'Extends'
    }];
  }

  private addNewRule() {
    const defaultRule: IRule = {
      id: Date.now(),
      type: this.types[0],
      url: ''
    };

    this.rules.push(defaultRule);
    this.notifySubscribers();
  }

  private changeRule(rule: IRule): void {
    this.rules = this.rules.map((value: IRule) => {
      if (value.id === rule.id) {
        return rule;
      }
      return value;
    });
    this.notifySubscribers();
  }

  private removeRule(rule: IRule): void {
    this.rules = [...this.rules.filter((value: IRule) => {
      return value.id !== rule.id;
    })];
    this.notifySubscribers();
  }

  private notifySubscribers(): void {
    this.updateRules.emit(this.rules);
  }
}
