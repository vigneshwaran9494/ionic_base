import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { Observable } from "rxjs/Observable";
import { HttpClient } from "@angular/common/http";
import { LoadingController } from "ionic-angular";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  resp: Observable<any>;
  public resoponsedata: any;

  constructor(
    public navCtrl: NavController,
    public httpClient: HttpClient,
    public loadingController: LoadingController)
     {
      let loading = this.loadingController.create({
        content: "Logging..."
      });
      loading.present();
    this.resp = this.httpClient.get("https://api.ipify.org?format=json");
      this.resp.subscribe(data => {
        console.log("my data: ", data);
        this.resoponsedata = JSON.stringify(data);
        loading.dismissAll();
      });
    }
}
