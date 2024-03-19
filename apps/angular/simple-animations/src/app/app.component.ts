import {
  animate,
  keyframes,
  query,
  stagger,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { AfterViewInit, Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [],
  selector: 'app-root',
  animations: [
    trigger('animateLeftPara', [
      state(
        'start',
        style({
          opacity: 0,
          transform: 'translateX(-500px)',
        }),
      ),
      state(
        'stop',
        style({
          opacity: 1,
          transform: 'translateX(0)',
        }),
      ),
      transition('start => stop', [animate('0.3s')]),
    ]),
    trigger('staggerAnimation', [
      transition('* => *', [
        query(':enter', style({ opacity: 0 }), { optional: true }),
        query(
          ':enter',
          stagger('100ms', [
            animate(
              '300ms 200ms',
              keyframes([
                style({
                  opacity: 0,
                  transform: 'translateX(-20px)',
                  offset: 0,
                }),
                style({
                  opacity: 0.5,
                  transform: 'translateX(10px)',
                  offset: 0.3,
                }),
                style({ opacity: 1, transform: 'translateX(0)', offset: 1 }),
              ]),
            ),
          ]),
        ),
      ]),
    ]),
  ],
  styles: `
    section {
      @apply flex flex-1 flex-col gap-5;
    }

    .list-item {
      @apply flex flex-row border-b px-5 pb-2;

      span {
        @apply flex-1;
      }
    }
  `,
  template: `
    <div class="mx-20 my-40 flex gap-5">
      <section [@animateLeftPara]="startAnimation ? 'start' : 'stop'">
        <div>
          <h3>2008</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            mollitia sequi accusantium, distinctio similique laudantium eveniet
            quidem sit placeat possimus tempore dolorum inventore corporis atque
            quae ad, nobis explicabo delectus.
          </p>
        </div>

        <div>
          <h3>2010</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            mollitia sequi accusantium, distinctio similique laudantium eveniet
            quidem sit placeat possimus tempore dolorum inventore corporis atque
            quae ad, nobis explicabo delectus.
          </p>
        </div>

        <div>
          <h4>2012</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            mollitia sequi accusantium, distinctio similique laudantium eveniet
            quidem sit placeat possimus tempore dolorum inventore corporis atque
            quae ad, nobis explicabo delectus.
          </p>
        </div>
      </section>

      <section @staggerAnimation>
        @for (item of list; track item.key) {
          <div class="list-item">
            <span>{{ item.key }}:</span>
            <span>{{ item.value }}</span>
          </div>
        }
      </section>
    </div>
  `,
})
export class AppComponent implements AfterViewInit {
  startAnimation = true;

  readonly list: { key: string; value: string }[] = [
    { key: 'Name', value: 'Samuel' },
    { key: 'Age', value: '28' },
    { key: 'Birthdate', value: 'City' },
    { key: 'Language', value: 'English' },
    { key: 'Like Pizza', value: 'Hell yeah' },
  ];

  constructor() {}
  ngAfterViewInit(): void {
    this.startAnimation = false;
  }
}
