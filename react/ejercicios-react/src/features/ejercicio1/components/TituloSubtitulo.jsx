const TituloSubtitulo = ({ titulo, subtitulo }) => {
  return (
    <div className="w-full text-center">
      <h1 className="text-[50px] font-bold bg-gray-200">{titulo}</h1>
      <h3 className="text-2xl font-semibold bg-gray-500 text-white">
        {subtitulo}
      </h3>
    </div>
  );
};

export default TituloSubtitulo;
