"use server";

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
console.log("--- DEBUG: Current API Base URL is:", baseURL);

export const createCompanies = async (newCompanyData) => {
  const res = await fetch(`${baseURL}/api/companies`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newCompanyData),
  });
  return res.json();
};
