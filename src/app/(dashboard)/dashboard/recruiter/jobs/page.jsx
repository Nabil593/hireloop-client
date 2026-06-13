import { getJobs } from '@/lib/api/jobs';
import React from 'react';

const RecruiterJobs = async () => {

    const CompanyId = '6a2cce4697d9b64ff242870a';
    const jobs = await getJobs(CompanyId);

    console.log(jobs);


    return (
        <div>
            <h2>Recruiter Jobs</h2>
        </div>
    );
};

export default RecruiterJobs;