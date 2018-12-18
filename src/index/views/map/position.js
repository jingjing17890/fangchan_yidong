import Vue from 'vue'
// 自动定位当前位置
export function getCurrentPosition(success, error) {
  // navigator.geolocation.getCurrentPosition(locationSuccess, locationError, {
  //   enableHighAcuracy: true,
  //   maximumAge: 3000,
  //   timeout: 5000
  // })
  var geolocation = new BMap.Geolocation()
  geolocation.getCurrentPosition(function(r) {
    if (r.latitude && r.longitude) {
      let _location = {
        lat: r.latitude,
        lng: r.longitude
      }
      success(_location)
    } else {
      error(r)
    }
  }, {
    enableHighAccuracy: true
  })
}