import { useQuery } from '@tanstack/react-query';
import useAxiosPublice from '../../../../Hooks/useAuthPublice/useAxiosPublice';
import useAuth from '../../../../Hooks/useAuth';

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
  return (
    <div className="overflow-x-auto font-sans">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className=" bg-[#82b440] text-[#FFFFFF]">
            <tr>
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
          {data.map((item, index) => (
            <tbody key={item._id}>
              {/* row 1 */}
              <tr>
                <th>{index + 1}</th>
                <td>{item?.email}</td>
                <td>{item?.commonName}</td>
                <td>{item?.lifespan}</td>
                <td>{item?.price}</td>
                <td>{item?.height}</td>
                <td>{item?.scientificName}</td>

                <th>
                  <button className="btn btn-ghost  bg-red-500 text-white">
                    Delete
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
