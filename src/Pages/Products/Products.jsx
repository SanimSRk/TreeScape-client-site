import { useQuery } from '@tanstack/react-query';
import useAxiosPublice from '../../Hooks/useAuthPublice/useAxiosPublice';
import { useEffect, useState } from 'react';
import ProductsCartd from './ProductsCartd';

const Products = () => {
  const axiosPublice = useAxiosPublice();
  const [productData, setProductData] = useState([]);
  const [itemPages, setItemPages] = useState(9);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemCount, setItemCount] = useState([]);

  const NumberOfPages = Math.ceil(itemCount / itemPages);
  const pages = [];
  for (let i = 0; i < NumberOfPages; i++) {
    pages.push(i + 1);
  }
  console.log(pages);
  const { data, refetch } = useQuery({
    queryKey: [itemPages, currentPage, itemCount, 'product-data'],
    queryFn: async () => {
      const { data } = await axiosPublice.get(
        `/products-paginagtion?page=${currentPage - 1}&size=${itemPages}`
      );
      setProductData(data);
      return data;
    },
  });
  useEffect(() => {
    axiosPublice.get('/count-pages').then(res => {
      console.log(res.data);
      setItemCount(res.data.count);
    });
  }, []);

  const handileClickPrev = () => {
    if (currentPage > 1) {
      const itmes = currentPage - 1;
      setCurrentPage(itmes);
    }
  };
  const handileClickNext = () => {
    if (currentPage < pages.length) {
      const itmes = currentPage + 1;
      setCurrentPage(itmes);
    }
  };

  const handileItemPage = e => {
    const value = e.target.value;
    setItemPages(value);
    setCurrentPage(1);
  };
  const handileClickSearchProducts = e => {
    e.preventDefault();
    const searchValue = e.target.search.value;
    console.log(searchValue);
    axiosPublice.get(`/user-searchData?search=${searchValue}`).then(res => {
      console.log(res.data);
      setProductData(res.data);
    });
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
                name="search"
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
      <div className="">
        <h2 className="text-xl font-bold text-center mb-6">Ours Collection</h2>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
          {productData?.map(product => (
            <ProductsCartd key={product._id} products={product}></ProductsCartd>
          ))}
        </div>
        <div className="flex justify-center gap-4 mt-10">
          <button
            onClick={handileClickPrev}
            className="btn bg-[#82b440] font-bold  text-white"
          >
            Prev
          </button>
          {pages?.map(item => (
            <button
              onClick={() => setCurrentPage(item)}
              className={
                currentPage == item ? 'btn bg-[#82b440]  text-white' : 'btn '
              }
              key={item}
            >
              {item}
            </button>
          ))}
          <button
            onClick={handileClickNext}
            className="btn bg-[#82b440] font-bold text-white"
          >
            Next
          </button>
          <select value={itemPages} onChange={handileItemPage} name="" id="">
            <option value="6">6</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="11">12</option>
            <option value="14">14</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Products;
