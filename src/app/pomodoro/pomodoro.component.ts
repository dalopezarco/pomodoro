import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import { SimpleTimer } from 'ng2-simple-timer';

@Component({
  selector: 'app-pomodoro',
  templateUrl: './pomodoro.component.html',
  styles: []
})
export class PomodoroComponent implements OnInit {

  timer0Id:string = undefined;
  newtimer:boolean;
  first:boolean = true;

  flagComienzo:boolean = false;

  segundos:number = 1500;
  descanso:number = 300;
  descansoPredefinido:number;
  segundosPredefinido:number;
  descansoBool = false;
  segundosBool = false;

  altura:number = 0;
  alturaCont:number=0;



  constructor(private st: SimpleTimer) { }

  ngOnInit() {
      // console.log("Numero de timers " + this.st.getTimer().length);
      // this.st.newTimer('1sec',1);
      // this.subscribeTimer0();
      // console.log(this.st.getTimer().length)

    }

    subscribeTimer0() {
      this.flagComienzo = true;
      // console.log("Array de timers " + this.st.getTimer())

      if(this.st.getTimer().length==0){

        this.newtimer = this.st.newTimer('pomodoro',1);
        // console.log('timer 0 Subscribed.');
        this.altura = (150 / (this.segundos));

        this.segundosPredefinido = this.segundos;
        this.descansoPredefinido = this.descanso;

        // console.log(this.segundosPredefinido + " estos " +  this.descansoPredefinido)

      }


  if (this.timer0Id && !this.first) {
    // console.log(this.first)
    // Unsubscribe if timer Id is defined
    this.st.unsubscribe(this.timer0Id);
    this.timer0Id = undefined;
    // console.log('timer 0 Unsubscribed.');
  }

  else {
    // console.log(this.first)
    // Subscribe if timer Id is undefined
    this.timer0Id = this.st.subscribe('pomodoro', () => this.timer0callback());
    // console.log('timer 0 Subscribed.');
  }
  // console.log(this.st.getSubscription());
  this.first = false;

}

timer0callback(){





  if(this.segundos == 0){
    this.descansoBool = true;
    this.segundosBool = false;

    this.alturaCont = 0;
    this.descanso-=1;

    if(this.descanso == 0){
      this.segundos = this.segundosPredefinido;
      this.descanso = this.descansoPredefinido;
    }
  }
  else{
    this.segundosBool = true;
    this.descansoBool = false;
    this.segundos-=1;
    this.alturaCont+=this.altura;
  }

}

aumentar(){
  this.segundos+=60;
}

disminuir(){
  if(this.segundos>60){
    this.segundos-=60;
    }
}
aumentarDescanso(){
  this.descanso+=60;
}

disminuirDescanso(){
  if(this.descanso>60){
    this.descanso-=60;

  }
}

stop(){
  this.flagComienzo = false;
  this.st.unsubscribe(this.timer0Id);
  this.timer0Id = undefined;
  this.first = true;
  this.st.delTimer('pomodoro');
  // console.log("Array de timers despues de stop" + this.st.getTimer())


  this.segundos = 1500;
  this.descanso = 300;
  this.alturaCont = 0;

  this.descansoBool = false;

  //Para volver a mostrar los segundos y el descanso que podemos cambiar ( mirar el ngif del html)
  this.descansoPredefinido = undefined;
  this.segundosPredefinido = undefined;

}
}
