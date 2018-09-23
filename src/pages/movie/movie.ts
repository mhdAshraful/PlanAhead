import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {PlanPage} from "../plan/plan";
import {AngularFireDatabase, FirebaseListObservable} from "angularfire2/database";

/**
 * Generated class for the MoviePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-movie',
  templateUrl: 'movie.html',
})

export class MoviePage {

  movie : FirebaseListObservable<any[]>;


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewCtrl: ViewController,
              public fdb: AngularFireDatabase) {

    this.movie = fdb.list('/items/other');

  };


  ionViewDidLoad() {
    console.log('ionViewDidLoad StudyPage');
  }


  dismiss() {
    this.viewCtrl.dismiss();
  }

  createMovie(name, hour){
    this.movie.push({
      name: name,
      hour: hour
    }).then(newOther => {
          this.navCtrl.push(PlanPage);
          }, error => { console.log(error);
    });


  }

}

