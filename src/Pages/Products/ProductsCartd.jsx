import useAuth from '../../Hooks/useAuth';
import useAxiosPublice from '../../Hooks/useAuthPublice/useAxiosPublice';

const ProductsCartd = ({ products }) => {
  const { user } = useAuth();
  const axiosPublice = useAxiosPublice();
  const {
    commonName,
    scientificName,
    height,
    price,
    lifespan,
    habitat,
    descriptiont,
    image,
    _id,
  } = products;

  const handileclickAddCard = () => {
    const productInfo = {
      commonName,
      scientificName,
      lifespan,
      price,
      height,
      image,
      email: user?.email,
      productId: _id,
    };
    axiosPublice.post('/addTo-cards', productInfo).then(res => {
      console.log(res.data);
    });
  };
  return (
    <div className="rounded-lg font-sans shadow-md p-4 bg-base-200 border-green-600 ">
      <img
        className="w-full  object-cover object-center h-64 "
        src={image}
        alt=""
      />
      <div className="flex justify-between  my-2">
        <p className="">
          {' '}
          <span className="font-semibold"> Name :</span> {commonName}
        </p>
        <p>
          {' '}
          <span className="font-semibold"> Price :</span> {price}$
        </p>
      </div>
      <div>
        <p>
          {' '}
          <span className="font-semibold"> Scientific Name :</span>{' '}
          {scientificName}
        </p>
        <p className="my-2">
          {' '}
          <span className="font-semibold"> Habitat :</span>
          {habitat}
        </p>
        <div className="flex justify-between">
          <p className="">
            {' '}
            <span className="font-semibold"> Height :</span> {height} years{' '}
          </p>
          <p>
            {' '}
            <span className="font-semibold"> Life Span :</span> {lifespan} years{' '}
          </p>
        </div>
        <button
          onClick={handileclickAddCard}
          className="btn w-full mt-4 bg-[#82b440] text-white"
        >
          {' '}
          Add To Card{' '}
        </button>
      </div>
    </div>
  );
};

export default ProductsCartd;
