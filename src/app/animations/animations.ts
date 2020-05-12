import { trigger, state, transition, animate, style } from '@angular/animations';

export const opacityAnimation = trigger('animateDiv', 
    [
        state('loading', style({
            opacity: 0
        })),
        state('laoded', style({
            opacity: 1
        })),
        transition('loading => loaded', [
            animate('1s')
        ]),
    ]
)