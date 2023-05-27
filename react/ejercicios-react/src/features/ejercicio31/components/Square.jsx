const Square = ({ children, black }) => {
  const bgClass = black ? "bg-[#B59963]" : "bg-[#F0D9B5]";
  return <div className={`${bgClass} h-full w-full`}>{children}</div>;
};

export default Square;
