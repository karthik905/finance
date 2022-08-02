import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.css']
})
export class FinanceComponent implements OnInit {

  amount:number=1
  period:number=5

  result:number=0


  constructor() { }

  ngOnInit(): void {
  }

  Showresult(){
    this.result=this.amount+this.amount/5*this.period;
  }

}
