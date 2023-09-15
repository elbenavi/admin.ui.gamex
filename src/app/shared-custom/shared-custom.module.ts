import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetComponent } from './widget/widget.component';

import {
  CardModule,
  GridModule,
  WidgetModule
} from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';

@NgModule({
  declarations: [
    WidgetComponent
  ],
  imports: [
    CommonModule,

    IconModule,
    
    GridModule,
    WidgetModule,
    CardModule,
  ],
  exports: [
    WidgetComponent
  ]
})
export class SharedCustomModule { }
