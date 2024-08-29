import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getDistance } from "geolib";
import { OrdApi } from "../Context/OrdersApi";
const useDetectLocation = () => {
  const TARGER_LOCATION = 50;
  const {FetchedData} = useContext(OrdApi);
  const [message, setMessage] = useState("");
  const [userLocation, setUserLocation] = useState(null);
  const [targetLocation, setTargetLocation] = useState({
    lat: 19.5643758,
    lng: 37.1998272,
  });
  const [distance, setDistance] = useState(null);
  const [isNear, setIsNear] = useState(false);

  // --------------------------------------------------------
  const ErrorHandling = (error) => {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        toast.error("User denied the request for Geolocation.");
        break;
      case error.POSITION_UNAVAILABLE:
        toast.error("Location information is unavailable.");
        break;
      case error.TIMEOUT:
        toast.error("The request to get user location timed out.");
        break;
      case error.UNKNOWN_ERROR:
        toast.error("An unknown error occurred.");
        break;
    }
  };
  // --------------------------------------------------------
  const SuccessHandling = (position) => {
    // console.log(position.coords);
    const { latitude, longitude, accuracy, speed } = position.coords;
    setUserLocation({
      lat: latitude,
      lng: longitude,
      acc: accuracy,
      speed: speed,
    });
  };
  // --------------------------------------------------------
  useEffect(() => {
    if (userLocation) {
      const calculateDistance = getDistance(userLocation, targetLocation);
      // --------------------------------------------------------
      console.log(calculateDistance);
      setDistance(distance);
      setIsNear(distance <= TARGER_LOCATION);
      if (distance <= TARGER_LOCATION && userLocation.acc <= TARGER_LOCATION)
        setMessage("انت ضمن النطاق المسموح له باجراء الطلب");
      else setMessage("انت خارج النطاق المسموح له باجراء الطلب");
      // --------------------------------------------------------
      // && userLocation.acc <= TARGER_LOCATION
      // --------------------------------------------------------
    }
  }, []);
  // --------------------------------------------------------
  useEffect(() => {
    // -----------Get Data From Api-------------------------
    // if (data) {
    //   console.log(data);
    //   setTargetLocation({ lat: data.lat, lng: data.lng });
    //   console.log(targetLocation);
    // }
    // -----------------------------------------------------
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(SuccessHandling, ErrorHandling, {
        enableHighAccuracy: true,
        timeout: 1000,
        maximumAge: 0,
      });
    } else {
      toast.error("This Browser Doesn't Support GPS");
    }
    // Clear / Stop Watching Position
    // return () => navigator.geolocation.clearWatch();
  }, []);

  return { isNear, distance, message, userLocation, TARGER_LOCATION };
};

export default useDetectLocation;
