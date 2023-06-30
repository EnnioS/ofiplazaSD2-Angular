import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { GoogleMapsService } from 'src/app/Services/google-maps.service';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit, AfterViewInit {

  @ViewChild('map', { static: true }) mapElementRef!: ElementRef;
  googleMaps: any;
  map: any;
  center = { lat: 12.109507770134785, lng: -86.2801455027774};
  
  constructor(
    private maps: GoogleMapsService,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {}
  ngAfterViewInit() {
    this.loadMap();
  }

  async loadMap() {
    try {
      let googleMaps: any = await this.maps.loadGoogleMaps();
      this.googleMaps = googleMaps;
      const mapEl = this.mapElementRef.nativeElement;

      const location = new googleMaps.LatLng(this.center.lat, this.center.lng);
      this.map = new googleMaps.Map(mapEl, {
        center: location,
        zoom: 15,
        scaleControl: false,
        streetViewControl: false,
        zoomControl: false,
        overviewMapControl: false,
        mapTypeControl: false,
        mapTypeControlOptions: {
          mapTypeIds: [googleMaps.MapTypeId.ROADMAP, 'mapId'],
        },
      });
      const style = [
        {
          featureType: 'all',
          elementType: 'all',
          stylers: [{ saturation: -100 }],
        },
      ];

      var mapType = new googleMaps.StyledMapType(style, { name: 'Grayscale' });
      this.map.mapTypes.set('mapId', mapType);
      this.map.setMapTypeId('mapId');
      this.renderer.addClass(mapEl, 'visible');
      this.addMarker(location);
    } catch (e) {
      console.log(e);
      
    }
    
  }

  addMarker(location: any) {
    let googleMaps: any = this.googleMaps;
    const icon = {
      url: 'assets/img/map_marker.png',
      scaledSize: new googleMaps.Size(30, 50),
    };
    const marker = new googleMaps.Marker({
      position: location,
      map: this.map,
      icon: icon,
      draggable: true,
      animation: googleMaps.Animation.DROP,
    });
  }

}
