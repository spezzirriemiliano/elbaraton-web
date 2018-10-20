import { trigger, transition, animate, style } from '@angular/animations';

export const menuAnimation = trigger(
    'menuAnimation', [
      transition(':enter', [
        style({left: -320}),
        animate('200ms', style({left: 0}))
      ]),
      transition(':leave', [
        style({left: 0}),
        animate('200ms', style({left: -320}))
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



  export const menuItemAnimation = trigger(
    'menuItemAnimation', [
      transition(':enter', [
        style({opacity: 0}),
        animate('200ms', style({opacity: 1}))
      ]),
      transition(':leave', [
        style({opacity: 1}),
        animate('200ms', style({opacity: 0}))
      ])
    ]
  );