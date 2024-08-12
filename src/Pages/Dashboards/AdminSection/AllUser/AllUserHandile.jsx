import { useQuery } from '@tanstack/react-query';
import { MdDelete } from 'react-icons/md';
import useAxiosPublice from '../../../../Hooks/useAuthPublice/useAxiosPublice';

const AllUserHandile = () => {
  const axiosPublice = useAxiosPublice();
  const { data, refetch } = useQuery({
    queryKey: ['all-user'],
    queryFn: async () => {
      const { data } = await axiosPublice.get('/all-userData');
      return data;
    },
  });
  const handileClickDelete = id => {
    axiosPublice.delete(`/user-delete/${id}`).then(res => {
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
              <th>User Name</th>
              <th>User Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          {data?.map((item, index) => (
            <tbody key={item._id}>
              {/* row 1 */}
              <tr>
                <th>{index + 1}</th>

                <td>{item?.fullName}</td>
                <td>{item?.email}</td>
                <td>{item?.role}</td>
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

export default AllUserHandile;
