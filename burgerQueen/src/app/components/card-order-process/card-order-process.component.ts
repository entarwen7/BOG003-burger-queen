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


  constructor(private sendOrderFirebase: getDataFirestore, private firebaseService: firebaseFunctionsService, private sendCardService: sendDataService) {
    this.subcriptionAtiveState = this.sendOrderFirebase.sendOrders$.subscribe(res => {
      return res;
    });
    //console.log("Trae la respuesta",this.subcriptionAtiveState);

  }

  ngOnInit(): void {
    this.timer();
    this.stateArray();
   }

  timer() {
    let creationHour = new Date(this.itemOrder.creationTime).getHours() * 60 * 60;
    let creationMinute = new Date(this.itemOrder.creationTime).getMinutes() * 60;
    let creationSeconds = new Date(this.itemOrder.creationTime).getSeconds();
    let sumHours = creationHour + creationMinute + creationSeconds;

    let dateNowHour = new Date(Date.now()).getHours() * 60 * 60;
    let dateNowMinute = new Date(Date.now()).getMinutes() * 60;
    let dateNowSeconds = new Date(Date.now()).getSeconds();
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

    this.itemOrder.creationTime;

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

  stateArray(){
    if(this.itemOrder.status == 'preparacion'){
      this.countState = 2;
    }else if (this.itemOrder.status == 'entregaChef'){
      this.countState = 3;
    }else if(this.itemOrder.status == 'entregaCliente'){
      this.countState = 4;
    }
  }

  stateValueSend(state: string) {
    this.valueState = state;
    this.stateUpdate.emit([this.valueState]);
  }

  // getStateDb() {
  //   //return this.subscriptionStateOrderDb =
  //   this.firebaseService.getState().subscribe((res) => {
  //     console.log("subscriptionStateOrderDb", res.status);
  //     //newstatus = res.status;
  //     this.stateOrderDbCard = res.status;
  //     this.sendCardService.receiveState(this.stateOrderDbCard);
  //     return this.stateOrderDbCard; //res.status;
  //   })
  //   console.log("---------", this.stateOrderDbCard);

  // }
}
