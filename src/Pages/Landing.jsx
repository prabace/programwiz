import React, { useState, useEffect } from "react";
import JobCards from "../Components/JobCards";
import green from "../Assets/green.jpg";
import Filter from "../Components/Filter";
import { useSelector } from "react-redux";
const Landing = () => {
  const [jobs, setJobs] = useState([]);
     const currentDate = new Date().getTime()

  const filter = useSelector(
    (state) => state.jobFilter.filter
    )

    useEffect(() => {
      const fetchData = async () => {
        const data = await fetch(
          "https://storage.googleapis.com/programiz-static/hiring/software/job-listing-page-challenge/data.json"
        );

        const response = await data.json();
        console.log(data);

        setJobs(response);
      };
      fetchData();
    }, []);

    

    let displayJobs = Object.keys(jobs)
     .filter((job) => (filter ? jobs[job].keywords.toString().toLowerCase().includes(filter.toLowerCase()) : true))
      .map((job) => {
        return (
          <JobCards
            key={jobs[job].id}
            position={jobs[job].position}
            timing={jobs[job].timing}
            location={jobs[job].location}
            logo={jobs[job].company_logo}
            company={jobs[job].company}
            date= {Math.floor(( currentDate - new Date(jobs[job].posted_on).getTime())/(1000*60*60*24))}
            keywords={jobs[job].keywords}
          />
        );
      });

    return (
      <div>
        <div className="">
          <img alt="wallpaper" className="object-cover w-screen h-[200px]" src={green} />
        </div>
        <div className="">
            <Filter/>
        </div>
        <div className="mt-40">
            {displayJobs}
        </div>
      </div>
    );
  };

export default Landing;
