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
            { latLng: [25.76, -80.19], name: 'Miami' }
        ],
        markerStyle: {
            initial: {
                fill: 'orange',
                "fill-opacity": 0.5,
                stroke: 'none',
            }
        }
    });
});