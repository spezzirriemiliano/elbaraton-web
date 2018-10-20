import { trigger, transition, animate, style } from '@angular/animations';

export const menuAnimation = trigger(
    'menuAnimation', [
      transition(':enter', [
        style({right: -412}),
        animate('200ms', style({right: 0}))
      ]),
      transition(':leave', [
        style({right: 0}),
        animate('200ms', style({right: -412}))
      ])
    ]
  );

  export const layoutAnimation = trigger(
    'layoutAnimation', [
      transition(':enter', [
        style({opacity: 0}),
        animate('200ms', style({opacity: 0.7}))
      ]),
      transition(':leave', [
        style({opacity: 0.7}),
        animate('200ms', style({opacity: 0}))
      ])
    ]
  );
