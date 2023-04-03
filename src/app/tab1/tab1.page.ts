import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule,],
})
export class Tab1Page {
  constructor(public alertController: AlertController) { }
  async exibirAlertaFavorito() {
    const alert = await this.alertController.create({
      header: 'Alerta!',
      message: 'Deseja Realmente Favoritar o filme ?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'Cancel',
          handler: (blah) => {
            console.log('Confirm Cancel : blah');

          }
        }, {
          text: 'SIM',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });
    await alert.present();
  }






}
