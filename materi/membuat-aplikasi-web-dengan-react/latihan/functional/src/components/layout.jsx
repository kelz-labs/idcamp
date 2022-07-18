const Layout = ({ children }) => {
    return (
        <section className="flex justify-center items-center w-full">
            <main className="flex justify-center items-center w-[90%]">{children}</main>
        </section>
    );
}

export default Layout;