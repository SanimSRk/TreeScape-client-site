import { FaCarSide } from 'react-icons/fa';
import { GrBusinessService } from 'react-icons/gr';
import { MdOutlinePayment } from 'react-icons/md';

const BestTree = () => {
  return (
    <div className="my-[120px] lg:p-0 p-6">
      <div className=" flex justify-around text-center gap-6">
        <div className="flex items-center p-6 border rounded-lg border-[#82b440] gap-3">
          <div>
            <FaCarSide className="text-6xl text-[#82b440]" />
          </div>
          <div>
            <h2 className="text-xl font-semibold">Free Delivery</h2>
            <p>Free shipping around the world for all orders over $120</p>
          </div>
        </div>
        <div className="flex items-center p-6 border rounded-lg border-[#82b440] gap-3">
          <div>
            <MdOutlinePayment className="text-6xl text-[#82b440]" />
          </div>
          <div>
            <h2 className="text-xl font-semibold">Safe Payment</h2>
            <p>With our payment gateway, don’t worry about your information</p>
          </div>
        </div>
        <div className="flex items-center p-6 border rounded-lg border-[#82b440] gap-3">
          <div>
            <GrBusinessService className="text-6xl text-[#82b440]" />
          </div>
          <div>
            <h2 className="text-xl font-semibold">Friendly Services</h2>
            <p>You have 30-day return guarantee for every single order</p>
          </div>
        </div>
      </div>

      <div className="mt-16 lg:flex gap-6 ">
        <div className=" lg:w-1/2">
          <img className="w-full  h-[80%]" src="/mango.jfif" alt="" />
        </div>
        <div className=" lg:w-1/2 lg:mt-0 mt-6">
          <p className="font-bold text-center text-[#82b440]">
            ----- Best Delivery -----
          </p>
          <h2 className=" text-xl font-bold mt-4">
            Ultra-Fast and Reliable Delivery Service for All Your Needs{' '}
          </h2>
          <p className="mt-3">
            Welcome to TreeScape, where we redefine the delivery experience with
            our Ultra-Fast and Reliable Delivery Service. Whether you're sending
            important documents, ordering your weekly groceries, or receiving
            that much-anticipated package, our service ensures your deliveries
            are handled with the utmost care and efficiency.
          </p>
          <p className="mt-4">
            {' '}
            <span className="font-semibold"> Speed and Efficiency:</span> With
            our state-of-the-art logistics system, we promise some of the
            fastest delivery times in the industry. Our dedicated team works
            around the clock to ensure your items are delivered swiftly, so you
            never have to wait long.
          </p>
          <p className="my-4">
            {' '}
            <span className="font-semibold">Real-Time Tracking:</span> Stay
            informed with our advanced real-time tracking feature. From dispatch
            to doorstep, you can monitor the progress of your delivery, ensuring
            peace of mind every step of the way.
          </p>{' '}
          <p>
            {' '}
            <span className="font-semibold"> Safety and Security:</span> Your
            packages are important to us. We take every precaution to handle
            them with care, ensuring they arrive at your doorstep in perfect
            condition.
          </p>
          <p className="my-4">
            {' '}
            <span className="font-semibold">
              Customer-Centric Approach:
            </span>{' '}
            Our customer support team is always here to help. Whether you have
            questions, need assistance with an order, or require special
            delivery instructions, we’re just a call or click away. Eco-Friendly
            Practices: We are committed to sustainability. Our eco-friendly
            delivery options and reduced carbon footprint initiatives make us a
            responsible choice for the environmentally conscious customer.
          </p>
          <div className="flex gap-8  mt-8">
            <button className="btn bg-base-200 font-bold  border-[#82b440] text-[#82b440]">
              Learning More
            </button>
            <button className="btn font-bold bg-[#82b440] border-none text-white">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestTree;
