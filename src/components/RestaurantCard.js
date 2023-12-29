import { CDN_URl } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, avgRating, cuisines, areaName } =
    resData?.info;
  const { slaString } = resData?.info.sla;
  return (
    <div className="res-card">
      <div className="res-logo">
        <img width="100%" src={CDN_URl + cloudinaryImageId} />
      </div>
      <h3>{name}</h3>
      <h4>{avgRating}</h4>
      <h4>{slaString}</h4>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{areaName}</h4>
      <h4></h4>
    </div>
  );
};

export default RestaurantCard;
