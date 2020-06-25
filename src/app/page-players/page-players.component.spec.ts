import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePlayersComponent } from './page-players.component';

describe('PagePlayersComponent', () => {
  let component: PagePlayersComponent;
  let fixture: ComponentFixture<PagePlayersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagePlayersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagePlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
