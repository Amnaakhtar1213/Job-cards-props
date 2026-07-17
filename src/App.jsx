import { useState } from 'react'

import Card from './components/Card'

function App() {
  
  const jobOpenings = [
  {
    logo: "https://yt3.googleusercontent.com/bAseQlKvNmjdLQrvYWm_q3QDp8C8YKyYI-nYJewgOkPi0JU1_3X9oFgjrEdzkOlXzLGFxFbnsw=s900-c-k-c0x00ffffff-no-rj",
    company: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tags: ["Remote", "Contract"],
    payPerHour: 65,
    location: "Mountain View" 
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpZcdhwDoGEGGoAzaq8mMcKMCANbCIhS1pXEvV0zxc3KqcCrS_GNb-5ik&s=10",
    company: "Microsoft",
    datePosted: "9 days ago",
    post: "Backend Engineer",
    tags: ["Full-time", "Remote"],
    payPerHour: 70,
    location:  "Redmond"
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbGJniaab4ZZviaz1_cIZsamGeOpUnvx67_7IB1eSHMvfxSFeLZExY5LLz&s=10",
    company: "Amazon",
    datePosted: "4 days ago",
    post: "Cloud Solutions Architect",
    tags: ["Contract", "Remote"],
    payPerHour: 80,
    location: { country: "USA", city: "Seattle" }
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfF18w3_fwqCkMiefhHEPYOf_Zk3rhmuxB6tj9ifCKlUDfKX5k7ukf5mrG&s=10",
    company: "Apple",
    datePosted: "6 days ago",
    post: "iOS Developer",
    tags: ["Part-time", "Remote"],
    payPerHour: 75,
    location: "Cupertino" 
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtKL0i6QEC7_i86U2fQ09nqfFn3DrbPRvVhgyY0TMst7YDVAG6LOOakHZc&s=10",
    company: "Meta",
    datePosted: "8 days ago",
    post: "React Developer",
    tags: ["Contract", "Remote"],
    payPerHour: 68,
    location:  "Menlo Park" 
  },
  {
    logo: "https://about.netflix.com/images/meta/netflix-symbol-black.png",
    company: "Netflix",
    datePosted: "10 days ago",
    post: "UI/UX Designer",
    tags: ["Remote", "Contract"],
    payPerHour: 60,
    location:  "Los Gatos"
  },
  {
    logo: "https://www.logoai.com/uploads/articles/2024/03/05/17096195246566834.jpg",
    company: "Tesla",
    datePosted: "1 days ago",
    post: "Software Engineer",
    tags: ["Full-time", "Remote"],
    payPerHour: 72,
    location: "Palo Alto"
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7om5rtUEF9MFZm_bfGMMnzdWzrwDhYwGzHzcN8Q44tepv3oTBQIHgAV_F&s=10",
    company: "NVIDIA",
    datePosted: "7 days ago",
    post: "AI Research Engineer",
    tags: ["Contract", "Remote"],
    payPerHour: 85,
    location:  "Santa Clara" 
  },
  {
    logo: "https://images.samsung.com/is/image/samsung/assets/us/about-us/brand/logo/mo/360_197_1.png?$720_N_PNG$",
    company: "SAMSUNG",
    datePosted: "3 days ago",
    post: "Database Administrator",
    tags: ["Part-time", "Remote"],
    payPerHour: 55,
    location: "USA"
  },
  {
    logo: "https://cdn.mos.cms.futurecdn.net/z3bn6deaxmrjmQHNEkpcZE.jpg",
    company: "Twitter",
    datePosted: "15 days ago",
    post: "Cloud Engineer",
    tags: ["Contract", "Remote"],
    payPerHour: 62,
    location: "USA"
  }
];



  return (
    <>
      <div className="parent">

      {jobOpenings.map(function(elem, idx){
       return <Card key={idx} logo={elem.logo} company={elem.company} date={elem.datePosted} post={elem.post} tags={elem.tags} pay={elem.payPerHour} location={elem.location}/>
       
      })}

      </div>
    </>
  )
}

export default App
