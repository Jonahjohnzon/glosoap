import React from "react";

const Maps = () => {
  return (
    <div className="  bg-dak">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d738209.2402073466!2d-79.378058!3d43.718241!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb90d7c63ba5%3A0x323555502ab4c477!2sToronto%2C%20ON!5e0!3m2!1sen!2sca!4v1705322612552!5m2!1sen!2sca"
        className=" w-full h-[550px]"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Maps;