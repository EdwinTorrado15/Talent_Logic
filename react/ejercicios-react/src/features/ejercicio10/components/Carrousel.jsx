import Carousel from "react-material-ui-carousel";

const Carrousel = ({ images }) => {
  return (
    <Carousel
      indicators={false}
      navButtonsAlwaysVisible={true}
      navButtonsProps={{
        style: {
          backgroundColor: "#3A53EE",
        },
      }}
      duration={600}
    >
      {images.map((img, index) => (
        <div key={index}>
          <img
            src={img}
            alt="slider"
            style={{ height: "97vh", width: "100%" }}
          />
        </div>
      ))}
    </Carousel>
  );
};

export default Carrousel;
