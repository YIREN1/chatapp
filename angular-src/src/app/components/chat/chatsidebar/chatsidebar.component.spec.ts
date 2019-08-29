import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatsidebarComponent } from './chatsidebar.component';

describe('ChatsidebarComponent', () => {
  let component: ChatsidebarComponent;
  let fixture: ComponentFixture<ChatsidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatsidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatsidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
