import { useContext } from "react";
import { PaymentContext } from "./Payment";

export const usePaymentContext = () => {
  const { clientSecret, statusClientSecret } = useContext(PaymentContext);

  return { clientSecret, statusClientSecret };
};
