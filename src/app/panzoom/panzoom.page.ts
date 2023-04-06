import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import Panzoom from '@panzoom/panzoom';

@Component({
  selector: 'app-panzoom',
  templateUrl: './panzoom.page.html',
  styleUrls: ['./panzoom.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PanzoomPage implements OnInit {

  private panzoom: any;
  private isPanning: boolean;
  private panStartX: number;
  private panStartY: number;

  constructor() { }

  ngOnInit() {

  }

  ionViewDidEnter() {
    const elem = document.getElementById('panzoom-element');
    // @ts-ignore
    this.panzoom = Panzoom(elem, {
      minScale: 1,
      maxScale: 10,
      contain: 'outside',
    });


    elem!.addEventListener('wheel', (event) => {
      this.panzoom.zoomWithWheel(event)
    })

    // prevent click event when panning:
    elem!.addEventListener('panzoomstart', (e: any) => {
      this.isPanning = false;
      this.panStartX = e.detail.x; // source: GPT-4
      this.panStartY = e.detail.y;
    });

    elem!.addEventListener('panzoomchange', (e: any) => {
      // this.updatePinScale();
      this.isPanning = true;
    });

    elem!.addEventListener('panzoomend', (e: any) => {
      const panDistance = Math.hypot(this.panStartX - e.clientX, this.panStartY - e.clientY);
      if (panDistance < 5) {
        this.isPanning = false;
      }
    });
  }

  private updatePinScale() {
    console.log('AAA');
    // Calculate the inverse scale based on the current zoom scale
    const inverseScale = 1 / this.panzoom.getScale();

    const pin = document.getElementById('pin')!;
    const circle = document.getElementById('Großglockner')!;

    // Get the circle center coordinates and pin dimensions
    const circleCenterX = parseFloat(circle.getAttribute('cx')!);
    const circleCenterY = parseFloat(circle.getAttribute('cy')!);
    const pinWidth = parseFloat(pin.getAttribute('width')!);
    const pinHeight = parseFloat(pin.getAttribute('height')!);

    // Calculate the adjusted pin position based on the circle's position and pin dimensions
    const adjustedPinX = circleCenterX - pinWidth / 2 * inverseScale;
    const adjustedPinY = circleCenterY - pinHeight * inverseScale;

    // Set the pin's scale transform and adjusted position
    pin.setAttribute('transform', `translate(${adjustedPinX}, ${adjustedPinY}) scale(${inverseScale})`);
  }

}
