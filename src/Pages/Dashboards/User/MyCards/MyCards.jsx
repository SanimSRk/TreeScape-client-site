import { useQuery } from '@tanstack/react-query';
import useAxiosPublice from '../../../../Hooks/useAuthPublice/useAxiosPublice';
import useAuth from '../../../../Hooks/useAuth';
import { FcDeleteDatabase } from 'react-icons/fc';
import { MdDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';

const MyCards = () => {
  const axiosPublice = useAxiosPublice();
  const { user } = useAuth();
  const { data, refetch } = useQuery({
    queryKey: ['my-cards'],
    queryFn: async () => {
      const { data } = await axiosPublice.get(
        `/my-products?email=${user?.email}`
      );
      return data;
    },
  });

  const { data: productsData } = useQuery({
    queryKey: [user?.email, 'totle-tiems'],
    queryFn: async () => {
      const { data } = await axiosPublice.get(
        `/totle-products?email=${user?.email}`
      );
      console.log(data);
      return data;
    },
  });
  const payments = productsData?.reduce(
    (items, currentPrice) => items + parseFloat(currentPrice?.price),
    0
  );
  const totlePayment = payments?.toFixed(2);

  const handileClickDelete = id => {
    axiosPublice.delete(`/delete-myProducts/${id}`).then(res => {
      console.log(res.data);
      refetch();
    });
    console.log(id);
  };
  return (
    <div>
      <h2 className="text-2xl font-bold text-center mt-3">My card products</h2>
      <div className="uppercase flex justify-between items-center my-6">
        <p className=" font-bold">Total orders: {productsData?.length}</p>
        <p className=" font-bold">total price: ${totlePayment} </p>
        {data?.length > 0 ? (
          <Link to={'/dashboard/payments'}>
            <button className="btn font-bold bg-[#82b440] text-xl text-[#FFFFFF]">
              Pay
            </button>
          </Link>
        ) : (
          <button className="btn font-bold disabled bg-[#82b440] text-xl text-[#FFFFFF]">
            Pay
          </button>
        )}
      </div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead className=" bg-[#82b440]  text-[#FFFFFF]">
            <tr className=" uppercase">
              <th></th>
              <th>My Email</th>
              <th>Tree Name</th>
              <th>Life Span</th>
              <th>Price</th>
              <th>Height</th>
              <th>Scientific Name</th>
              <th>Delete</th>
            </tr>
          </thead>
          {data?.map((item, index) => (
            <tbody key={item._id}>
              {/* row 1 */}
              <tr>
                <th>{index + 1}</th>
                <td>{item?.email}</td>
                <td>{item?.commonName}</td>
                <td>{item?.lifespan} Year</td>
                <td>{item?.price}$</td>
                <td>{item?.height} Miter</td>
                <td>{item?.scientificName}</td>

                <th>
                  <button
                    onClick={() => handileClickDelete(item?._id)}
                    className="btn p-2 btn-ghost rounded-full  bg-red-500 text-white"
                  >
                    <MdDelete className="text-3xl text-white" />
                  </button>
                </th>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default MyCards;
