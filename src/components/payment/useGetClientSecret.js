import { useEffect, useState } from "react";
import { stripePaymentURL } from "../../constants/const";

export const useGetClientSecret = () => {
  const [statusClientSecret, setStatusClientSecret] = useState("idle");
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    const getClientSecret = async () => {
      setStatusClientSecret("pending");
      try {
        const response = await fetch(`${stripePaymentURL}`, {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify({ amount: 5000, paymentCurrency: "usd" }),
        });

        if (!response.ok) {
          setStatusClientSecret("error");
          const error = await response.text();
          throw new Error(`Unable to fetch client secret Error => ${error}`);
        }

        const responseText = await response.text();
        const data = JSON.parse(responseText);

        setClientSecret(data.data.clientSecret);
        setStatusClientSecret("success");

        return data;
      } catch (err) {
        setStatusClientSecret("error");
        throw new Error(
          `Unable to fetch client secret Error => ${err.message}`,
        );
      }
    };

    getClientSecret();
  }, []);

  return { clientSecret, statusClientSecret };
};
