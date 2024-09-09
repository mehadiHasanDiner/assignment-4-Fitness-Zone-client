
const AboutUs = () => {
    return (
      <>
        <div className="container mx-auto p-4 space-y-12">
          {/* Company Overview */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Company Overview</h2>
            <p className="text-lg">
              Our company has a long-standing tradition of delivering
              top-quality gym equipment and accessories designed to help you
              reach your fitness goals. Our mission is to inspire individuals to
              live healthier lives, and our vision is to be the global leader in
              fitness solutions.
            </p>
          </div>

          {/* Contact Information */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
            <p className="text-lg">
              Got questions or feedback? We are eager to hear from you!
            </p>
            <p className="mt-2">Email: mehadi@gmail.com</p>
            <p>Phone: (+880) 0964500045 </p>
            <p>Address: 123 GYM Shop, Dhaka-1000, Bangladesh</p>
          </div>
        </div>
      </>
    );
};

export default AboutUs;