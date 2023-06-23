import React, {useState, useEffect} from 'react'
import JobCards from '../Components/JobCards';
const Landing = () => {

    const [jobs, setJobs] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch("https://storage.googleapis.com/programiz-static/hiring/software/job-listing-page-challenge/data.json");

            const response = await data.json();
            console.log(data)

            setJobs(response)
        };
        fetchData();
    }, []);

    let displayJobs = Object.keys(jobs)
    // .filter((product) =>
    //   filter ? products[product].title.includes(filter) : true
    // )
    .map((job) => {
      return (
        <JobCards
          key={jobs[job].id}
          position={jobs[job].position}
          timing={jobs[job].timing}
          location={jobs[job].location}
          logo={jobs[job].company_logo}
          company={jobs[job].company}
          date={jobs[job].posted_on}
          keywords={jobs[job].keywords}
        />
      );
    });

  return (
    <div className='py-40'>
     {displayJobs}    
    </div>
  )
}

export default Landing