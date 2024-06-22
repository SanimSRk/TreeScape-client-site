const BestTree = () => {
  return (
    <div className="my-[120px] lg:p-0 p-6">
      <div className=" lg:w-4/5 mx-auto text-center">
        <h2 className="text-xl font-bold text-center mb-3">
          {' '}
          Discovering the Beauty and Wisdom of Trees
        </h2>
        <p>
          Step into the serene world of trees with Sylvan Sanctuaries. Our
          platform is dedicated to celebrating the majestic and diverse beauty
          of trees, from towering ancient giants to delicate saplings. Explore
          the intricate ecosystems that trees support and learn about their
          critical role in sustaining life on Earth. Through captivating visuals
          and insightful articles, Sylvan Sanctuaries invites you to deepen your
          connection to nature and appreciate the profound wisdom that trees
          have to offer. Join us on this journey to uncover the secrets of these
          silent guardians of our planet
        </p>
      </div>

      <div className="mt-12 lg:flex gap-6 ">
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
