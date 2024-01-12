import React, { useEffect, useRef } from "react";
import L from "leaflet";
import classes from "./TruckMap.module.css";

const TruckMap = ({ data }) => {
  const mapRef = useRef(null);
  const todayDate = new Date().toISOString().split("T")[0];

  useEffect(() => {
    if (!mapRef.current) {
      mapRef.current = L.map("mapid").setView([50, 10], 5);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "© OpenStreetMap contributors",
      }).addTo(mapRef.current);
    }

    mapRef.current.eachLayer((layer) => {
      if (layer instanceof L.Marker) {
        layer.remove();
      }
    });

    const groupedData = {};

    data.forEach((truck) => {
      if (truck.order && truck.order.length > 0) {
        const latestOrder = truck.order[truck.order.length - 1];

        if (
          latestOrder.unloadingPlace &&
          latestOrder.unloadingPlace.length > 0
        ) {
          const latestUnloadingPlace =
            latestOrder.unloadingPlace[
              latestOrder.unloadingPlace.length - 1
            ];

          if (latestUnloadingPlace.coordinates) {
            const coordinates = latestUnloadingPlace.coordinates
              .split(",")
              .map((coord) => parseFloat(coord.trim()));

            let iconColor = "black";

            const unloadingDate = new Date(latestUnloadingPlace.date);

            if (unloadingDate > new Date()) {
              iconColor = "green"; // Future unloading date
            } else if (
              unloadingDate.toISOString().split("T")[0] === todayDate
            ) {
              iconColor = "yellow"; // Today's unloading date
            } else {
              iconColor = "red"; // Past unloading date
            }

            if (!groupedData[truck.truckNumber] || unloadingDate > new Date(groupedData[truck.truckNumber].unloadingDate)) {
              groupedData[truck.truckNumber] = {
                coordinates,
                iconColor,
                unloadingDate,
              };
            }
          }
        }
      }
    });

    Object.entries(groupedData).forEach(([truckNumber, { coordinates, iconColor, unloadingDate }]) => {
      const truckIcon = new L.Icon({
        iconUrl: `/icons/truck-icon-${iconColor}.svg`,
        iconSize: [32, 32],
        iconAnchor: [16, 16],
      });

      const label = L.divIcon({
        className: classes["truck-label"],
        html: `<div style="font-size: 14px; font-weight: bold;">${truckNumber}</div>`,
      });

      const marker = L.marker(coordinates, { icon: truckIcon })
        .addTo(mapRef.current)
        .bindTooltip(truckNumber, {
          permanent: true,
          direction: "top",
          offset: [0, -18],
          className: classes["truck-label"],
        });

      marker.bindPopup(`Unloading Date: ${unloadingDate.toISOString().split("T")[0]}`);
    });

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [data, todayDate]);

  return <div id="mapid" style={{ height: "500px", width: "50%" }}></div>;
};

export default TruckMap;
