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
        const latestOrder = truck.order[truck.order.length - 1]; // Get the latest order

        if (latestOrder.coordinates) { // Use coordinates from the latest order
          const coordinates = latestOrder.coordinates
            .split(",")
            .map((coord) => parseFloat(coord.trim()));

          let iconColor = "black";

          const unloadingDate = new Date(latestOrder.dateTime.split(" ")[0]); // Parse unloading date from dateTime

          if (unloadingDate > new Date()) {
            iconColor = "green";
          } else if (
            unloadingDate.toISOString().split("T")[0] === todayDate
          ) {
            iconColor = "yellow";
          } else {
            iconColor = "red";
          }

          if (
            !groupedData[truck.truckNumber] ||
            unloadingDate >
              new Date(groupedData[truck.truckNumber].unloadingDate)
          ) {
            groupedData[truck.truckNumber] = {
              coordinates,
              iconColor,
              unloadingDate,
              type: latestOrder.type // Include the type of order
            };
          }
        }
      }
    });

    Object.entries(groupedData).forEach(([truckNumber, { coordinates, iconColor, unloadingDate, type }]) => {
      if (coordinates && coordinates.length === 2) {
        const truckIcon = new L.Icon({
          iconUrl: `/icons/truck-icon-${iconColor}.svg`,
          iconSize: [32, 32],
          iconAnchor: [16, 16],
        });

        const marker = L.marker(coordinates, { icon: truckIcon })
          .addTo(mapRef.current)
          .bindTooltip(truckNumber, {
            permanent: true,
            direction: "top",
            offset: [0, -18],
            className: classes["truck-label"],
          });

        marker.bindPopup(`${type}: ${unloadingDate.toISOString().split("T")[0]}`);
      }
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
