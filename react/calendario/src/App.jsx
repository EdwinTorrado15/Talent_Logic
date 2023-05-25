import { useState, useEffect, useContext } from "react";
import { CalendarHeader, Sidebar, Month, EventModal } from "./components";
import GlobalContext from "./context/GlobalContext";
import { getMonth } from "./util";

const App = () => {
  const [currenMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex, showEventModal } = useContext(GlobalContext);

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  return (
    <>
      {showEventModal && <EventModal />}
      <div className="h-screen flex flex-col">
        <CalendarHeader />
        <div className="flex flex-1">
          <Sidebar />
          <Month month={currenMonth} />
        </div>
      </div>
    </>
  );
};

export default App;
