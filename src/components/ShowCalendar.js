import React, { useEffect } from "react";

const ShowCalendar = () => {
  useEffect(() => {
    // Get the container for embedding content
    const embedDiv = document.getElementById("embed-container");

    // Clear any previously rendered content in the container
    embedDiv.innerHTML = "";

    // Create and append the new script
    const script = document.createElement("script");
    script.id = "fw_script"; // Unique ID for the script
    script.src = "https://fourthwalltickets.com/embed.js?v=5";
    script.setAttribute("data-theatre", "marktwainmondays");
    script.setAttribute("data-type", "shows");
    script.setAttribute("data-view", "cards");
    script.async = true;

    embedDiv.appendChild(script); // Add the script to the container

    // Cleanup: Remove the script and clear content when the component unmounts
    return () => {
      if (embedDiv) {
        embedDiv.innerHTML = ""; // Clear the container completely
      }
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  return <div id="embed-container"></div>; // The container for rendering cards
};

export default ShowCalendar;
