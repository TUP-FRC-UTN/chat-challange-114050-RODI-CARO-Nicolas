import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatinputComponent } from './chatinput.component';

describe('ChatinputComponent', () => {
  let component: ChatinputComponent;
  let fixture: ComponentFixture<ChatinputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatinputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
