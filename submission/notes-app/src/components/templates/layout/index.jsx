const Layout = ({ children }) => {
  return (
    <section className="flex justify-center pt-3 pb-8 items-center flex-col w-full dark:text-white dark:bg-gray-900 min-h-screen">
      <div className="flex flex-col justify-center items-center w-[85%]">
        {children}
      </div>
    </section>
  );
};

export default Layout;
