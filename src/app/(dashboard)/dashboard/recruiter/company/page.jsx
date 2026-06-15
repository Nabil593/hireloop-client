import React from 'react';
import RecruiterCompany from './CompanyProflie';
import { getUserSession } from '@/lib/actions/session';
import { getRecruiterCompany } from '@/lib/api/companies';

const CompanyPage = async () => {

    const user = await getUserSession();
    const company = getRecruiterCompany(user?.id);
    // console.log(user);

    return (
        <div>
            <RecruiterCompany recruiter = {user} recruiterCompany = {company}/>
        </div>
    );
};

export default CompanyPage;