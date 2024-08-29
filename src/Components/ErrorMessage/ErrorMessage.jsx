const ErrorMessage = ({ error }) => {
  return (
    <section className="h-dvh w-full flex justify-center items-center text-center">
      <h1 className="text-2xl font-medium">{error?.response?.data?.msg}</h1>
      <h1 className="text-2xl font-medium">{error? "Somthing Went Wrong!" : null}</h1>
    </section>
  );
};

export default ErrorMessage;
