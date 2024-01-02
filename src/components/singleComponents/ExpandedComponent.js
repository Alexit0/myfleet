import React from "react";

// An expandable component.
const ExpandedComponent = ({ data }) => {
  console.log(data);

  const loadingPlacesArray = data.order.map((order) => ({
    ...order,
    isLoadingPlace: true,
  }));

  const unloadingPlacesArray = data.order.flatMap((order) =>
    order.unloadingPlace.map((place) => ({ ...place, isLoadingPlace: false }))
  );

  const allPlacesArray = [...loadingPlacesArray, ...unloadingPlacesArray];

  // Group places by date
  const groupedPlaces = allPlacesArray.reduce((grouped, place) => {
    const key = place.date;
    if (!grouped[key]) {
      grouped[key] = [];
    }
    grouped[key].push(place);
    return grouped;
  }, {});

  console.log("Grouped Places:", groupedPlaces);

  return (
    <div>
      <ul
        style={{
          listStyleType: "none",
          textAlign: "left",
          fontSize: "small",
        }}
      >
        {Object.entries(groupedPlaces).map(([date, places]) => (
          <li key={date}>
            {/* <strong>{date}</strong> */}
            <ul
              style={{
                listStyleType: "none",
              }}
            >
              {places.map((place, index) => (
                <li key={`${place.address}-${index}`}>
                  <strong>{`${place.date} `}</strong>
                  {`${place.isLoadingPlace ? "Loading" : "Unloading"}: ${
                    place.address
                  }, ${place.postCode} (${place.distance}km), GPS: ${
                    place.coordinates
                  }`}
                  {place.isLoadingPlace && (
                    <ul
                      style={{
                        listStyleType: "none",
                      }}
                    >
                      {place.unloadingPlace.map(
                        (unloadingPlace, innerIndex) => (
                          <li key={`${unloadingPlace.address}-${innerIndex}`}>
                            {`Receiver: ${unloadingPlace.address}, ${unloadingPlace.postCode}`}
                            <br />
                            {`cargo: ${unloadingPlace.cargoDetails}`}
                            <br />
                            {`ref: ${unloadingPlace.comments}`}
                          </li>
                        )
                      )}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpandedComponent;
