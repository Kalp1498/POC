import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoSpaceValidatorDirective } from './no-space-validator.directive';

@NgModule({
  declarations: [
    NoSpaceValidatorDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NoSpaceValidatorDirective
  ]
})
export class DirectiveModule { }
