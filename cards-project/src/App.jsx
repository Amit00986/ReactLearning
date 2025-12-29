import "./index.css";

import Card from "./components/card";

const App = () => {
    const jobOpening = [ {
    "id": 1,
    "company": "Amazon",
    "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_GrrlEgOBd_dF5xg0YXdmyz510b5IlXJ8-g&s",
    "posted": "5 days ago",
    "title": "Senior UI/UX Designer",
    "type": "Part Time",
    "level": "Senior Level",
    "salary": "$120/hour",
    "location": "Mumbai"
  },
  {
    "id": 2,
    "company": "Google",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    "posted": "2 days ago",
    "title": "Frontend Developer",
    "type": "Full Time",
    "level": "Mid Level",
    "salary": "$100/hour",
    "location": "Bangalore"
  },
  {
    "id": 3,
    "company": "Microsoft",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    "posted": "1 week ago",
    "title": "React Developer",
    "type": "Remote",
    "level": "Senior Level",
    "salary": "$130/hour",
    "location": "Remote"
  },
  {
    "id": 4,
    "company": "Meta",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png",
    "posted": "3 days ago",
    "title": "UI Engineer",
    "type": "Full Time",
    "level": "Mid Level",
    "salary": "$110/hour",
    "location": "Hyderabad"
  },
  {
    "id": 5,
    "company": "Netflix",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    "posted": "1 day ago",
    "title": "Product Designer",
    "type": "Contract",
    "level": "Senior Level",
    "salary": "$140/hour",
    "location": "Remote"
  },
  {
    "id": 6,
    "company": "Spotify",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg",
    "posted": "4 days ago",
    "title": "UX Researcher",
    "type": "Full Time",
    "level": "Mid Level",
    "salary": "$105/hour",
    "location": "Bangalore"
  },
  {
    "id": 7,
    "company": "Flipkart",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/1/1b/Flipkart_logo.png",
    "posted": "2 days ago",
    "title": "Product Designer",
    "type": "Full Time",
    "level": "Senior Level",
    "salary": "$95/hour",
    "location": "Bangalore"
  },
  {
    "id": 8,
    "company": "Swiggy",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/1/13/Swiggy_logo.png",
    "posted": "3 days ago",
    "title": "UX Designer",
    "type": "Contract",
    "level": "Mid Level",
    "salary": "$90/hour",
    "location": "Remote"
  },
  {
    "id": 9,
    "company": "Zomato",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/7/75/Zomato_logo.png",
    "posted": "6 days ago",
    "title": "UI Engineer",
    "type": "Full Time",
    "level": "Junior",
    "salary": "$70/hour",
    "location": "Delhi"
  },
  {
    "id": 10,
    "company": "Adobe",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Systems_logo_and_wordmark.svg",
    "posted": "Today",
    "title": "Visual Designer",
    "type": "Remote",
    "level": "Senior Level",
    "salary": "$150/hour",
    "location": "Remote"
  }]

  return (
    
    
    <div className="parent">
      {
      jobOpening.map((job) => (
        <Card
          key={job.id}
          logo={job.logo}
          company={job.company}
          posted={job.posted}
          title={job.title}
          type={job.type}
          salary={job.salary}
          location={job.location}
        />
      ))}
    </div>
  );
};
export default App;
