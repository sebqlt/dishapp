import { Component, OnInit } from '@angular/core';
import{Dishes} from 'src/assets/data/dishes.interface';
import dishes from 'src/assets/data/dishes';
import { AlertController } from '@ionic/angular';
import { DishesService } from '../service/dishes.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{
  dishCollection:{category:string, dishes:Dishes[]}[];
  constructor(
    private alertController:AlertController,
    private dishService:DishesService
  ){}
  ngOnInit(){
    this.dishCollection=dishes;
  }
  async onAddToFavorite(SelectedDish:Dishes){
    const alert= await this.alertController.create({
      header: 'Add Dish',
      subHeader:'Are you sure?',
      message:'Are you sure you want to add the dish?',
      buttons:[
        {text:'Yes',
        handler:()=>{
          this.dishService.addDishToFavorite(SelectedDish);
        },
      },
        {text:'No',
        role:'cancel',
        handler:()=>{console.log('Cancelled');},
      }
      ]
    });
    await alert.present();
  }
  isFavorite(dish:Dishes){
    return this.dishService.isDishFavorite(dish);
  }
  onRemoveFavorite(dish:Dishes){
    this.dishService.removeDishFromFavorite(dish);
  }
}
