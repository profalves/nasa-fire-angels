<template>
  <q-page>
    <q-page-sticky position="top-right" :offset="[2, 18]" style="z-index: 6">
      <img src="@/assets/icones/ico-gps.png" @click="mylocal" width="40px" />
    </q-page-sticky>

    <q-page-sticky position="top-left" :offset="[50, 10]" style="z-index: 5">
      <q-search v-model="search" />
    </q-page-sticky>

    <q-page-sticky position="bottom"
                   :offset="[18, 18]"
                   style="z-index: 5">
      <img src="@/assets/icones/ico-alert.png" width="80px" @click="sendAlert()" />
    </q-page-sticky>

    <vl-map :load-tiles-while-animating="true" :load-tiles-while-interacting="true"
             data-projection="EPSG:4326" style="height: 100vh;">
      <vl-view :zoom.sync="zoom" :center.sync="center" :rotation.sync="rotation"></vl-view>

      <vl-geoloc @update:position="geolocPosition = $event">
        <template slot-scope="geoloc">
          <vl-feature v-if="geoloc.position" id="position-feature">
            <vl-geom-point :coordinates="geoloc.position"></vl-geom-point>
            <vl-style-box>
              <vl-style-icon src="_media/marker.png" :scale="0.4" :anchor="[0.5, 1]"></vl-style-icon>
            </vl-style-box>
          </vl-feature>
        </template>
      </vl-geoloc>

      <vl-layer-tile id="osm">
        <vl-source-osm></vl-source-osm>
      </vl-layer-tile>

      <vl-overlay id="user" :position="overlayCoordinate">
        <template slot-scope="scope">
          <div class="overlay-content">
            <font-awesome-icon icon="user" style="color: green;" />
          </div>
        </template>
      </vl-overlay>

      <div v-for="(coord, index) in fires" :key="index">
        <vl-overlay :position="coord.coords">
          <template slot-scope="scope">
            <div class="overlay-content" @click="getLocal(coord)">
              <q-tooltip>
                longitude: {{coord.coords[0]}}<br />
                latitude: {{coord.coords[1]}}<br />
                FRP: {{coord.frp}}
              </q-tooltip>
              <font-awesome-icon icon="fire" style="color: orange;" />
            </div>
          </template>
        </vl-overlay>
      </div>

    </vl-map>

    <q-modal class="text-center" v-model="opened" minimized>
      <h4>Are you safe?</h4>
      <div class="row">
        <div class="col">
          <img src="@/assets/icones/ico-ok.png"
               width="80px"
               @click="$router.push('vegetation')" />
        </div>
        <div class="col">
          <img src="@/assets/icones/ico-bad.png"
               width="80px"
               @click=""  />
        </div>
      </div>
    </q-modal>

    <!-- <div style="padding: 20px">

      Incendios: {{fires.length}}<br/>

      coordenadas: {{local}}

    </div> -->
  </q-page>
</template>

<script>
import incendios from '@/data/fire.json'
export default {
  name: 'PageHome',
  data () {
    return {
      // incendios,
      fires: incendios.map(row => ({
        coords: [row.longitude, row.latitude],
        color: 'orange',
        frp: row.frp
      })),
      zoom: 17,
      center: [ -38.5127594, -12.9696622 ],
      rotation: 0,
      geolocPosition: '',
      overlayCoordinate: [-38.51180, -12.9685924],
      local: '',
      search: '',
      opened: false
    }
  },
  methods:{
    getLocal(coord){
      this.local = coord.coords
    },
    mylocal(){
      this.center = this.geolocPosition
      this.zoom = 15
    },
    sendAlert(){
      console.log(this.local);
      this.opened = true
    }
  }
}
</script>

<style>
</style>
