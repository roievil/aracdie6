import Navbar from "../components/Navbar";
import "../styles/globals.css";
import GlobalProvider from "../context/GlobalContext";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="grid px-5 my-14 lg:mb-0 md:mb-16 sm:px-20 md:px-32 ">
        <div className="border border-gray-400 flex flex-col col-span-12 overflow-hidden bg-white shadow-custom-light rounded-2xl lg:col-span-9">
          <GlobalProvider>
            {/* //!navbar */}
            <Navbar />
            {/* //!about */}
            <Component {...pageProps} />
          </GlobalProvider>
        </div>
      </div>
    </>
  );
}

export default MyApp;
