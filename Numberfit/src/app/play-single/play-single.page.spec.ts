import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PlaySinglePage } from './play-single.page';

describe('PlaySinglePage', () => {
  let component: PlaySinglePage;
  let fixture: ComponentFixture<PlaySinglePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaySinglePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PlaySinglePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
