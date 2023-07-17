import { atom } from "recoil";

export const addCount = atom<number>({
  key: "addCount",
  default: 0,
});
