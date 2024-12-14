import React, { useEffect } from "react";

const ShowCalendar = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.id = "fw_script";
    script.src = "https://fourthwalltickets.com/embed.js?v=6";
    script.setAttribute("data-theatre", "marktwainmondays");
    script.setAttribute("data-type", "shows");
    script.setAttribute("data-view", "calendar");
    script.async = true;

    // Append the script to the div where you want to load the calendar
    const embedDiv = document.getElementById("calendar-container");
    embedDiv.appendChild(script);

    // Clean up script on component unmount
    return () => {
      embedDiv.removeChild(script);
    };
  }, []);

  return <div id="calendar-container"></div>;
};

export default ShowCalendar;
