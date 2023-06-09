import { useContext } from "react";
import GlobalContext from "../context/GlobalContext";
import logo from "../assets/logo.png";
import dayjs from "dayjs";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const CalendarHeader = () => {
  const { monthIndex, setMonthIndex } = useContext(GlobalContext);
  function handlePrevMonth() {
    setMonthIndex(monthIndex - 1);
  }
  function handleNextMonth() {
    setMonthIndex(monthIndex + 1);
  }
  function handleReset() {
    setMonthIndex(
      monthIndex === dayjs().month()
        ? monthIndex + Math.random()
        : dayjs().month()
    );
  }

  return (
    <header className="px-4 py-2 flex items-center">
      <img src={logo} alt="calendar" className="mr-2 w-12 h-12" />
      <h1 className="mr-10 text-xl text-gray-500 fond-bold">Calendario</h1>
      <button onClick={handleReset} className="border rounded py-2 px-4 mr-5">
        Hoy
      </button>
      <button onClick={handlePrevMonth}>
        <span className="cursor-pointer text-gray-600 mx-2">
          <AiOutlineArrowLeft />
        </span>
      </button>
      <button onClick={handleNextMonth}>
        <span className="cursor-pointer text-gray-600 mx-2">
          <AiOutlineArrowRight />
        </span>
      </button>
      <h2 className="ml-4 text-xl text-gray-500 font-bold">
        {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
      </h2>
    </header>
  );
};

export default CalendarHeader;
