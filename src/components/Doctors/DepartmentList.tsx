import { TDepartment } from '@/types/department.type';
import React, { useState } from 'react';
import DoctorCard from './DoctorCard';

const DepartmentList = () => {
    const [departmentList, setDepartmentList] = useState([]);
    return (
        <>
        <ul className="gap-3.5 divide-y [&>*:not(:first-child)]:pt-3.5">
          {departmentList.map((department: TDepartment) => (
           <li key={department._Id}>
            <DoctorCard key={department._id} doctor={doctor}/>
           </li>
          ))}
        </ul>
        {/* <AppointmentModal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          selectDoctor={selectDoctor}
        /> */}
      </>
    );
};

export default DepartmentList;