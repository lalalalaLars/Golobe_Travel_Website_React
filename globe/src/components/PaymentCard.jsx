import { useSelector } from "react-redux";
import { bin, visa } from "../assets";

const PaymentCard = () => {
  const currentUser = useSelector((state) => state.user.currentUser);

  const maskAccountNumber = (accountNumber) => {
    // Replace all but the last 4 digits with asterisks
    const maskedNumber = accountNumber.replace(/\d/g, "*");
    return maskedNumber;
  };

  return (
    <>
      {currentUser ? (
        <div>
          {currentUser.paymentMethod ? (
            currentUser.paymentMethod.map((method, index) => (
              <div
                className="flex flex-col justify-between w-[378px] h-[212px] p-5 rounded-[12px] bg-mint"
                key={index}
              >
                <div className="flex flex-col justify-between">
                  <div className="flex flex-row justify-between">
                    <h3 className="font-montserrat font-semibold text-[24px] ">
                      {maskAccountNumber(method.accountNumber)}
                    </h3>
                    <img src={bin} alt={`${bin}`} />
                  </div>
                  <h2 className="font-montserrat font-semibold text-[32px] ">
                    {method.regNumber}
                  </h2>
                </div>
                <div className="flex flex-row justify-between">
                  <div>
                    <p className="font-montserrat font-medium text-[12px] ">
                      Valid Thru
                    </p>
                    <h3 className="font-montserrat font-semibold text-[20px] ">
                      {" "}
                      {method.validDate}{" "}
                    </h3>
                  </div>
                  <img src={visa} alt={`${visa}`} />
                </div>
              </div>
            ))
          ) : (
            <p>No payment method</p>
          )}
        </div>
      ) : (
        <p>No current user</p>
      )}
    </>
  );
};

export default PaymentCard;
