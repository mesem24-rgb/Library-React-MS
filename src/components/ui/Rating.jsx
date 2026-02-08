import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Rating = ({ rating }) => {
  const safeRating = Math.min(Math.max(rating, 0), 5); // Clamp rating between 0 and 5
  const fullStars = Math.floor(safeRating);
  const hasHalfStar = safeRating % 1 >= 0.5; // Only true if there's a decimal >= 0.5

  return (
    <div className="book__ratings">
      {/* Full stars */}
      {new Array(fullStars).fill(0).map((_, index) => (
        <FontAwesomeIcon icon="star" key={index} />
      ))}

      {/* Half star if needed */}
      {hasHalfStar && <FontAwesomeIcon icon="star-half-alt" />}

      {/* Empty stars */}
      {new Array(5 - fullStars - (hasHalfStar ? 1 : 0)).fill(0).map((_, index) => (
        <FontAwesomeIcon icon={["far", "star"]} key={`empty-${index}`} />
      ))}
    </div>
  );
};

export default Rating;

