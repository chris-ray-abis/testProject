import { Component, OnInit, Input } from '@angular/core';
import {CarPartsComponent} from '../car-parts/car-parts.component';

@Component({
  selector: 'car-part',
  templateUrl: './car-part.component.html',
  styleUrls: ['./car-part.component.css']
})
export class CarPartComponent implements OnInit {

  @Input() carPart;
  constructor(private carPartsComponent: CarPartsComponent) { }

  ngOnInit() {
  }

  upQuantity(){
  	return this.carPartsComponent.upQuantity(this.carPart); //I know that this is not the best way to do this, but this is to demonstrate importing parents
  }

  downQuantity(){
  	return this.carPartsComponent.downQuantity(this.carPart);
  }
}
