<script src="lib/EllipsisVectorLayer.js"></script>
    <script src="lib/EllipsisRasterLayer.js"></script>
    <script src="lib/AsyncEllipsisRasterLayer.js"></script>
  
  var map = L.map("map").setView([-27.3416, 153.074], 13);
  
  var tiles = L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);
  
  new EllipsisVectorLayer({
    pathId: "37d98130-4029-4225-90c2-b8fc26d7b5b2",
  }).addTo(map);
  
