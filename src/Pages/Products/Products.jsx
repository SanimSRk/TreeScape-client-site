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

  const handileClickeScientfice = e => {
    const scientfic = e.target.value;
    axiosPublice.get(`/scientfic-name?scient=${scientfic}`).then(res => {
      console.log(res.data);
      setProductData(res.data);
    });
  };

  const handileClickHeightRange = e => {
    if (e.target.value === '20') {
      axiosPublice.get(`/height-range?main=${5}&max=${20}`).then(res => {
        setProductData(res.data);
        console.log(res.data);
      });
    } else if (e.target.value === '30') {
      axiosPublice.get(`/height-range?main=${20}&max=${30}`).then(res => {
        setProductData(res.data);
        console.log(res.data);
      });
    } else if (e.target.value === '40') {
      axiosPublice.get(`/height-range?main=${30}&max=${40}`).then(res => {
        setProductData(res.data);
        console.log(res.data);
      });
    } else if (e.target.value === '50') {
      axiosPublice.get(`/height-range?main=${40}&max=${50}`).then(res => {
        setProductData(res.data);
        console.log(res.data);
      });
    } else if (e.target.value === '60') {
      axiosPublice.get(`/height-range?main=${50}&max=${60}`).then(res => {
        setProductData(res.data);
        console.log(res.data);
      });
    } else if (e.target.value === '70') {
      axiosPublice.get(`/height-range?main=${60}&max=${70}`).then(res => {
        setProductData(res.data);
        console.log(res.data);
      });
    } else if (e.target.value === '80') {
      axiosPublice.get(`/height-range?main=${70}&max=${80}`).then(res => {
        setProductData(res.data);
        console.log(res.data);
      });
    } else if (e.target.value === '90') {
      axiosPublice.get(`/height-range?main=${80}&max=${90}`).then(res => {
        setProductData(res.data);
        console.log(res.data);
      });
    } else if (e.target.value === '100') {
      axiosPublice.get(`/height-range?main=${90}&max=${100}`).then(res => {
        setProductData(res.data);
        console.log(res.data);
      });
    } else if (e.target.value === '110') {
      axiosPublice.get(`/height-range?main=${100}&max=${110}`).then(res => {
        setProductData(res.data);
        console.log(res.data);
      });
    }
  };
  const handileClickPriceRange = e => {
    if (e.target.value === '20') {
      axiosPublice.get(`/prices-range?main=${1}&max=${20}`).then(res => {
        setProductData(res.data);
        console.log(res.data);
      });
    } else if (e.target.value === '40') {
      axiosPublice.get(`/prices-range?main=${20}&max=${40}`).then(res => {
        setProductData(res.data);
        console.log(res.data);
      });
    } else if (e.target.value === '50') {
      axiosPublice.get(`/prices-range?main=${40}&max=${50}`).then(res => {
        setProductData(res.data);
        console.log(res.data);
      });
    } else if (e.target.value === '70') {
      axiosPublice.get(`/prices-range?main=${50}&max=${70}`).then(res => {
        setProductData(res.data);
        console.log(res.data);
      });
    } else if (e.target.value === '80') {
      axiosPublice.get(`/prices-range?main=${70}&max=${80}`).then(res => {
        setProductData(res.data);
        console.log(res.data);
      });
    } else if (e.target.value === '100') {
      axiosPublice.get(`/prices-range?main=${80}&max=${100}`).then(res => {
        setProductData(res.data);
        console.log(res.data);
      });
    } else if (e.target.value === '120') {
      axiosPublice.get(`/prices-range?main=${100}&max=${120}`).then(res => {
        setProductData(res.data);
        console.log(res.data);
      });
    } else if (e.target.value === '150') {
      axiosPublice.get(`/prices-range?main=${120}&max=${150}`).then(res => {
        setProductData(res.data);
        console.log(res.data);
      });
    } else if (e.target.value === '180') {
      axiosPublice.get(`/prices-range?main=${150}&max=${180}`).then(res => {
        setProductData(res.data);
        console.log(res.data);
      });
    } else if (e.target.value === '200') {
      axiosPublice.get(`/prices-range?main=${180}&max=${200}`).then(res => {
        setProductData(res.data);
        console.log(res.data);
      });
    } else if (e.target.value === '300') {
      axiosPublice.get(`/prices-range?main=${200}&max=${300}`).then(res => {
        setProductData(res.data);
        console.log(res.data);
      });
    } else if (e.target.value === '400') {
      axiosPublice.get(`/prices-range?main=${300}&max=${400}`).then(res => {
        setProductData(res.data);
        console.log(res.data);
      });
    } else if (e.target.value === '500') {
      axiosPublice.get(`/prices-range?main=${400}&max=${500}`).then(res => {
        setProductData(res.data);
        console.log(res.data);
      });
    }
  };

  //-------------pagination section--------------

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
      <div className="mb-[110px]">
        <div className="grid lg:grid-cols-3 border-2  my-12 border-[#82b440] py-14 px-12 shadow-lg  lg:w-[90%] mx-auto md:grid-cols-2 lg:gap-4 md:gap-3 grid-cols-1">
          <select
            onChange={handileClickeScientfice}
            className="border p-4"
            name=""
            id=""
          >
            <option disabled selected>
              Scientfic Name
            </option>
            <option value="Azadirachta indica">Azadirachta indica</option>
            <option value="Ficus benghalensis">Ficus benghalensis</option>
            <option value="Mangifera indica">Mangifera indica</option>
            <option value="Ficus religiosa">Ficus religiosa</option>
            <option value="Tectona grandis">Tectona grandis</option>
            <option value="Cocos nucifera">Cocos nucifera</option>
            <option value="Saraca asoca">Saraca asoca</option>
            <option value="Bambusoideae">Bambusoideae</option>
            <option value="Delonix regia">Delonix regia</option>
            <option value="Eucalyptus globulus">Eucalyptus globulus</option>
            <option value="Pinus">Pinus</option>
            <option value="Adansonia">Adansonia</option>
            <option value="Cedrus">Cedrus</option>
            <option value="Olea europaea">Olea europaea</option>
            <option value="Malus domestica">Malus domestica</option>
            <option value="Prunus serrulata">Prunus serrulata</option>
            <option value="Jacaranda mimosifolia">Jacaranda mimosifolia</option>
            <option value="Juglans regia">Juglans regia</option>
            <option value="Carica papaya">Carica papaya</option>
            <option value="Hevea brasiliensis">Hevea brasiliensis</option>
            <option value="Salix">Salix</option>
            <option value="Swietenia mahagoni">Swietenia mahagoni</option>
            <option value="Sequoia sempervirens">Sequoia sempervirens</option>
            <option value="Quercus">Quercus</option>
            <option value="Arecaceae">Arecaceae</option>
            <option value="Cupressus">Cupressus</option>
            <option value="Acer">Acer</option>
            <option value="Betula">Betula</option>
            <option value="Citrus limon">Citrus limon</option>
            <option value="Citrus sinensis">Citrus sinensis</option>
            <option value="Prunus domestica">Prunus domestica</option>
          </select>

          <select
            onChange={handileClickHeightRange}
            className="border p-4"
            name=""
            id=""
          >
            <option disabled selected>
              Height range
            </option>
            <option value="20">5-20 meters</option>
            <option value="30">20-30 meters</option>
            <option value="40">30-40 meters</option>
            <option value="50">40-50 meters</option>
            <option value="60">50-60 meters</option>
            <option value="70">60-70 meters</option>
            <option value="80">70-80 meters</option>
            <option value="90">80-90 meters</option>
            <option value="100">90-100 meters</option>
            <option value="110">100-110 meters</option>
            <option value="120">100-120 meters</option>
          </select>
          <select
            onChange={handileClickPriceRange}
            className="border p-4"
            name=""
            id=""
          >
            <option disabled selected>
              Price range
            </option>
            <option value="20">1-20$ </option>
            <option value="40">20-40$</option>
            <option value="50">40-50$</option>
            <option value="70">50-70$</option>
            <option value="80">70-80$</option>
            <option value="100">80-100$</option>
            <option value="120">100-120$</option>
            <option value="150">120-150$</option>
            <option value="180">150-180$</option>
            <option value="200">180-200$</option>
            <option value="300">200-300$</option>
            <option value="400">300-400$</option>
            <option value="500">400-500$</option>
          </select>
        </div>

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
