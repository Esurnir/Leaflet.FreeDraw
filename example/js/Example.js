(function Example(window, leaflet, FreeDraw) {

    /**
     * Invoked once DOM is ready, and then goodness knows what happens after that.
     *
     * @method beginExample
     * @return {void}
     */
    var beginExample = function beginExample() {

        // Setup Leaflet: http://leafletjs.com/examples/quick-start.html
        var mapContainer = window.document.querySelector('section.map'),
            map          = L.map(mapContainer).setView([51.505, -0.09], 14);
        L.tileLayer('https://tiles.lyrk.org/lr/{z}/{x}/{y}?apikey=b86b18b0645848bea383827fdccb878e').addTo(map);

        var freeDraw = window.freeDraw = new L.FreeDraw({
            mode: FreeDraw.MODES.DELETE | FreeDraw.MODES.CREATE
        });

        freeDraw.options.setBoundariesAfterEdit(true);
        freeDraw.options.allowMultiplePolygons(true);
        freeDraw.options.exitModeAfterCreate(true);
        freeDraw.options.setHullAlgorithm('Wildhoney/ConcaveHull');
        freeDraw.options.getMarkers(function getMarkers(boundaries, setMarkers) {

            if (boundaries.length) {
                setMarkers([boundaries[boundaries.length - 1][0]]);
                return;
            }

            setMarkers();

        });

        map.addLayer(freeDraw);

    };

    // Hold onto your hats!
    window.document.addEventListener('DOMContentLoaded', beginExample);

})(window, window.L, window.FreeDraw);