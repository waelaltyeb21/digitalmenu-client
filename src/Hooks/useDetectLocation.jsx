import { useContext, useEffect, useState } from "react";
import { getDistance } from "geolib";
import { OrdApi } from "../Context/OrdersApi";
import { toast } from "react-toastify";

const useDetectLocation = () => {
  const TARGER_LOCATION = 20;
  const { FetchedData: data } = useContext(OrdApi);
  console.log(data.restaurant.coords);
  const [message, setMessage] = useState("");
  const [userLocation, setUserLocation] = useState(null);
  const [targetLocation, setTargetLocation] = useState({
    lat: 19.5643758,
    lng: 37.1998272,
  });
  // ------------------------------------------------------
  const [distance, setDistance] = useState(null);
  const [isNear, setIsNear] = useState(false);
  // ------------------------------------------------------
  const SuccessHandler = (position) => {
    const { latitude, longitude, accuracy, speed } = position.coords;
    setUserLocation({
      lat: latitude, // 19.56310
      lng: longitude, // 37.1992263
      acc: accuracy,
      speed: speed,
    });
  };
  const ErrorHandler = (error) => {
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
  // ------------------------------------------------------
  useEffect(() => {
    let watchID = null;
    // -----------------------------------------------------
    if (navigator.geolocation) {
      watchID = navigator.geolocation.watchPosition(
        SuccessHandler,
        ErrorHandler,
        { enableHighAccuracy: true, timeout: 1000, maximumAge: 0 }
      );
    } else {
      toast.error("This Browser Doesn't Support GPS");
    }
    // -----------------------------------------------------
    return () => navigator.geolocation.clearWatch(watchID);
  }, []);

  useEffect(() => {
    if (userLocation) {
      const distance = getDistance(userLocation, targetLocation);
      setDistance(distance);
      console.log("Distance: ", distance);
      setIsNear(distance <= TARGER_LOCATION);
      if (distance <= TARGER_LOCATION && userLocation.acc <= TARGER_LOCATION)
        setMessage("انت ضمن النطاق المسموح له باجراء الطلب");
      else setMessage("انت خارج النطاق المسموح له باجراء الطلب");
    }
  }, [userLocation]);

  //  دالة  لحساب  المسافة  بين  نقطتين
  function calculateDistance(loc1, loc2) {
    const R = 6371e3;
    const dLat = deg2rad(loc2.lat - loc1.lat);
    const dLon = deg2rad(loc2.lng - loc1.lng);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(loc1.lat)) *
        Math.cos(deg2rad(loc2.lat)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c; // Distance With Meters
    return d;
  }

  //  دالة  لتحويل  الدرجات  إلى  راديان
  function deg2rad(deg) {
    return deg * (Math.PI / 180);
  }
  return { isNear, distance, message, userLocation, TARGER_LOCATION };
};

export default useDetectLocation;
