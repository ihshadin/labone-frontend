import { TMachine } from "@/types/machine.type";
import MachineCard from "@/components/Machines/MachineCard";
import SearchHandler from "@/utils/searchHandler";
import { getMachines } from "@/api/machines";


const ContentArea = async () => {
  const machines = await getMachines();
  return (
    <>
    <div className="mb-10 z-50">
      <SearchHandler/>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
      {machines?.map((machine: TMachine) => (
        <MachineCard key={machine._id} machine={machine} />
      ))}
    </div>
    </>
  );
};

export default ContentArea;
