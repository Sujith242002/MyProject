import React from "react";

const Card = ({ children }) => (
  <div className="card flex flex-col gap-4">{children}</div>
);

const CardHeader = ({ children }) => (
  <div className="card-header">{children}</div>
);

const CardTitle = ({ children }) => (
  <h3 className="card-title font-bold text-xl text-black">{children}</h3>
);

const CardContent = ({ children }) => (
  <p className="card-content text-white text-sm mt-4">{children}</p>
);

const Reviews = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-green-700">
              What Our Customers Say
            </h2>
            <p className="max-w-[700px] text-gray-700 md:text-xl lg:text-base xl:text-xl">
              Hear from our satisfied customers about their experience with our
              interior design services.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <div className="relative border rounded-lg h-40 p-4 border-orange-600 bg-gradient-to-r from-orange-400 to-red-400 transition duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl">
            <Card>
              <CardHeader>
                <CardTitle>Srinivas</CardTitle>
              </CardHeader>
              <CardContent>
                "The team at Interior Design Co. transformed my living room into
                a cozy, stylish oasis. I couldn't be happier with the results!"
              </CardContent>
            </Card>
          </div>
          <div className="relative border rounded-lg h-40 p-4 border-orange-600 bg-gradient-to-r from-orange-400 to-red-400 transition duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl">
            <Card>
              <CardHeader>
                <CardTitle>Shiva Kumar</CardTitle>
              </CardHeader>
              <CardContent>
                "I was amazed by the attention to detail and the personalized
                touch the Interior Design Co. team brought to my project. Highly
                recommended!"
              </CardContent>
            </Card>
          </div>
          <div className="relative border rounded-lg h-40 p-4 border-orange-600 bg-gradient-to-r from-orange-400 to-red-400 transition duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl">
            <Card>
              <CardHeader>
                <CardTitle>Venkatesh</CardTitle>
              </CardHeader>
              <CardContent>
                "The team at Interior Design Co. listened to my needs and
                created a space that perfectly reflects my personal style. I'm
                thrilled with the results."
              </CardContent>
            </Card>
          </div>
          <div className="relative border rounded-lg h-40 p-4 border-orange-600 bg-gradient-to-r from-orange-400 to-red-400 transition duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl">
            <Card>
              <CardHeader>
                <CardTitle>Kumari</CardTitle>
              </CardHeader>
              <CardContent>
                "I was blown away by the creativity and professionalism of the
                Interior Design Co. team. They turned my dated apartment into a
                modern, functional space."
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
