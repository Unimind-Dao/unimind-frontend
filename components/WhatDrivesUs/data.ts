import { DrivingSectionType } from "../DrivingSection/DrivingSection";

type DataType = Pick<DrivingSectionType, "icon"> & {
  motivation: "knowledge" | "transparency" | "responsibility" | "collaboration";
};

export const data: DataType[] = [
  {
    motivation: "knowledge",
    icon: "bulb",
  },
  {
    motivation: "transparency",
    icon: "eye",
  },
  {
    motivation: "responsibility",
    icon: "gem",
  },
  {
    motivation: "collaboration",
    icon: "layers",
  },
];
