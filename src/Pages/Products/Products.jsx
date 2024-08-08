import { useQuery } from '@tanstack/react-query';
import useAxiosPublice from '../../Hooks/useAuthPublice/useAxiosPublice';
import { useState } from 'react';
import ProductsCartd from './ProductsCartd';

const Products = () => {
  const axiosPublice = useAxiosPublice();
  const [productData, setProductData] = useState([]);
  const { data, refetch } = useQuery({
    queryKey: ['product-data'],
    queryFn: async () => {
      const { data } = await axiosPublice.get('/products-shows');
      setProductData(data);
      return data;
    },
  });
  console.log(productData);
  const handileClickSearchProducts = e => {
    e.preventDefualt();
  };
  return (
    <div className="">
      <div className="grid mt-3 justify-center w-full items-center rounded-lg md:h-[420px] h-[320px] lg:h-[550px] bg-center bg-cover bg-[linear-gradient(90deg,rgb(21,21,21,0.7),rgba(21,21,21,0.7)100%),url(/pexels-enginakyurt-10364572.jpg)] ">
        {' '}
        <div className="">
          <form onSubmit={handileClickSearchProducts}>
            <div className=" flex items-center">
              <input
                className="shadow appearance-none  border-2 rounded-lg w-full border-[#82b440] md:w-[350px] lg:w-[450px]  input input-bordered text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-green-500 rounded-r-none"
                id="search"
                type="search"
                k
                placeholder="Search your products......"
                style={{ borderColor: '#82b440' }}
              />
              <button
                type="submit"
                className="btn  bg-[#82b440] text-whitess text-white font-semibold border-green-500 rounded-l-none"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="grid  my-[120px] lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        {productData?.map(product => (
          <ProductsCartd key={product._id} products={product}></ProductsCartd>
        ))}
      </div>
    </div>
  );
};

export default Products;
