import { AddNewCard, PaymentCard } from "../components";
import styles from "../styles";

const PaymentMethods = () => {
  return (
    <>
      <section className="flex flex-col gap-y-3 mb-60">
        <h2 className="font-libre font-bold text-[32px] ">Payment methods</h2>

        <div
          className={`flex flex-row gap-x-5 bg-white shadow-lg rounded-[24px] p-5 ${styles.boxWidth}`}
        >
          <PaymentCard />
          <AddNewCard />
        </div>
      </section>
    </>
  );
};

export default PaymentMethods;
