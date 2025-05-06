import "./App.css";
import TimeTempComponent from "./components/TimeTempContainer";
import TempTodayContainer from "./components/TodayContainer";

function App() {
  return (
    <>
      {/* Web View */}
      <div className="relative h-screen w-screen hidden md:block bg-center bg-cover bg-no-repeat bg-[url(/images/web.png)]">
        <div className="absolute inset-0 bg-black/20"></div>

        <div className="absolute inset-0 flex flex-row w-full">
          {/* TempTodayContainer Section */}
          <div className="w-3/8 h-screen flex items-center justify-center px-5 py-20">
            <TempTodayContainer />
          </div>

          {/* TimeTempComponent Section */}
          <div className="w-4/8 h-screen flex flex-col items-start justify-start py-20">
            <TimeTempComponent />
            <div
              className="flex flex-col gap-3 px-3 h-3/4 w-full text-white items-start text-left justify-start"
              style={{ fontFamily: "poppins" }}
            >
              <h4 className="text-start w-full">Random Text</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* mobile View */}
      <div className="h-screen w-screen block md:hidden w-full bg-center bg-cover bg-no-repeat  w-full bg-[url(/images/IMG_7147.png)]">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 flex flex-col w-full">
          {/* TempTodayContainer Section */}
          <div className="w-3/8 h-screen flex items-center justify-center px-5 py-20">
            <TempTodayContainer />
          </div>

          {/* TimeTempComponent Section */}
          <div className="w-4/8 h-screen flex flex-col items-start justify-start py-20">
            <TimeTempComponent />
            <div
              className="flex flex-col gap-3 px-3 h-3/4 w-full text-white items-start text-left justify-start"
              style={{ fontFamily: "poppins" }}
            >
              <h4 className="text-start w-full">Random Text</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
