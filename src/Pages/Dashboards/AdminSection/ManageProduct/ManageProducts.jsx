import { useQuery } from '@tanstack/react-query';
import { MdDelete } from 'react-icons/md';
import useAxiosPublice from '../../../../Hooks/useAuthPublice/useAxiosPublice';
import { GrUpdate } from 'react-icons/gr';
import { Link } from 'react-router-dom';

const ManageProducts = () => {
  const axiosPublice = useAxiosPublice();
  const { data, refetch } = useQuery({
    queryKey: ['manage-items'],
    queryFn: async () => {
      const { data } = await axiosPublice.get('/manageProducts');
      return data;
    },
  });
  const handileClickDelete = id => {
    axiosPublice.delete(`/delete-product/${id}`).then(res => {
      console.log(res.data);
      refetch();
    });
  };
  return (
    <div className="mt-4">
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead className=" bg-[#82b440]  text-[#FFFFFF]">
            <tr className=" uppercase">
              <th></th>

              <th>Tree Image</th>
              <th>Tree Name</th>
              <th>Life Span</th>
              <th>Price</th>
              <th>Height</th>
              <th>Scientific Name</th>
              <th>Habitat</th>
              <th>Update</th>
              <th>Action</th>
            </tr>
          </thead>
          {data?.map((item, index) => (
            <tbody key={item._id}>
              {/* row 1 */}
              <tr>
                <th>{index + 1}</th>

                <td>
                  <div className="mask mask-squircle h-12 w-12">
                    <img
                      src={item?.image}
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </td>
                <td>{item?.commonName}</td>
                <td>{item?.lifespan} Year</td>
                <td>{item?.price}$</td>
                <td>{item?.height} Miter</td>
                <td>{item?.scientificName}</td>
                <td>{item?.habitat}</td>

                <th>
                  <Link to={`/dashboard/updates/${item?._id}`}>
                    <button className="btn p-2 btn-ghost rounded-full  bg-red-500 text-white">
                      <GrUpdate className="text-3xl text-white" />
                    </button>
                  </Link>
                </th>
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

export default ManageProducts;
