import { state } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { sendDataService } from 'src/app/services/carry-cards';
import { firebaseFunctionsService } from 'src/app/services/firebase-functions.service';
import { getDataFirestore } from 'src/app/services/get-data-Firestore';

@Component({
  selector: 'app-card-order-process',
  templateUrl: './card-order-process.component.html',
  styleUrls: ['./card-order-process.component.css']
})

export class CardOrderProcessComponent implements OnInit {
  @Input() itemOrder: any = [];
  @Input() isState: boolean = true;
  @Input() view: boolean = true;
  @Input() currentStateOrder: string = ''; // Se envia a la etiqueta de barra del estado
  @Input() viewHistory!: boolean;

  @Output() stateUpdate = new EventEmitter<any>();

  subcriptionAtiveState!: Subscription;
  subscriptionStateOrderDb!: Subscription;
  stateOrderDbCard: any;
  isActiveState!: boolean;
  valueState: string = "";
  stopWatch: any;
  countSeconds: number = 0;
  countMinutes: number = 0;
  countHours: number = 0;
  newSecond: any = '00';
  newMinute: any = '00';
  newHour: any = '00';
  currentState: string = '';
  countState: number = 0;
  subtractTime!: Date;
  isStatusValidation: boolean = false;
  //arrayStatus: string[] = ['preparacion', 'entregaChef', 'entregaCliente'];

  constructor(private sendOrderFirebase: getDataFirestore, private firebaseService: firebaseFunctionsService) {

    //console.log("Trae la respuesta",this.subcriptionAtiveState);
  }

  ngOnInit(): void {
    //this.timer();
    this.switchTimer();
    //this.stateArray();
    this.subcriptionAtiveState = this.sendOrderFirebase.sendOrders$.subscribe(res => {
      return res;
    });
  }

  switchTimer() {
    if (this.itemOrder.status.includes('entregaCliente')) {
      this.subtractTime = this.itemOrder.endDate;
      this.timer(this.subtractTime);
      this.stopTimer();
    } else {
      this.subtractTime = new Date(Date.now());
      this.timer(this.subtractTime);
    }
    console.log("Prueba de cronometro",this);

  }

  stopTimer() {
    clearInterval(this.stopWatch);
  }

  timer(requiredTime: Date) {

    let creationHour = new Date(this.itemOrder.creationTime).getHours() * 60 * 60;
    let creationMinute = new Date(this.itemOrder.creationTime).getMinutes() * 60;
    let creationSeconds = new Date(this.itemOrder.creationTime).getSeconds();
    let sumHours = creationHour + creationMinute + creationSeconds;

    let dateNowHour = new Date(requiredTime).getHours() * 60 * 60;
    let dateNowMinute = new Date(requiredTime).getMinutes() * 60;
    let dateNowSeconds = new Date(requiredTime).getSeconds();
    let sumHoursNow = dateNowHour + dateNowMinute + dateNowSeconds;

    let creationInterval = sumHoursNow - sumHours;

    let minToSeconds = 60;
    // se calculan las horas que hay en seconds
    let calculateHours = (Math.floor((creationInterval / minToSeconds) / minToSeconds));
    // se calculan los minutos que hay en seconds
    let calculateMinutes = Math.floor((creationInterval / minToSeconds) % minToSeconds);
    // se calculan los segundos que hay en seconds
    let calculateSeconds = Math.floor((creationInterval % minToSeconds));
    // se realizan los condicionales para añadir 0 en caso de que la respuesta solo sea de un dígito

    this.countSeconds = calculateSeconds; //numero
    this.countMinutes = calculateMinutes;
    this.countHours = calculateHours;

    this.stopWatch = setInterval(() => {
      if (this.countSeconds == 59) {
        this.countSeconds = 0;
        this.countMinutes++;

        this.newMinute = this.countMinutes < 10 ? '0' + this.countMinutes : this.countMinutes;

        if (this.countMinutes == 59) {
          this.countMinutes = 0;
          this.countHours++;
          this.newHour = this.countHours < 10 ? '0' + this.countHours : this.countHours;

          if (this.countHours == 99) {
            this.countHours = 0;
          }
        }
      }
      this.countSeconds++;
      this.newSecond = this.countSeconds < 10 ? '0' + this.countSeconds : this.countSeconds;
    }, 1000)
  }

  stateChange(item: any) {
    this.firebaseService.updateState(item);
    //  this.getStateDb();
  }
  // Validación de botones si no hay campo en firestore
  /* stateArray() {

    if (this.itemOrder.status.length > 0) {
      if (this.itemOrder.status[0] == this.arrayStatus[0]) {
        this.arrayStatus
      }
    } else {
      console.log('Aqui esta el estado----', this.itemOrder);
    }

  } */

  stateValueSend(state: string) {
    this.valueState = state;
    this.stateUpdate.emit(this.valueState);
  }

}
