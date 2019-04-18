import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IRule, IType} from '../rule-list.interfaces';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-rule-item',
  templateUrl: './rule-item.component.html',
  styleUrls: ['./rule-item.component.less']
})

export class RuleItemComponent implements OnInit {
  private ruleForm: FormGroup;
  private wasUrlFieldActived = false;

  @Input() rule: IRule;
  @Input() types: IType[];
  @Output() changeRule: EventEmitter<IRule> = new EventEmitter<IRule>();
  @Output() removeRule: EventEmitter<IRule> = new EventEmitter<IRule>();

  ngOnInit(): void {
    this.ruleForm = new FormGroup({
      type: new FormControl(this.rule.type.name),
      url: new FormControl(this.rule.url)
    });
  }

  private remove() {
    this.removeRule.emit(this.rule);
  }

  private changeType() {
    const newType = this.types.find((type: IType) => {
      return this.ruleForm.controls.type.value === type.name;
    });

    this.rule.type = newType;
    this.changeRule.emit(this.rule);
  }

  private changeUrl() {
    this.rule.url = this.ruleForm.controls.url.value;
    this.changeRule.emit(this.rule);
  }

  private keydownUrl() {
    if (!this.wasUrlFieldActived) {
      this.ruleForm.controls.url.validator = Validators.required;
      this.wasUrlFieldActived = !this.wasUrlFieldActived;
    }
  }
}
