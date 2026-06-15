import { getUserSession } from "../actions/session";

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

export const getRecruiterCompany = async (recruiterId) => {
    const res = await fetch(`${baseURL}/api/my/companies?recruiterId=${recruiterId}`);
    return res.json();
}

export const getLoggedInRecruiterCompany =  async () => {
    const user = await getUserSession();
    // console.log("Company Data Server:", user)
    return getRecruiterCompany(user?.id)
}