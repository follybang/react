import React from "react";
import moment from "moment";

const Transaction = ({ from, to, amount, rate, time }) => (
  <li class="transaction">
    <span class="transaction__date">{moment(time).format("D MMM")}</span>
    <span class="transaction__time">{moment(time).format("H:mm")}</span>
    <span class="transaction__assets">
      {from} → {to}
    </span>
    <span class="transaction__rate">{rate}</span>
    <span class="transaction__amount">{new Intl.NumberFormat("en-GB").format(amount)}</span>
  </li>
);

export default Transaction;
