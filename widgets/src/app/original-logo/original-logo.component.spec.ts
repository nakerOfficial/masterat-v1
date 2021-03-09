import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OriginalLogoComponent } from './original-logo.component';

describe('OriginalLogoComponent', () => {
  let component: OriginalLogoComponent;
  let fixture: ComponentFixture<OriginalLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OriginalLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OriginalLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
