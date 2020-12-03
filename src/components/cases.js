import React from "react";


const caseStudies = [
  {
    id: 1,
    subtitle: "My Blog",
    title: "Read my latest blog",
    img: "blog.gif",
    url: "http://notasecretdiary.ml/"
  },
  {
    id: 2,
    subtitle: "My Movies",
    title: "Watch 'Serendipity'",
    img: "camera.gif",
    url: "https://youtu.be/dytKbn00ifw"
  },
  {
    id: 3,
    subtitle: "My Projects",
    title: "Check out my Github",
    img: "code.gif",
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
