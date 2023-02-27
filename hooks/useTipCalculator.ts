import { BigNumber } from "mathjs";
import { useState, useEffect } from "react";
import math from "../math";
import { useNumberSlide } from "./useNumberSlide";

export const TIPS = [0.05, 0.1, 0.15, 0.25].map((n) => math.bignumber(n));

export const useTipCalculator = () => {
  const [bill, setBill] = useState("");
  const [billNumber, setBillNumber] = useState<BigNumber>(math.bignumber(0));
  const tipSlide = useNumberSlide({
    initialBigNumber: TIPS[0],
    highLimit: 1,
    lowLimit: 0,
  });

  const peopleSlide = useNumberSlide({
    initialBigNumber: math.bignumber(1),
    lowLimit: 1,
  });

  const changeBill = setBill;

  useEffect(() => {
    try {
      const n = math.bignumber(bill);
      setBillNumber(n);
    } catch {}
  }, [bill]);

  const totalTip = math.multiply(billNumber, tipSlide.n);
  const tipPerPerson = math.divide(totalTip, peopleSlide.n);

  return {
    bill,
    changeBill,
    billNumber,
    tipSlide,
    peopleSlide,
    totalTip,
    tipPerPerson,
  };
};
