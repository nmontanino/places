'use strict';

$(function () {
    $('#world-map').vectorMap({
        map: 'world_mill',
        backgroundColor: 'white',
        regionStyle: {
            initial: {
                fill: '#D9D9D9',
                "fill-opacity": 1,
                stroke: 'none',
                "stroke-width": 0,
                "stroke-opacity": 1
            },
            hover: {
                fill: '#D9D9D9',
                "fill-opacity": 0.8,
                cursor: 'pointer'
            }
        },
        markers: [
            { latLng: [25.761680, -80.191790], name: 'Miami' },
            { latLng: [30.332184, -81.655651], name: 'Jacksonville' },
            { latLng: [30.438256, -84.280733], name: 'Tallahassee' },
            { latLng: [30.458283, -91.140320], name: 'Baton Rouge' },
            { latLng: [40.712775, -74.005973], name: 'New York City' },
            { latLng: [38.907192, -77.036871], name: 'Washington DC' },
            { latLng: [30.267153, -97.743061], name: 'Austin' },
            { latLng: [29.760427, -95.369803], name: 'Houston' },
            { latLng: [32.776664, -96.796988], name: 'Dallas' },
            { latLng: [29.424122, -98.493628], name: 'San Antonio' },
            { latLng: [29.321586, -103.616019], name: 'Terlingua' },
            { latLng: [37.366229, -81.102592], name: 'Princeton' },
            { latLng: [61.218056, -149.900278], name: 'Anchorage' },
            { latLng: [51.507351, -0.127758], name: 'London' },
            { latLng: [51.752021, -1.257726], name: 'Oxford' },
            { latLng: [50.822530, -0.137163], name: 'Brighton' },
            { latLng: [47.273498, -2.213848], name: 'Saint-Nazaire' },
            { latLng: [41.385064, 2.173403], name: 'Barcelona' },
            { latLng: [40.416775, -3.703790], name: 'Madrid' },
            { latLng: [50.400013, 3.782792], name: 'Dour' },
            { latLng: [51.054342, 3.717424], name: 'Ghent' },
            { latLng: [52.370216, 4.895168], name: 'Amsterdam' },
            { latLng: [40.923576, 9.496443], name: 'Olbia' },
            { latLng: [40.471019, 9.489738], name: 'Lula' },
            { latLng: [60.451813, 22.266630], name: 'Turku' }
        ],
        markerStyle: {
            initial: {
                fill: 'orange',
                "fill-opacity": 0.4,
                stroke: 'none',
                r: 5
            }
        }
    });
});