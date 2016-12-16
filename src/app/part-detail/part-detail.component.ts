import { Component, OnInit } from '@angular/core';
import {NavbarComponent} from '../navbar/navbar.component';
import {FooterComponent} from '../footer/footer.component';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'part-detail',
  templateUrl: './part-detail.component.html',
  styleUrls: ['./part-detail.component.css']
})
export class PartDetailComponent implements OnInit {

  private partId;
  private partImg;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  	this.route.params.forEach(
  		(params: Params) => (this.partId = params['id'], this.partImg = params['imgLink'])
	);
  }
}
