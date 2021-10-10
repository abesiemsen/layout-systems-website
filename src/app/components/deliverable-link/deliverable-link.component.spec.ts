import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliverableLinkComponent } from './deliverable-link.component';

describe('DeliverableLinkComponent', () => {
  let component: DeliverableLinkComponent;
  let fixture: ComponentFixture<DeliverableLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliverableLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliverableLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
