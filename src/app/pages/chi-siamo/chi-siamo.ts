import { Component } from '@angular/core';

@Component({
  selector: 'app-chi-siamo',
  standalone: true,
  imports: [],
  templateUrl: './chi-siamo.html',
  styleUrl: './chi-siamo.css'
})
export class ChiSiamo {
  titolo = "La Nostra Storia";
  sottotitolo = "Da generazioni coltiviamo la terra di Strongoli con passione e rispetto.";

  storia = [
    "L'Azienda Agricola Pelaggi nasce dal profondo legame con il territorio calabrese. Da decenni ci dedichiamo alla cura dei nostri uliveti, tramandando di padre in figlio le tecniche di potatura e raccolta.",
    "Non siamo solo agricoltori, ma anche artigiani dell'olio. Avere un frantoio di proprietà ci permette di controllare ogni singola goccia che finisce in bottiglia, garantendo un prodotto che è l'essenza pura della nostra terra."
  ];
}
