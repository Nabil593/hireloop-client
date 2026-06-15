import React from 'react';
import { getLoggedInRecruiterCompany } from '@/lib/api/companies';
import PostJobForm from './PostJobForm';

const postJobPage = async () => {

    const company = await getLoggedInRecruiterCompany();

    console.log(company)


    return (
        <div>
            <PostJobForm company={company}/>
        </div>
    );
};

export default postJobPage;