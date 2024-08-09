"use client";
import AppointmentModal from "@/components/Appointment/AppointmentModal";
import React, { useState } from "react";

const AppointmentModalSection = ({ doctorID }: { doctorID: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectDoctor, setSelectDoctor] = useState("");

  const handleOpenModal = (id: string) => {
    setSelectDoctor(id);
    setIsOpen(true);
  };

  return (
    <>
      <div>
        <button
          onClick={() => handleOpenModal(doctorID)}
          className="lab-one-btn text-white"
        >
          <span>Appointment</span>
        </button>
      </div>
      <AppointmentModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        selectDoctor={selectDoctor}
      />
    </>
  );
};

export default AppointmentModalSection;
