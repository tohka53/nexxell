import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatusComponent } from './catus.component';

describe('CatusComponent', () => {
  let component: CatusComponent;
  let fixture: ComponentFixture<CatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CatusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
