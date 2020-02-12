import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PlayMultiPage } from './play-multi.page';

describe('PlayMultiPage', () => {
  let component: PlayMultiPage;
  let fixture: ComponentFixture<PlayMultiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayMultiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PlayMultiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
