import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatDmModalComponent } from './chat-dm-modal.component';

describe('ChatDmModalComponent', () => {
  let component: ChatDmModalComponent;
  let fixture: ComponentFixture<ChatDmModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatDmModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatDmModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
