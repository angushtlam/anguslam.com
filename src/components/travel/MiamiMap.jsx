import React from "react";
import { MapContainer, TileLayer, Marker, Popup, Polygon } from "react-leaflet";
import { DivIcon } from "leaflet";
import "../../styles/leaflet.css";

const markerIcon =
  typeof window !== "undefined"
    ? new DivIcon({
        className: "leaflet-angus-custom-icon",
        iconSize: [25, 40],
        iconAnchor: [12, 40],
        popupAnchor: [1, -20],
      })
    : null;

export default function MiamiMap() {
  if (typeof window === "undefined") {
    return null;
  }

  return (
    <MapContainer
      center={[25.7433, -80.2009]}
      zoom={11}
      scrollWheelZoom={false}
      style={{ height: "400px" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Polygon
        positions={[
          [25.76836, -80.1348],
          [25.78761, -80.13072],
          [25.78762, -80.12705],
          [25.7683, -80.1305],
        ]}
      >
        <Popup>Ocean Drive (outdoors, art deco architecture)</Popup>
      </Polygon>
      <Marker icon={markerIcon} position={[25.78499, -80.13074]}>
        <Popup>Taquiza (outdoor options, $20pp, tacos)</Popup>
      </Marker>
      {/* Downtown Miami, Brickell, Little Havana */}
      <Marker icon={markerIcon} position={[25.76945, -80.18894]}>
        <Popup>
          Miami Circle at Brickell Point (outdoors, archeological site)
        </Popup>
      </Marker>
      <Marker icon={markerIcon} position={[25.78028, -80.18973]}>
        <Popup>
          Freedom Tower at Miami Dade College (outdoor options, architecture)
        </Popup>
      </Marker>
      <Marker icon={markerIcon} position={[25.77233, -80.19157]}>
        <Popup>
          Miami Tower (outdoor options, architecture, see at night for LEDs)
        </Popup>
      </Marker>
      <Marker icon={markerIcon} position={[25.76989, -80.18997]}>
        <Popup>Brickell Avenue Bridge (outdoors, drawbridge)</Popup>
      </Marker>
      <Marker icon={markerIcon} position={[25.74437, -80.2105]}>
        <Popup>
          {`Vizcaya Museum & Gardens (outdoor options, museum, historic estate)`}
        </Popup>
      </Marker>
      <Marker icon={markerIcon} position={[25.77557, -80.19187]}>
        <Popup>Security Building (outdoor options, architecture)</Popup>
      </Marker>
      <Marker icon={markerIcon} position={[25.76503, -80.25277]}>
        <Popup>
          Versailles Restaurant Cuban Cuisine (indoors, $15pp, Cuban)
        </Popup>
      </Marker>
      <Marker icon={markerIcon} position={[25.76588, -80.21966]}>
        <Popup>
          Azucar Ice Cream - Little Havana (takeout, $10, ice cream)
        </Popup>
      </Marker>
      <Marker icon={markerIcon} position={[25.76589, -80.22164]}>
        <Popup>
          Futurama 1637 Art Building (outdoor options, architecture)
        </Popup>
      </Marker>
      <Marker icon={markerIcon} position={[25.76553, -80.21968]}>
        <Popup>Tower Theater (outdoor options, architecture)</Popup>
      </Marker>
      <Polygon
        positions={[
          [25.76595, -80.19892],
          [25.76678, -80.19908],
          [25.7654, -80.25529],
          [25.76408, -80.25503],
        ]}
      >
        <Popup>
          Calle Ocho (outdoors, historic Cuban immigrant commercial street)
        </Popup>
      </Polygon>
      <Marker icon={markerIcon} position={[25.76427, -80.19341]}>
        <Popup>
          Dolores but you can call me Lolita (outdoor options, $40pp, New
          American, rooftop)
        </Popup>
      </Marker>
      <Marker icon={markerIcon} position={[25.76019, -80.19267]}>
        <Popup>Novecento (outdoor options, $30pp, Argentinian)</Popup>
      </Marker>
      <Polygon
        positions={[
          [25.76733, -80.19355],
          [25.76732, -80.19306],
          [25.76355, -80.19292],
          [25.76353, -80.19347],
        ]}
      >
        <Popup>South Miami Avenue (outdoor options, bars and restaurant)</Popup>
      </Polygon>
      {/* Design District, Wynwood, Little Haiti */}
      <Marker icon={markerIcon} position={[25.78618, -80.17467]}>
        <Popup>Jungle Island (outdoors, zoo)</Popup>
      </Marker>
      <Marker icon={markerIcon} position={[25.78604, -80.18634]}>
        <Popup>Pérez Art Museum Miami (outdoor options, museum)</Popup>
      </Marker>
      <Marker icon={markerIcon} position={[25.78529, -80.18574]}>
        <Popup>Giant Head Statue (outdoors, art display)</Popup>
      </Marker>
      <Marker icon={markerIcon} position={[25.80258, -80.20462]}>
        <Popup>
          The Margulies Collection at the WAREhOUSE (indoors, museum)
        </Popup>
      </Marker>
      <Marker icon={markerIcon} position={[25.83019, -80.19143]}>
        <Popup>Little Haiti Cultural Complex (indoors, museum)</Popup>
      </Marker>
      <Marker icon={markerIcon} position={[25.79989, -80.19926]}>
        <Popup>Panther Coffee (outdoor options, $10pp, coffee)</Popup>
      </Marker>
      <Marker icon={markerIcon} position={[25.81771, -80.1917]}>
        <Popup>
          Buena Vista Deli (indoors, $10pp, French breakfast and brunch)
        </Popup>
      </Marker>
      <Marker icon={markerIcon} position={[25.77735, -80.20387]}>
        <Popup>{`Garcia's Seafood Grille & Fish Market (outdoor options, $30pp, seafood)`}</Popup>
      </Marker>
      <Marker icon={markerIcon} position={[25.82491, -80.20027]}>
        <Popup>{`Chef Creole Seasoned Restaurant (indoors, $30pp, Creole)`}</Popup>
      </Marker>
      {/* Virginia Key, Key Biscayne */}
      <Marker icon={markerIcon} position={[25.74737, -80.14635]}>
        <Popup>
          Virginia Key Outdoor Center (outdoors, paddleboard and kayaking with
          city views)
        </Popup>
      </Marker>
      <Marker icon={markerIcon} position={[25.6776, -80.16434]}>
        <Popup>
          Mangrove Wetlands, Bill Baggs Cape Florida State Park (outdoors, park)
        </Popup>
      </Marker>
      <Marker icon={markerIcon} position={[25.6762, -80.16403]}>
        <Popup>
          No Name Harbor, Bill Baggs Cape Florida State Park (outdoors, park)
        </Popup>
      </Marker>
      <Marker icon={markerIcon} position={[25.6666, -80.15595]}>
        <Popup>
          Cape Florida Lighthouse, Bill Baggs Cape Florida State Park (outdoors,
          lighthouse)
        </Popup>
      </Marker>
      <Marker icon={markerIcon} position={[25.66877, -80.15452]}>
        <Popup>
          Cape Florida Beach, Bill Baggs Cape Florida State Park (outdoors,
          beach)
        </Popup>
      </Marker>
      <Marker icon={markerIcon} position={[25.6511591, -80.1705227]}>
        <Popup>
          Stiltsville (outdoors only accessible by boat, houses built on stilts)
        </Popup>
      </Marker>
      <Marker icon={markerIcon} position={[25.80115, -80.19933]}>
        <Popup>Wynwood Walls (outdoors, street art)</Popup>
      </Marker>
    </MapContainer>
  );
}
