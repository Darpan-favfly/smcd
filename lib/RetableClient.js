const client = async (requestBody, retableId) => {
  const data = await fetch(`/api/retable`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ requestBody, retableId }),
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  return data;
};

export default client;
