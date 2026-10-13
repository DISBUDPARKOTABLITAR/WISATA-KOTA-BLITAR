ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([112.126370, -8.142553, 112.216844, -8.032334]);
var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_JalanLokaljalan_lokal_1 = new ol.format.GeoJSON();
var features_JalanLokaljalan_lokal_1 = format_JalanLokaljalan_lokal_1.readFeatures(json_JalanLokaljalan_lokal_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_JalanLokaljalan_lokal_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanLokaljalan_lokal_1.addFeatures(features_JalanLokaljalan_lokal_1);
var lyr_JalanLokaljalan_lokal_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanLokaljalan_lokal_1, 
                style: style_JalanLokaljalan_lokal_1,
                popuplayertitle: 'Jalan Lokal — jalan_lokal',
                interactive: false,
                title: '<img src="styles/legend/JalanLokaljalan_lokal_1.png" /> Jalan Lokal — jalan_lokal'
            });
var format_JalanSekunderjalan_sekunder_2 = new ol.format.GeoJSON();
var features_JalanSekunderjalan_sekunder_2 = format_JalanSekunderjalan_sekunder_2.readFeatures(json_JalanSekunderjalan_sekunder_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_JalanSekunderjalan_sekunder_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanSekunderjalan_sekunder_2.addFeatures(features_JalanSekunderjalan_sekunder_2);
var lyr_JalanSekunderjalan_sekunder_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanSekunderjalan_sekunder_2, 
                style: style_JalanSekunderjalan_sekunder_2,
                popuplayertitle: 'Jalan Sekunder — jalan_sekunder',
                interactive: false,
                title: '<img src="styles/legend/JalanSekunderjalan_sekunder_2.png" /> Jalan Sekunder — jalan_sekunder'
            });
var format_JalanUtamajalan_utama_3 = new ol.format.GeoJSON();
var features_JalanUtamajalan_utama_3 = format_JalanUtamajalan_utama_3.readFeatures(json_JalanUtamajalan_utama_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_JalanUtamajalan_utama_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanUtamajalan_utama_3.addFeatures(features_JalanUtamajalan_utama_3);
var lyr_JalanUtamajalan_utama_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanUtamajalan_utama_3, 
                style: style_JalanUtamajalan_utama_3,
                popuplayertitle: 'Jalan Utama — jalan_utama',
                interactive: false,
                title: '<img src="styles/legend/JalanUtamajalan_utama_3.png" /> Jalan Utama — jalan_utama'
            });
var format_WISATA_KOTA_BLITARWISATAKOTABLITAR_4 = new ol.format.GeoJSON();
var features_WISATA_KOTA_BLITARWISATAKOTABLITAR_4 = format_WISATA_KOTA_BLITARWISATAKOTABLITAR_4.readFeatures(json_WISATA_KOTA_BLITARWISATAKOTABLITAR_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_WISATA_KOTA_BLITARWISATAKOTABLITAR_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WISATA_KOTA_BLITARWISATAKOTABLITAR_4.addFeatures(features_WISATA_KOTA_BLITARWISATAKOTABLITAR_4);
var lyr_WISATA_KOTA_BLITARWISATAKOTABLITAR_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WISATA_KOTA_BLITARWISATAKOTABLITAR_4, 
                style: style_WISATA_KOTA_BLITARWISATAKOTABLITAR_4,
                popuplayertitle: 'WISATA_KOTA_BLITAR — WISATA KOTA BLITAR',
                interactive: true,
    title: 'WISATA_KOTA_BLITAR — WISATA KOTA BLITAR<br />\
    <img src="styles/legend/WISATA_KOTA_BLITARWISATAKOTABLITAR_4_0.png" /> Aloon-Aloon Kota Blitar<br />\
    <img src="styles/legend/WISATA_KOTA_BLITARWISATAKOTABLITAR_4_1.png" /> Blitar Greenpark<br />\
    <img src="styles/legend/WISATA_KOTA_BLITARWISATAKOTABLITAR_4_2.png" /> Fish Garden<br />\
    <img src="styles/legend/WISATA_KOTA_BLITARWISATAKOTABLITAR_4_3.png" /> Goa Maria Sendang Rejo<br />\
    <img src="styles/legend/WISATA_KOTA_BLITARWISATAKOTABLITAR_4_4.png" /> Kampung Batik Kembang Turi<br />\
    <img src="styles/legend/WISATA_KOTA_BLITARWISATAKOTABLITAR_4_5.png" /> Kampung Kerajinan Sentul<br />\
    <img src="styles/legend/WISATA_KOTA_BLITARWISATAKOTABLITAR_4_6.png" /> Kampung Opak Gambir<br />\
    <img src="styles/legend/WISATA_KOTA_BLITARWISATAKOTABLITAR_4_7.png" /> Kampung Sae Honeylor<br />\
    <img src="styles/legend/WISATA_KOTA_BLITARWISATAKOTABLITAR_4_8.png" /> Kampung Sae Murasan<br />\
    <img src="styles/legend/WISATA_KOTA_BLITARWISATAKOTABLITAR_4_9.png" /> Masjid Ar-Rahman<br />\
    <img src="styles/legend/WISATA_KOTA_BLITARWISATAKOTABLITAR_4_10.png" /> PIPP Kota Blitar<br />\
    <img src="styles/legend/WISATA_KOTA_BLITARWISATAKOTABLITAR_4_11.png" /> Taman Kebonrojo<br />\
    <img src="styles/legend/WISATA_KOTA_BLITARWISATAKOTABLITAR_4_12.png" /> Taman Kehati<br />\
    <img src="styles/legend/WISATA_KOTA_BLITARWISATAKOTABLITAR_4_13.png" /> Taman Pecut Kota Blitar<br />\
    <img src="styles/legend/WISATA_KOTA_BLITARWISATAKOTABLITAR_4_14.png" /> Taman Sentul<br />\
    <img src="styles/legend/WISATA_KOTA_BLITARWISATAKOTABLITAR_4_15.png" /> Waterpark Sumber Udel<br />' });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_JalanLokaljalan_lokal_1.setVisible(true);lyr_JalanSekunderjalan_sekunder_2.setVisible(true);lyr_JalanUtamajalan_utama_3.setVisible(true);lyr_WISATA_KOTA_BLITARWISATAKOTABLITAR_4.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_JalanLokaljalan_lokal_1,lyr_JalanSekunderjalan_sekunder_2,lyr_JalanUtamajalan_utama_3,lyr_WISATA_KOTA_BLITARWISATAKOTABLITAR_4];
lyr_JalanLokaljalan_lokal_1.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'width': 'width', 'parking:both': 'parking:both', 'covered': 'covered', 'foot': 'foot', 'motorcar': 'motorcar', 'maxspeed:advisory': 'maxspeed:advisory', 'import': 'import', 'horse': 'horse', 'flood_prone': 'flood_prone', 'cycleway': 'cycleway', 'bicycle': 'bicycle', 'service': 'service', 'junction': 'junction', 'motorcycle': 'motorcycle', 'not:name': 'not:name', 'traffic_calming': 'traffic_calming', 'layer': 'layer', 'bridge': 'bridge', 'maxspeed': 'maxspeed', 'lane_markings': 'lane_markings', 'motor_vehicle': 'motor_vehicle', 'access': 'access', 'reg_ref': 'reg_ref', 'lit': 'lit', 'cycleway:left': 'cycleway:left', 'oneway:4wd': 'oneway:4wd', 'alt_name': 'alt_name', 'ref': 'ref', 'cycleway:right': 'cycleway:right', 'oneway:motorcar': 'oneway:motorcar', 'name:etymology:wikipedia': 'name:etymology:wikipedia', 'name:etymology:wikidata': 'name:etymology:wikidata', 'lanes': 'lanes', 'designation': 'designation', 'surface': 'surface', 'oneway': 'oneway', 'name': 'name', 'hgv': 'hgv', });
lyr_JalanSekunderjalan_sekunder_2.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'width': 'width', 'parking:both': 'parking:both', 'covered': 'covered', 'foot': 'foot', 'motorcar': 'motorcar', 'maxspeed:advisory': 'maxspeed:advisory', 'import': 'import', 'horse': 'horse', 'flood_prone': 'flood_prone', 'cycleway': 'cycleway', 'bicycle': 'bicycle', 'service': 'service', 'junction': 'junction', 'motorcycle': 'motorcycle', 'not:name': 'not:name', 'traffic_calming': 'traffic_calming', 'layer': 'layer', 'bridge': 'bridge', 'maxspeed': 'maxspeed', 'lane_markings': 'lane_markings', 'motor_vehicle': 'motor_vehicle', 'access': 'access', 'reg_ref': 'reg_ref', 'lit': 'lit', 'cycleway:left': 'cycleway:left', 'oneway:4wd': 'oneway:4wd', 'alt_name': 'alt_name', 'ref': 'ref', 'cycleway:right': 'cycleway:right', 'oneway:motorcar': 'oneway:motorcar', 'name:etymology:wikipedia': 'name:etymology:wikipedia', 'name:etymology:wikidata': 'name:etymology:wikidata', 'lanes': 'lanes', 'designation': 'designation', 'surface': 'surface', 'oneway': 'oneway', 'name': 'name', 'hgv': 'hgv', });
lyr_JalanUtamajalan_utama_3.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'width': 'width', 'parking:both': 'parking:both', 'covered': 'covered', 'foot': 'foot', 'motorcar': 'motorcar', 'maxspeed:advisory': 'maxspeed:advisory', 'import': 'import', 'horse': 'horse', 'flood_prone': 'flood_prone', 'cycleway': 'cycleway', 'bicycle': 'bicycle', 'service': 'service', 'junction': 'junction', 'motorcycle': 'motorcycle', 'not:name': 'not:name', 'traffic_calming': 'traffic_calming', 'layer': 'layer', 'bridge': 'bridge', 'maxspeed': 'maxspeed', 'lane_markings': 'lane_markings', 'motor_vehicle': 'motor_vehicle', 'access': 'access', 'reg_ref': 'reg_ref', 'lit': 'lit', 'cycleway:left': 'cycleway:left', 'oneway:4wd': 'oneway:4wd', 'alt_name': 'alt_name', 'ref': 'ref', 'cycleway:right': 'cycleway:right', 'oneway:motorcar': 'oneway:motorcar', 'name:etymology:wikipedia': 'name:etymology:wikipedia', 'name:etymology:wikidata': 'name:etymology:wikidata', 'lanes': 'lanes', 'designation': 'designation', 'surface': 'surface', 'oneway': 'oneway', 'name': 'name', 'hgv': 'hgv', });
lyr_WISATA_KOTA_BLITARWISATAKOTABLITAR_4.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'FOTO 1': 'FOTO 1', 'FOTO 2': 'FOTO 2', 'Alamat': 'Alamat', 'Tahun Didirikan': 'Tahun Didirikan', 'Tahun Terakhir Pemeliharaan': 'Tahun Terakhir Pemeliharaan', 'Deskripsi': 'Deskripsi', 'Sumber Informasi': 'Sumber Informasi', 'Link Google Maps': 'Link Google Maps', });
lyr_JalanLokaljalan_lokal_1.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'width': 'TextEdit', 'parking:both': 'TextEdit', 'covered': 'TextEdit', 'foot': 'TextEdit', 'motorcar': 'TextEdit', 'maxspeed:advisory': 'TextEdit', 'import': 'TextEdit', 'horse': 'TextEdit', 'flood_prone': 'TextEdit', 'cycleway': 'TextEdit', 'bicycle': 'TextEdit', 'service': 'TextEdit', 'junction': 'TextEdit', 'motorcycle': 'TextEdit', 'not:name': 'TextEdit', 'traffic_calming': 'TextEdit', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'maxspeed': 'TextEdit', 'lane_markings': 'TextEdit', 'motor_vehicle': 'TextEdit', 'access': 'TextEdit', 'reg_ref': 'TextEdit', 'lit': 'TextEdit', 'cycleway:left': 'TextEdit', 'oneway:4wd': 'TextEdit', 'alt_name': 'TextEdit', 'ref': 'TextEdit', 'cycleway:right': 'TextEdit', 'oneway:motorcar': 'TextEdit', 'name:etymology:wikipedia': 'TextEdit', 'name:etymology:wikidata': 'TextEdit', 'lanes': 'TextEdit', 'designation': 'TextEdit', 'surface': 'TextEdit', 'oneway': 'TextEdit', 'name': 'TextEdit', 'hgv': 'TextEdit', });
lyr_JalanSekunderjalan_sekunder_2.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'width': 'TextEdit', 'parking:both': 'TextEdit', 'covered': 'TextEdit', 'foot': 'TextEdit', 'motorcar': 'TextEdit', 'maxspeed:advisory': 'TextEdit', 'import': 'TextEdit', 'horse': 'TextEdit', 'flood_prone': 'TextEdit', 'cycleway': 'TextEdit', 'bicycle': 'TextEdit', 'service': 'TextEdit', 'junction': 'TextEdit', 'motorcycle': 'TextEdit', 'not:name': 'TextEdit', 'traffic_calming': 'TextEdit', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'maxspeed': 'TextEdit', 'lane_markings': 'TextEdit', 'motor_vehicle': 'TextEdit', 'access': 'TextEdit', 'reg_ref': 'TextEdit', 'lit': 'TextEdit', 'cycleway:left': 'TextEdit', 'oneway:4wd': 'TextEdit', 'alt_name': 'TextEdit', 'ref': 'TextEdit', 'cycleway:right': 'TextEdit', 'oneway:motorcar': 'TextEdit', 'name:etymology:wikipedia': 'TextEdit', 'name:etymology:wikidata': 'TextEdit', 'lanes': 'TextEdit', 'designation': 'TextEdit', 'surface': 'TextEdit', 'oneway': 'TextEdit', 'name': 'TextEdit', 'hgv': 'TextEdit', });
lyr_JalanUtamajalan_utama_3.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'width': 'TextEdit', 'parking:both': 'TextEdit', 'covered': 'TextEdit', 'foot': 'TextEdit', 'motorcar': 'TextEdit', 'maxspeed:advisory': 'TextEdit', 'import': 'TextEdit', 'horse': 'TextEdit', 'flood_prone': 'TextEdit', 'cycleway': 'TextEdit', 'bicycle': 'TextEdit', 'service': 'TextEdit', 'junction': 'TextEdit', 'motorcycle': 'TextEdit', 'not:name': 'TextEdit', 'traffic_calming': 'TextEdit', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'maxspeed': 'TextEdit', 'lane_markings': 'TextEdit', 'motor_vehicle': 'TextEdit', 'access': 'TextEdit', 'reg_ref': 'TextEdit', 'lit': 'TextEdit', 'cycleway:left': 'TextEdit', 'oneway:4wd': 'TextEdit', 'alt_name': 'TextEdit', 'ref': 'TextEdit', 'cycleway:right': 'TextEdit', 'oneway:motorcar': 'TextEdit', 'name:etymology:wikipedia': 'TextEdit', 'name:etymology:wikidata': 'TextEdit', 'lanes': 'TextEdit', 'designation': 'TextEdit', 'surface': 'TextEdit', 'oneway': 'TextEdit', 'name': 'TextEdit', 'hgv': 'TextEdit', });
lyr_WISATA_KOTA_BLITARWISATAKOTABLITAR_4.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'FOTO 1': 'ExternalResource', 'FOTO 2': 'ExternalResource', 'Alamat': 'TextEdit', 'Tahun Didirikan': 'TextEdit', 'Tahun Terakhir Pemeliharaan': 'TextEdit', 'Deskripsi': 'TextEdit', 'Sumber Informasi': 'TextEdit', 'Link Google Maps': 'TextEdit', });
lyr_JalanLokaljalan_lokal_1.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'width': 'no label', 'parking:both': 'no label', 'covered': 'no label', 'foot': 'no label', 'motorcar': 'no label', 'maxspeed:advisory': 'no label', 'import': 'no label', 'horse': 'no label', 'flood_prone': 'no label', 'cycleway': 'no label', 'bicycle': 'no label', 'service': 'no label', 'junction': 'no label', 'motorcycle': 'no label', 'not:name': 'no label', 'traffic_calming': 'no label', 'layer': 'no label', 'bridge': 'no label', 'maxspeed': 'no label', 'lane_markings': 'no label', 'motor_vehicle': 'no label', 'access': 'no label', 'reg_ref': 'no label', 'lit': 'no label', 'cycleway:left': 'no label', 'oneway:4wd': 'no label', 'alt_name': 'no label', 'ref': 'no label', 'cycleway:right': 'no label', 'oneway:motorcar': 'no label', 'name:etymology:wikipedia': 'no label', 'name:etymology:wikidata': 'no label', 'lanes': 'no label', 'designation': 'no label', 'surface': 'no label', 'oneway': 'no label', 'name': 'no label', 'hgv': 'no label', });
lyr_JalanSekunderjalan_sekunder_2.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'width': 'no label', 'parking:both': 'no label', 'covered': 'no label', 'foot': 'no label', 'motorcar': 'no label', 'maxspeed:advisory': 'no label', 'import': 'no label', 'horse': 'no label', 'flood_prone': 'no label', 'cycleway': 'no label', 'bicycle': 'no label', 'service': 'no label', 'junction': 'no label', 'motorcycle': 'no label', 'not:name': 'no label', 'traffic_calming': 'no label', 'layer': 'no label', 'bridge': 'no label', 'maxspeed': 'no label', 'lane_markings': 'no label', 'motor_vehicle': 'no label', 'access': 'no label', 'reg_ref': 'no label', 'lit': 'no label', 'cycleway:left': 'no label', 'oneway:4wd': 'no label', 'alt_name': 'no label', 'ref': 'no label', 'cycleway:right': 'no label', 'oneway:motorcar': 'no label', 'name:etymology:wikipedia': 'no label', 'name:etymology:wikidata': 'no label', 'lanes': 'no label', 'designation': 'no label', 'surface': 'no label', 'oneway': 'no label', 'name': 'no label', 'hgv': 'no label', });
lyr_JalanUtamajalan_utama_3.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'width': 'no label', 'parking:both': 'no label', 'covered': 'no label', 'foot': 'no label', 'motorcar': 'no label', 'maxspeed:advisory': 'no label', 'import': 'no label', 'horse': 'no label', 'flood_prone': 'no label', 'cycleway': 'no label', 'bicycle': 'no label', 'service': 'no label', 'junction': 'no label', 'motorcycle': 'no label', 'not:name': 'no label', 'traffic_calming': 'no label', 'layer': 'no label', 'bridge': 'no label', 'maxspeed': 'no label', 'lane_markings': 'no label', 'motor_vehicle': 'no label', 'access': 'no label', 'reg_ref': 'no label', 'lit': 'no label', 'cycleway:left': 'no label', 'oneway:4wd': 'no label', 'alt_name': 'no label', 'ref': 'no label', 'cycleway:right': 'no label', 'oneway:motorcar': 'no label', 'name:etymology:wikipedia': 'no label', 'name:etymology:wikidata': 'no label', 'lanes': 'no label', 'designation': 'no label', 'surface': 'no label', 'oneway': 'no label', 'name': 'no label', 'hgv': 'no label', });
lyr_WISATA_KOTA_BLITARWISATAKOTABLITAR_4.set('fieldLabels', {'fid': 'hidden field', 'Name': 'no label', 'FOTO 1': 'no label', 'FOTO 2': 'no label', 'Alamat': 'inline label - always visible', 'Tahun Didirikan': 'inline label - always visible', 'Tahun Terakhir Pemeliharaan': 'inline label - always visible', 'Deskripsi': 'no label', 'Sumber Informasi': 'inline label - always visible', 'Link Google Maps': 'inline label - always visible', });
lyr_WISATA_KOTA_BLITARWISATAKOTABLITAR_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});