import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteInicialComponent } from './cliente-inicial.component';

describe('ClienteInicialComponent', () => {
  let component: ClienteInicialComponent;
  let fixture: ComponentFixture<ClienteInicialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienteInicialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClienteInicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
