import type { JobType } from "job";
import { FaIndustry, FaDolly } from "react-icons/fa";
import { MdTwoWheeler, MdGridView } from "react-icons/md";

export const typeOptions: {
  name: JobType;
  icon: React.ReactNode;
  label: string;
}[] = [
  { name: "industry", icon: <FaIndustry />, label: "공장" },
  { name: "delivery", icon: <MdTwoWheeler />, label: "배달" },
  { name: "flex", icon: <MdGridView />, label: "통합" },
  { name: "cargo", icon: <FaDolly />, label: "상하차" },
];
