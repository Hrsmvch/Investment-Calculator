export const sanitizeNumericInput = (e: React.FormEvent<HTMLInputElement>) => {
  let value = e.currentTarget.value;
  value = value.replace(/[^0-9]/g, ""); // Remove non-numeric characters
  value = value.replace(/^0+/, ""); // Remove leading zeros
  e.currentTarget.value = value;
};