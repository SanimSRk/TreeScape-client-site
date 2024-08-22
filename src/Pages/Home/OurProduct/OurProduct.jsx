import { useQuery } from '@tanstack/react-query';
import OurProductCart from './OurProductCart';
import useAxiosPublice from '../../../Hooks/useAuthPublice/useAxiosPublice';

const OurProduct = () => {
  const axiosPublice = useAxiosPublice();
  const { data: product } = useQuery({
    queryKey: ['products-data'],
    queryFn: async () => {
      const { data } = await axiosPublice('/Product-home');
      return data;
    },
  });

  return (
    <div>
      <div className="text-center">
        <h2 className="text-xl font-bold">Featured Products </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12 gap-6">
        {product?.map(pro => (
          <OurProductCart key={pro.id} pro={pro}></OurProductCart>
        ))}
      </div>
      <div className="text-center mt-7">
        <button className="btn bg-[#6a8c33] font-semibold text-white">
          See More
        </button>
      </div>
    </div>
  );
};

export default OurProduct;
