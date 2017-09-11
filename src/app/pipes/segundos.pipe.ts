import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'segundos'
})
export class SegundosPipe implements PipeTransform {

  transform(value: number, args?: any): any {

    let minutos = 0;
    let horas = 0;
    let segundos = value;

    if(segundos>=3600){
      horas = Math.trunc(segundos/3600)
      segundos = segundos % (horas * 3600)
    }
    else {
      horas = 0;
    }

    if (segundos >= 60){
      minutos = Math.trunc(segundos/60)
      segundos = segundos % (minutos * 60)
    }

    else {
      minutos = 0
    }
    if (horas>0){
      if (minutos>9){
        if(segundos>9){
          return horas+":"+minutos + ":" + segundos
        }
        else{
          return horas+":"+minutos + ":" + "0"+segundos
        }
      }else{
        if(segundos>9){
          return horas+":"+"0"+minutos + ":" + segundos
        }
        else{
          return horas+":"+"0"+minutos + ":" + "0"+segundos
        }

    }
  }
    else{
      if (minutos>9){
        if(segundos>9){
          return minutos + ":" + segundos
        }
        else{
          return minutos + ":" + "0"+segundos
        }
      }else{
        if(segundos>9){
          return "0"+minutos + ":" + segundos
        }
        else{
          return "0"+minutos + ":" + "0"+segundos
        }
      }

    }
  }

}
