const NoPageFound = () => {
  return (
    <section className="grid min-h-dvh place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8 capitalize">
      <div className="text-center">
        <p className="text-base font-semibold text-slate-50">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-100 sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-6 text-base leading-7 text-slate-200">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
      </div>
    </section>
  );
};

export default NoPageFound;
