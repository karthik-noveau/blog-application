export const mongodbDateConvertion = (dateValue) => {
  // The ISO string from MongoDB
  const isoString = dateValue;

  // Convert the ISO string to a Date object
  const date = new Date(isoString);

  // Format the Date object into a readable string
  const formattedDate = date.toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    // hour: "2-digit",
    // minute: "2-digit",
    // second: "2-digit",
    // timeZoneName: "short",
  });

  return formattedDate;
};
