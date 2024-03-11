import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Football_Tournament_Maria_Reina';
  backgroundColor: string = 'rgb(44, 46, 132, 0.7)';
  fontColor: string = 'white';

  @ViewChild('audioPlayer') audioPlayerRef: ElementRef;

  playAudio() {
    const audioPlayer: HTMLAudioElement = this.audioPlayerRef.nativeElement;
    audioPlayer.play();
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.scrollY > 40) {
      this.backgroundColor = 'rgb(0, 0, 0, 0.7)';
      this.fontColor = 'white';
    } else {
      this.backgroundColor = 'rgb(44, 46, 132, 0.7)';
      this.fontColor = 'white';
    }
  }
}
