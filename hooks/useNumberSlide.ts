import { useRef, useState } from "react";
import { BigNumber } from "mathjs";
import math from "../math";

interface Props {
  initialBigNumber: BigNumber;
  highLimit?: number;
  lowLimit?: number;
  longInterval?: number;
  lowInterval?: number;
}

export const useNumberSlide = ({
  initialBigNumber,
  highLimit = math.Infinity,
  lowLimit = -math.Infinity,
  longInterval = 50,
  lowInterval = 50,
}: Props) => {
  const [bigNumber, setBigNumber] = useState(initialBigNumber);
  const longAddRef = useRef<NodeJS.Timer>();
  const longSubtractRef = useRef<NodeJS.Timer>();

  const add = (n: BigNumber) => {
    setBigNumber((prev) => math.min(math.add(prev, n), 1000));
  };

  const longAdd = (n: BigNumber) => {
    longAddRef.current = setInterval(() => {
      add(n);
    }, longInterval);
  };

  const subtract = (n: BigNumber) => {
    setBigNumber((prev) => math.max(math.subtract(prev, n), lowLimit));
  };

  const longSubtract = (n: BigNumber) => {
    longSubtractRef.current = setInterval(() => {
      subtract(n);
    }, lowInterval);
  };

  const stopLongAdd = () => {
    clearInterval(longAddRef.current);
  };

  const stopLongSub = () => {
    clearInterval(longSubtractRef.current);
  };

  return {
    n: bigNumber,
    add,
    longAdd,
    longSubtract,
    subtract,
    stopLongAdd,
    stopLongSub,
  };
};
