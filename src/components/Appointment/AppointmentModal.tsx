"use client";
import { Modal, ModalContent, ModalHeader, ModalBody } from "@nextui-org/react";
import AppointmentForm from "./AppointmentForm";
import { TAppointmentModal } from "@/types/appointmentModal.type";

const AppointmentModal = ({
  isOpen,
  setIsOpen,
  selectDoctor,
}: TAppointmentModal) => {
  return (
    <>
      <Modal
        isOpen={isOpen}
        onOpenChange={setIsOpen}
        scrollBehavior="inside"
        placement="top-center"
        backdrop="blur"
        size="3xl"
        motionProps={{
          variants: {
            enter: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.3,
                ease: "easeOut",
              },
            },
            exit: {
              y: -30,
              opacity: 0,
              transition: {
                duration: 0.2,
                ease: "easeIn",
              },
            },
          },
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                <div className=" text-center">
                  <h2 className="text-primary text-2xl font-semibold">
                    Appointment Form
                  </h2>
                  <p className="text-sm font-medium font-tiroBangla mt-2">
                    ফর্ম পূরনে সমস্যা হলে আপনি সরাসরি কল দিয়েও আপনার
                    এপোয়েন্টমেন্ট বুক করতে পারবেন
                  </p>
                </div>
              </ModalHeader>
              <ModalBody className="mb-5">
                <AppointmentForm
                  onClose={onClose}
                  selectDoctor={selectDoctor}
                />
              </ModalBody>
              {/* <ModalFooter>
                <Button color="primary" onPress={onClose}>
                  Sign in
                </Button>
              </ModalFooter> */}
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default AppointmentModal;
