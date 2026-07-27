import { Component } from '@angular/core';

@Component({
  selector: 'app-frantoio',
  standalone: true,
  imports: [],
  templateUrl: './frantoio.html',
  styleUrl: './frantoio.css'
})
export class Frantoio {

  // Dati dinamici del processo di lavorazione
  processi = [
    {
      titolo: '1. Raccolta',
      descrizione: 'Raccolta manuale e meccanica nei nostri uliveti di Strongoli al momento di perfetta invaiatura.'
    },
    {
      titolo: '2. Lavaggio e Defogliazione',
      descrizione: 'Le olive vengono separate da foglie e rami, per poi essere lavate accuratamente con acqua pulita.'
    },
    {
      titolo: '3. Molitura a Freddo',
      descrizione: 'Estrazione rigorosamente a freddo per preservare polifenoli, vitamine e il gusto autentico.'
    },
    {
      titolo: '4. Stoccaggio',
      descrizione: 'Il nostro olio riposa in cisterne di acciaio inox, protetto da luce e ossigeno.'
    }
  ];

  // Placeholder per le foto della galleria
  galleria = [
    '/fotoFrantoio.jpeg',
    '/fotoFrantoio.jpeg',
    '/fotoFrantoio.jpeg',
    '/fotoFrantoio.jpeg',
    '/fotoFrantoio.jpeg',
    '/fotoFrantoio.jpeg',
    '/fotoFrantoio.jpeg'
  ];
  currentIndex = 0;

  nextFoto() {
    this.currentIndex = (this.currentIndex + 1) % this.galleria.length;
  }

  prevFoto() {
    this.currentIndex = (this.currentIndex - 1 + this.galleria.length) % this.galleria.length;
  }

  goToFoto(index: number) {
    this.currentIndex = index;
  }

}
