import Navbar from "../components/Navbar";
import "../styles/globals.css";
import GlobalProvider from "../context/GlobalContext";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="grid p-5  md:p-12 ">
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
