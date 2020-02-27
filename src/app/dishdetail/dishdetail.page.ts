import { Component, OnInit } from '@angular/core';
import { Dishes } from 'src/assets/data/dishes.interface';
import { ActivatedRoute } from '@angular/router';
import { DishesService } from '../service/dishes.service';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.page.html',
  styleUrls: ['./dishdetail.page.scss'],
})
export class DishdetailPage implements OnInit {
  dish: Dishes;
  id: string;
  constructor(private route: ActivatedRoute, private dishesService: DishesService) { }

  ngOnInit() {
    this.id=this.route.snapshot.paramMap.get('dishId');
    this.dish=this.dishesService.getDish(this.id);
  }

}
