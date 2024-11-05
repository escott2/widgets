const isValidZipCode = (zipCode: string) => {
  const zipCodeRegex = /^\d{5}$/;
  return zipCodeRegex.test(zipCode);
};

export { isValidZipCode };
