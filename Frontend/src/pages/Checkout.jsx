import * as React from "react";
import List from "@mui/material/List";

import CheckoutItem from "../components/CheckoutItem";

export default function Checkout() {
  return (
    <div className="flex flex-wrap checkout-items-container space-y-4 space-x-4  w-full justify-center ">
      <CheckoutItem />
      <CheckoutItem />
      <CheckoutItem />
    </div>
  );
}
