import { DrivingSectionType } from "../DrivingSection/DrivingSection";

type DataType = DrivingSectionType & {
  description: string;
  id: string;
};

export const data: DataType[] = [
  {
    id: "1",
    title: "Knowledge",
    icon: "bulb",
    description: `We only teach facts so that everyone can think for themselves and
    form their own opinion. We draw a line between one and the other.`,
  },
  {
    id: "2",
    title: "Transparency",
    icon: "eye",
    description: `We make our technical solutions available in the open-source formula
    and value direct communication, which is why we keep most
    conversations in public.`,
  },
  {
    id: "3",
    title: "Responsibility",
    icon: "gem",
    description: `We work in a self-organizing way, where everyone can propose their
    own initiative, be responsible for its execution and unite other
    people around it.`,
  },
  {
    id: "4",
    title: "Collaboration",
    icon: "layers",
    description: `We believe in the strength of the community and the benefits of
    belonging to a group. Decide what you want to get involved in and
    grow with us.`,
  },
];
