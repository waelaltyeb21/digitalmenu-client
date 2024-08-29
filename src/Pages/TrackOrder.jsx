import useDetectLocation from "../Hooks/useDetectLocation";

const TrackOrder = () => {
  const { isNear, distance, message, userLocation, TARGER_LOCATION } =
    useDetectLocation();
  console.log(isNear, distance, message, userLocation, TARGER_LOCATION);
  return <div>TrackOrder</div>;
};

export default TrackOrder;
