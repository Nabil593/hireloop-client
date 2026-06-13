"use server"

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
console.log("--- DEBUG: Current API Base URL is:", baseURL);

export const createJob = async (newJobData) => {
    const res = await fetch(`${baseURL}/api/jobs`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newJobData),
    })
    return res.json();
}