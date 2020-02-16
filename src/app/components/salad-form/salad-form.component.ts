import { Component, OnInit, NgModule } from '@angular/core';


@Component({
  selector: 'app-salad-form',
  templateUrl: './salad-form.component.html',
  styleUrls: ['./salad-form.component.scss']
})

export class SaladFormComponent implements OnInit {

  saladObj : any = {};
  toppings : Array<any> = [];
  
  ngOnInit() {
  this.toppings.push('Chicken',	'Salmon',	'Mixed Greens',	'Spinach',	'Arrugula',	'Tomato',	'Cucumber',
  	'Peppers',	'Mushroom',	'Corn',	'Carrot',	'Broccoli',	'Onion',	'Olive',	'Feta',	'Cheddar');
  }
}
