 require([
        "esri/Map",
        "esri/views/MapView",
        "esri/layers/FeatureLayer"
      ], function (Map, MapView, FeatureLayer) {
        var map = new Map({
          basemap: "hybrid"
        });

        var view = new MapView({
          container: "viewDiv",
          map: map,
          center: [-71.1, 42.3],
          zoom: 10
        });

        /********************
         * Add feature layer
         ********************/

       
   
   var featureLayer1 = new FeatureLayer({
     url:"https://services.arcgis.com/V6ZHFr6zdgNZuVG0/ArcGIS/rest/services/Boston_Neighborhoods/FeatureServer"
   })
        map.add(featureLayer1);
   
   var featureLayer2 = new FeatureLayer({
     
     url:"https://services.arcgis.com/V6ZHFr6zdgNZuVG0/ArcGIS/rest/services/Boston_Trees_with_Height_WFL1/FeatureServer"
   })
   
   map.add(featureLayer2)
 });
