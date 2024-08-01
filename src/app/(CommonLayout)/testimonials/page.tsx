import AllTestimonial from '@/components/Testimonial/AllTestimonial';
import TestimonialForm from '@/components/Testimonial/TestimonialForm';
import Breadcamp from '@/utils/Breadcamp';
import React from 'react';

const page = () => {
    return (
        <>
        <Breadcamp title={"Testimonials"}/>
           <TestimonialForm/> 
           <AllTestimonial/>
        </>
    );
};

export default page;