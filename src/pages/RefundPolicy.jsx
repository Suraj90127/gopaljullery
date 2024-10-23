import React from "react";
import img1 from "../assets/white_help_1296x.jpg";
import Header from "../components/Header";
import Footer from "../components/Footer";

const RefundPolicy = () => {
  return (
    <div className="bg-[#ecf1f2]">
      <Header />
      <div>
        <img src={img1} alt="banner" className="w-full h-auto" />
      </div>

      <div className="w-full md:-[90%] lg:w-[80%] mx-auto p-2 md:p-6 text-left">
        <h2 className="text-xl md:text-3xl font-semibold mb-4">Shipping:</h2>
        <li className="text-sm md:text-base mb-4">
          <strong>Shipping Time: </strong> Orders are usually processed and
          shipped within 48 hours. Please note personalised items will take
          longer to process. If your order has both personalised and
          non-personalised items, the order will be split, and the
          non-personalised items will be delivered beforehand.
        </li>
        <li className="text-sm md:text-base mb-4">
          <strong> Shipping Charges:</strong> We charge Rs.70 for orders across
          India. Please note that we do not offer free shipping on international
          orders and returns.
        </li>
        <li className="text-sm md:text-base mb-4">
          <strong> Tracking: </strong> You will receive tracking details over
          WhatsApp, email and SMS, once the order is shipped.
        </li>
        <li className="text-sm md:text-base mb-4">
          <strong> Customs Duty & Taxes: </strong> Any customs duty or export
          duty depending on the country the order is being delivered to will be
          additionally imposed on the respective order and is to be entirely
          paid by the customer.
        </li>
        <h2 className="text-xl md:text-3xl font-semibold mb-4">
          Return Policy:
        </h2>
        <li className="text-sm md:text-base mb-4">
          We offer a 7-day return policy for all unused and unworn items, no
          questions asked. However, please note that the 7-day return does not
          apply to personalised jewellery, coins, utensils and God idols other
          than in cases of defective/spurious products. Khushbu Jewellers
          reserves the right to process refunds after checking the returned
          items.. Any shipping charges (if paid) at the time of placing the
          order are non refundable in case of returns{" "}
        </li>
        <li className="text-sm md:text-base mb-4">
          In case of missing items in return orders, i.e., where the customer
          claims to have returned multiple products but actual pickup doesn't
          include all said items, the company has a right to deduct an amount up
          to the full MRP of the missing product from the refund amount. This
          shall extend to promotional products, including but not limited to
          free gifts and silver coins.
        </li>
        <li className="text-sm md:text-base mb-4">
          All orders from out of Indian territory are non-returnable.
        </li>
        <h2 className="text-xl md:text-3xl font-semibold mb-4">
          Refund Policy:{" "}
        </h2>
        <p className="text-sm md:text-base mb-4">
          In case you have requested the return of any of your products, the
          refund of the same shall be initiated once we receive the product back
          in our warehouse and refund will be initiated after 48 hours of item
          received in our warehouse.{" "}
        </p>
        <p className="text-sm md:text-base mb-4">
          You can also avail replacement or exchange of your order as per your
          requirements. The conditions remain the same as those applicable to
          returns. The replacement will only be shipped after the initial return
          has been delivered.{" "}
        </p>
        <li className="text-sm md:text-base mb-4">
          You can reach out to our Customer Support team to return your order,
          they’ll guide you through the process. Mainly you have to return your
          order by yourself. You have to pack the parcel as it was received to
          you and have to make a video during packing all articles and then send
          it to address mentioned below. No shipping charges will be refundable
          that costs you for return your order.{" "}
        </li>
        <p className="text-sm md:text-base font-[600] mb-4">
          Khushbu Jewellers , Moti Mahal Tower, Dominoz Pizza, Near Children
          Park, 10th B Road, Sardarpura, Jodhpur, Rajasthan, 342003 Contact No.
          8233841034
        </p>
        <li className="text-sm md:text-base mb-4">
          All orders from out of Indian territory are non-refundable.
        </li>
        <li className="text-sm md:text-base mb-4">
          In the unlikely event that you receive an empty parcel or a missing
          product, we would request you to reach out to our customer support
          team for assistance within 48 hours of the package being delivered. We
          will be requiring a 360-degree unpacking video of the parcel for us to
          process the request further. Please note that insufficient evidence or
          visible signs of tampering with the packet may result in your claim
          not being honoured. In all such cases, the brand reserves the right to
          take the final decision.
        </li>
      </div>

      <Footer />
    </div>
  );
};

export default RefundPolicy;
