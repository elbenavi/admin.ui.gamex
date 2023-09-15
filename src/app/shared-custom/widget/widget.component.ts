import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss']
})
export class WidgetComponent {

  @Input() brandData?: any;
  // brandData = [
  //   {
  //     icon: 'cibFacebook',
  //     values: [{ title: 'Money', value: '3000' }, { title: 'Coins', value: '459' }],
  //     capBg: { '--cui-card-cap-bg': '#3b5998' },
  //   },
  // ];
}
