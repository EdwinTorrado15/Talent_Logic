const Alerta = ({ descripcion }) => {
  return (
    <div className="w-1/2 text-sm bg-blue-200 p-2 text-blue-700 font-semibold rounded-md">
      {descripcion}
    </div>
  );
};

export default Alerta;
