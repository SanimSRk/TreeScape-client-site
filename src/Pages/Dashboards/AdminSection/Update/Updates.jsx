import axios from 'axios';
import useAxiosPublice from '../../../../Hooks/useAuthPublice/useAxiosPublice';
import { useForm } from 'react-hook-form';
import { useLoaderData } from 'react-router-dom';

const Updates = () => {
  const axiosPublice = useAxiosPublice();
  const loderData = useLoaderData();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = data => {
    const {
      commonName,
      scientificName,
      height,
      price,
      lifespan,
      habitat,
      descriptiont,
      images,
    } = data;
    const img = images[0];
    console.log(img);
    const formData = new FormData();
    formData.append('image', img);
    axios
      .post(
        `https://api.imgbb.com/1/upload?key=${
          import.meta.env.VITE_IMG_HOSTING_KEY
        }`,
        formData
      )
      .then(res => {
        console.log(res.data.data.display_url);
        const image = res?.data?.data?.display_url;

        const itemsInfo = {
          commonName,
          scientificName,
          height,
          price,
          lifespan,
          habitat,
          descriptiont,
          image,
        };
        console.log(itemsInfo);
        axiosPublice
          .put(`/updates-products/${loderData?._id}`, itemsInfo)
          .then(res => {
            console.log(res.data);
          });
      });
  };
  return (
    <div>
      <div className="w-full">
        <div className=" w-full border-2 border-[#82b440] md:w-3/4 mx-auto mt-6 shadow-lg lg:py-[40px] py-12 px-8 lg:px-[50px]">
          <h2 className="text-3xl font-bold text-center ">
            <span className="text-[#82b440]">Update</span> Your Product
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex gap-4 mt-7">
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text">Tree Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Tree common name
"
                  defaultValue={loderData?.commonName}
                  className="input input-bordered border-[#82b440]"
                  required
                  {...register('commonName', { required: true })}
                />
              </div>
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text">Scientific Name</span>
                </label>
                <input
                  type="text"
                  defaultValue={loderData?.scientificName}
                  placeholder="Enter Scientific Name"
                  className="input input-bordered border-[#82b440]"
                  required
                  {...register('scientificName', { required: true })}
                />
              </div>
            </div>
            <div className="flex gap-4 my-3">
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter tree price"
                  defaultValue={loderData?.price}
                  className="input input-bordered border-[#82b440]"
                  required
                  {...register('price', { required: true })}
                />
              </div>
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text">Height</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter height"
                  defaultValue={loderData?.height}
                  className="input input-bordered border-[#82b440]"
                  required
                  {...register('height', { required: true })}
                />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text">Lifespan</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter lifespan"
                  defaultValue={loderData?.lifespan}
                  className="input input-bordered border-[#82b440]"
                  {...register('lifespan', { required: true })}
                />
              </div>
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text">Habitat</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter habitat"
                  defaultValue={loderData?.habitat}
                  className="input input-bordered border-[#82b440]"
                  required
                  {...register('habitat', { required: true })}
                />
              </div>
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <input
                type="text"
                placeholder="Enter descriptiont"
                defaultValue={loderData?.descriptiont}
                className="input input-bordered border-[#82b440]"
                required
                {...register('descriptiont', { required: true })}
              />
            </div>
            <div className="form-control w-full mt-2">
              <label className="label">
                <span className="label-text">Tree image url</span>
              </label>
              <input
                type="file"
                placeholder="Enter task_image_url"
                className="input  "
                required
                {...register('images', { required: true })}
              />
            </div>
            <input
              className="text-white btn w-full mt-6 bg-[#82b440]"
              type="submit"
              value="Update Product"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Updates;
