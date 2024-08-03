import { TMachine } from "@/types/machine.type";
import MachineCard from "@/components/Machines/MachineCard";
import { baseApi } from "@/api/api";

const getMachinesData = async () => {
  const res = await fetch(`${baseApi}/machine`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

const ContentArea = async () => {
  const machinesData = await getMachinesData();
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
      {machinesData?.data?.result.map((machine: TMachine) => (
        <MachineCard key={machine._id} machine={machine} />
      ))}
    </div>
  );
};

export default ContentArea;
