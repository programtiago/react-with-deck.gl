import React from 'react';
import DeckGL from '@deck.gl/react';
import {LineLayer} from '@deck.gl/layers';
import {StaticMap} from 'react-map-gl';

// Set your mapbox access token here
const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1IjoicHJvZ3JhbXRpYWdvIiwiYSI6ImNrbTNkNHY2eTA0ZTEycW82a3c3eWRmYnQifQ.V9gem6GgPFMnTSGSq6z-WA';

// Viewport settings
const INITIAL_VIEW_STATE = {
  longitude: -9.1365919,
  latitude: 38.7077507,
  zoom: 5,
  pitch: 0,
  bearing: 0
};

// Data to be used by the LineLayer
const data = [
  {sourcePosition: [-122.41669, 37.7853], targetPosition: [-122.41669, 37.781]}
];

function App({data}) {
  const layers = [
    new LineLayer({id: 'line-layer', data})
  ];

  return (
    <DeckGL
      initialViewState={INITIAL_VIEW_STATE}
      controller={true}
      layers={layers}
    >
      <StaticMap mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN} />
    </DeckGL>
  );
}

export default App;
