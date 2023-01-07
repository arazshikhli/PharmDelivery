import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent implements OnInit{
  zoom = 12;
  center: google.maps.LatLngLiteral;
  options: google.maps.MapOptions = {
    mapTypeId: 'hybrid',
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    maxZoom: 22,
    minZoom: 8,
  };

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition((position)=>{
      this.center={
        lat: 40.598732,
        lng:49.672335
      }
    })


  }
  zoomIn() {
    if (this.zoom < this.options.maxZoom!) this.zoom++;
  }
  zoomOut() {
    if (this.zoom > this.options.minZoom!) this.zoom--;
  }
}
