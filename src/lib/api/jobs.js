const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

export const getJobs = async (companyId) => {
    const res = await fetch(`${baseURL}/api/jobs?companyId=${companyId}`);
    return res.json();
}