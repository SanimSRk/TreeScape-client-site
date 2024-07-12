const OurProductCart = ({ pro }) => {
  const { name, image, price } = pro;
  return (
    <div className="shadow-lg hover:scale-105 rounded-lg p-6  bg-base-200 grid items-end">
      <img
        className="w-full object-fill  object-center h-[280px]"
        src={image}
        alt="undifine"
      />
      <h2 className="font-semibold mt-3">{name} </h2>
      <p className="mt-2"> Price :{price}$</p>

      <button className="btn mt-4 w-full bg-[#6a8c33] text-white">
        Add to Card
      </button>
    </div>
  );
};

export default OurProductCart;
