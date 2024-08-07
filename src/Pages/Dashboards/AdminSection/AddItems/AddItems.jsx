import { useForm } from 'react-hook-form';

const AddItems = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = data => {
    console.log(data);
  };
  return (
    <div className="w-full">
      <div className=" w-full border-2 border-[#82b440] md:w-3/4 mx-auto mt-6 shadow-lg lg:py-[40px] py-12 px-8 lg:px-[50px]">
        <h2 className="text-3xl font-bold text-center ">
          <span className="text-[#82b440]">Add</span> Your Tasks
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex gap-4 mt-7">
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">Task_title</span>
              </label>
              <input
                type="text"
                placeholder="task_title
"
                className="input input-bordered border-[#82b440]"
                required
                {...register('task_title', { required: true })}
              />
            </div>
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">Task_detail</span>
              </label>
              <input
                type="text"
                placeholder="Enter task_detail"
                className="input input-bordered border-[#82b440]"
                required
                {...register('task_detail', { required: true })}
              />
            </div>
          </div>
          <div className="flex gap-4 my-3">
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">Task_quantity</span>
              </label>
              <input
                type="text"
                placeholder="Enter task_quantity"
                className="input input-bordered border-[#82b440]"
                required
                {...register('task_quantity', { required: true })}
              />
            </div>
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text"> Payable_amount </span>
              </label>
              <input
                type="text"
                placeholder="Enter payable_amount"
                className="input input-bordered border-[#82b440]"
                required
                {...register('payable_amount', { required: true })}
              />
            </div>
          </div>
          <div className="flex gap-4">
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">Completion_date</span>
              </label>
              <input
                type="date"
                name=""
                id=""
                className="input input-bordered border-[#82b440]"
                {...register('completion_date', { required: true })}
              />
            </div>
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">Submission_info</span>
              </label>
              <input
                type="text"
                placeholder="Enter submission_info"
                className="input input-bordered border-[#82b440]"
                required
                {...register('submission_info', { required: true })}
              />
            </div>
          </div>
          <div className="form-control w-full mt-2">
            <label className="label">
              <span className="label-text">Task_image_url</span>
            </label>
            <input
              type="file"
              placeholder="Enter task_image_url"
              className="input  "
              required
              {...register('image', { required: true })}
            />
          </div>
          <input
            className="text-white btn w-full mt-6 bg-[#82b440]"
            type="submit"
            value="Add Task"
          />
        </form>
      </div>
    </div>
  );
};

export default AddItems;
