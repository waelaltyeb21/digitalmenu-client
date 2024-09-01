import useDetectLocation from "../Hooks/useDetectLocation";

const Tracking = () => {
  const { isNear, distance, message, userLocation, TARGER_LOCATION } =
    useDetectLocation();
  console.log(isNear, distance, message, userLocation, TARGER_LOCATION);
  return (
    <div className="h-dvh text-slate-100 flex flex-col justify-center items-center">
      <h1 className="text-3xl">Tracking</h1>
      <div>
        {/* --------------------------------------------- */}
        <div className="alert flex flex-col justify-center items-center bg-indigo-600 text-slate-100 text-center lg:md:p-4 p-2">
          {distance != null ? (
            <div className="messag mb-2">
              <p>
                المسافة بينك و بين الموقع الآخر:{" "}
                <span className={isNear ? "bg-green-500" : "bg-orange-500"}>
                  {Math.floor(distance)}
                </span>{" "}
                متر
              </p>
              {/* <p>انت الان على بعد {distance.toFixed(3) - 50} متر من النطاق المسموح له بالطلب</p> */}
              {/* <span>{message}</span> */}
            </div>
          ) : null}
          {/* --------------------------------------------- */}
          {/* --------------------------------------------- */}
          <div>
            {isNear ? (
              <p className="bg-green-500 px-2">أنت الآن داخل النطاق المسموح</p>
            ) : (
              <p className="bg-orange-400 px-2">
                يرجى الاقتراب من الموقع المطلوب (ضمن مسافة {TARGER_LOCATION}{" "}
                متر)
              </p>
            )}
          </div>
        </div>
        {/* --------------------------------------------- */}
        <div className="mapContainer flex justify-center items-center mt-8 mx-4">
          {/* --------------------------------------------- */}
          {/* <EmbededMap /> */}
          {/* --------------------------------------------- */}
          {userLocation ? (
            <div className="loaction *:mx-4 flex flex-col *:mb-4 *:bg-indigo-600 *:text-slate-100 *:rounded *:p-4">
              <span>Lat: {userLocation.lat}</span>
              <span>Lng: {userLocation.lng}</span>
              <span>accuracy: {userLocation.acc.toFixed(1)}</span>
              <span>
                Speed:{" "}
                {userLocation != null
                  ? userLocation.speed == null || userLocation.speed == 0
                    ? "Move To Display Speed"
                    : userLocation.speed.toFixed(2)
                  : null}
              </span>
            </div>
          ) : null}
          {/* --------------------------------------------- */}
        </div>
      </div>
    </div>
  );
};

export default Tracking;
