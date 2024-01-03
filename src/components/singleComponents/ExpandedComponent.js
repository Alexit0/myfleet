import React from "react";
import classes from "./ExpandedComponent.module.css";

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
      <ul className={classes.ul}>
        {Object.entries(groupedPlaces).map(([date, places]) => (
          <li key={date}>
            <ul className={classes.ul}>
              {places.map((place, index) => (
                <li key={`${place.address}-${index}`}>
                  <strong>{`${place.date} `}</strong>
                  {place.isLoadingPlace ? (
                    <strong>Loading: </strong>
                  ) : (
                    <strong>Unloading: </strong>
                  )}

                  {`${place.address}, ${place.postCode} (${place.distance}km), GPS: ${place.coordinates}`}
                  <br />
                  {place.isLoadingPlace && (
                    <ul className={classes.ul}>
                      {place.unloadingPlace.map(
                        (unloadingPlace, innerIndex) => (
                          <>
                            <li key={`${unloadingPlace.address}-${innerIndex}`}>
                              {`Receiver: ${unloadingPlace.address}, ${unloadingPlace.postCode}`}
                            </li>
                            <li>{`Cargo: ${unloadingPlace.cargoDetails}`}</li>
                          </>
                        )
                      )}
                      <li>{`Reference: ${place.comments}`}</li>
                    </ul>
                  )}
                  {!place.isLoadingPlace && (
                    <>
                      <ul className={classes.ul}>
                        <li>
                          {place.comments && `Reference: ${place.comments}`}
                        </li>
                      </ul>
                    </>
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
