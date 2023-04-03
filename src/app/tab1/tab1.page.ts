import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule,],
})
export class Tab1Page {
  constructor(public alertController: AlertController, private  toastController: ToastController) { }
  async exibirAlertaFavorito() {
    const alert = await this.alertController.create({
      header: 'Alerta!',
      message: 'Deseja Realmente Favoritar o filme ?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'Cancel',
          handler: (blah) => {
            this.cancelarToast();

          }
        }, {
          text: 'SIM',
          handler: () => {
            this.apresentarToast();

          }
        }
      ]
    });
    await alert.present();
  }


async apresentarToast() {
  const toast = await this.toastController.create({
    message: ' Filme adcionado aos favoritos!',
    duration: 2000,
    color:'success',

  });

  toast.present();
}


async cancelarToast() {
  const toast = await this.toastController.create({
    message: ' cancelado',
    duration: 2000,
    color:'danger',

  });

  toast.present();
}
}







