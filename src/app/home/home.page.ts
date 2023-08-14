import { Component } from '@angular/core';
import {  Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  user1: string = "";
  nombreUsuario: string = "Ernesto";
  clave = "1234";
  lista: any = [
    {
      nombre: "Eder",
      apellido: "Ortiz",
      edad: 25
    }
  ]

  constructor(private router: Router, private alertController: AlertController, private toastController: ToastController) { }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Bienvenido',
      duration: 1500,
      position: 'bottom',
    });

    await toast.present();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Mensaje importantisimo',
      message: '¡Esto es una alerta!',
      buttons: ['Continuar'],
    });

    await alert.present();
  }

  sumar() {
    this.clave;
    console.log("Mostrar mensajes por consola ")
  }

  inicioSesion(){
    this.presentToast();

    this.router.navigate(['/pagina1']);

  }

}


