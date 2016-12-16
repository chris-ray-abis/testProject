import { Component, OnInit } from '@angular/core';
import {CarPart} from '../car-part/car-part';
import{AboutSectionComponent} from '../about-section/about-section.component';
import{NavbarComponent} from '../navbar/navbar.component';
import {RacingDataService} from '../racing-data.service';

@Component({
  selector: 'car-parts',
  templateUrl: './car-parts.component.html',
  styleUrls: ['./car-parts.component.css']
})
export class CarPartsComponent implements OnInit {

  constructor(private racingDataService: RacingDataService) { }

  carParts: CarPart[];

  ngOnInit() {
  	this.racingDataService.getCarParts()
  	.subscribe(carParts => this.carParts = carParts);
  }

  totalParts(){
  	let sum = 0;

  	if(Array.isArray(this.carParts)){
		for(let part of this.carParts){
			sum += part.inStock;
		}
  	}

  	return sum;
  }

  upQuantity(carPart){
  	if(carPart.quantity < carPart.inStock){
  		carPart.quantity++;
  	}

  	return;
  }

  downQuantity(carPart){
  	if(carPart.quantity != 0){
  		carPart.quantity--;
  	}
  	return;
  }
}
