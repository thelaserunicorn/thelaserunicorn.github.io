import React from "react";
import { ReactComponent as CasesNext } from "../assets/arrow-right.svg";
import { ReactComponent as CasesPrev } from "../assets/arrow-left.svg";

import { ReactComponent as ImageNext } from "../assets/curology.png";


const caseStudies = [
  {
    id: 1,
    subtitle: "My Blog",
    title: "asdklsald sadsad sdasadsadlew",
    img: "curology.png",
    url: "http://github.com/thelaserunicorn"
  },
  {
    id: 2,
    subtitle: "My Movies",
    title: "loremipmsi ja skdasd kassdalsda",
    img: "yourspace-min.png",
    url: "http://github.com/thelaserunicorn"
  },
  {
    id: 3,
    subtitle: "My Projects",
    title: "Check out my Github !",
    img: "test.gif",
    url: "http://github.com/thelaserunicorn"
  }
];

const Cases = () => {
  return (
    <section className='cases'>
      <div className='container-fluid'>
        <div className='row'>
          {caseStudies.map(caseItem => (
            <div className='case' key={caseItem.id}>
              <div className='case-details'>
                <span>{caseItem.subtitle}</span>
                <h2><a href={caseItem.url}>{caseItem.title}</a></h2>
              </div>
              <div className='case-image'>
                <img
                  src={require(`../assets/${caseItem.img}`).default}
                  alt={caseItem.title}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cases;
