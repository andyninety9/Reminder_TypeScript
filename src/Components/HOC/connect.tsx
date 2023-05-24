import React from "react";
import { debug, log } from "../constants";

export interface ExtraInfoType {
  debug: boolean;
  log: (value: any) => void;
}

export interface InjectedType {
  user: any;
}

export default function connect<P>(injectedProps: P) {
  return function <T>(Component: React.ComponentType<T & P>) {
    return function (props: Omit<T, keyof P>) {
      return <Component {...(props as T & {})} {...injectedProps} />;
    };
  };
}
