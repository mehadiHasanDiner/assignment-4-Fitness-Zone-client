
const AboutUs = () => {
    return (
      <>
        <div className="container mx-auto p-4 space-y-12">
          {/* Company Overview */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Company Overview</h2>
            <p className="text-lg">
              Our company has a rich history of providing the best gym equipment
              and accessories to help you achieve your fitness goals. Our
              mission is to empower people to lead healthier lives, and our
              vision is to become the leading provider of fitness solutions
              worldwide.
            </p>
          </div>

       

          {/* Contact Information */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
            <p className="text-lg">
              Have questions or feedback? We'd love to hear from you!
            </p>
            <p className="mt-2">Email: ahmedhimel000@gmail.com</p>
            <p>Phone: (+880) 01800000000 </p>
            <p>Address: 123 Fitness Hub, Jashore, Bangladesh</p>
          </div>
        </div>
      </>
    );
};

export default AboutUs;