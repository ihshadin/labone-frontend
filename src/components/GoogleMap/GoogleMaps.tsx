import React from "react";

const GoogleMaps = () => {
  return (
    <div className="relative md:h-0 h-[300px] overflow-hidden pb-[30%] mb-12 md:mb-28">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24916.2012893153!2d90.25276115115528!3d23.963086529643817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755e75202a52df9%3A0xca2abfd3a45345ef!2sLab%20One%20Hospital!5e0!3m2!1sen!2sbd!4v1723553970720!5m2!1sen!2sbd"
        width="600"
        height="450"
        className="h-full w-full top-0 bottom-0 absolute"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMaps;
