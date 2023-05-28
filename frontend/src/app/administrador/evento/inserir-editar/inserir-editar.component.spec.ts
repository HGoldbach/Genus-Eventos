import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InserirEditarComponent } from './inserir-editar.component';

describe('InserirEditarComponent', () => {
  let component: InserirEditarComponent;
  let fixture: ComponentFixture<InserirEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InserirEditarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InserirEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
