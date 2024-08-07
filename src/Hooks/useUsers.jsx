import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import useAxiosPublice from './useAuthPublice/useAxiosPublice';

const useUsers = () => {
  const { user } = useAuth();
  const axiosPublice = useAxiosPublice();
  const { data: userData, refetch } = useQuery({
    queryKey: [user?.email, 'users-data'],
    queryFn: async () => {
      const { data } = await axiosPublice.get(
        `/users-datas?email=${user?.email}`
      );
      return data;
    },
  });
  return { userData, refetch };
};

export default useUsers;
