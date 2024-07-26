const cad = (number) => {
  const formatter = new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: "CAD",
    minimumFractionDigits: 0,
  });

  return formatter.format(number);
};

export { cad };
