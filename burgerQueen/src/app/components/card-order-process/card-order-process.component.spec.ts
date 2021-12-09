import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { firebaseFunctionsService } from 'src/app/services/firebase-functions.service';
import { getDataFirestore } from 'src/app/services/get-data-Firestore';

import { CardOrderProcessComponent } from './card-order-process.component';

xdescribe('CardOrderProcessComponent', () => {
  let component: CardOrderProcessComponent;
  let fixture: ComponentFixture<CardOrderProcessComponent>;
  const getDataFirebaseSpy = { sendOrders$: jasmine.createSpy('sendOrders$') }
  const firebaseFuntionsServiceSpy ={ updateState: jasmine.createSpy('updateState')}

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardOrderProcessComponent],
      providers: [
        {
          provide: getDataFirestore, useValue: getDataFirebaseSpy

        },
       {
          provide: firebaseFunctionsService, useValue: firebaseFuntionsServiceSpy
        }
      ],
      schemas:[
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
      ]


    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardOrderProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

 xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
