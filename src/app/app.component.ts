import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';


  Calculate(num1 ,num2,num3,num4){

   num1=parseInt(num1);
   num2=parseInt(num2);
   num3=parseInt(num3);
  num4=parseInt(num4);

  var a :number =num1+num2+num3+num4 ;
  var b : number =2000 ;

  var c :number = b- a;


    
    
    alert("Your change is :" + (b-a));

    console.log(num1) ;


  }
}
