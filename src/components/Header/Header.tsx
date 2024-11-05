import React from "react";
import { StyleHeader } from "./Header.style";

type THeader = {
  title?: string;
};

export const Header = ({ title }: THeader) => {
  return (
    <StyleHeader>
      <div>{title}</div>
    </StyleHeader>
  );
};
