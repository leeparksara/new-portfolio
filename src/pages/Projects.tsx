import React from 'react';
import Header from '../assets/Header';
import Footer from '../assets/Footer';
import myZadaProject from '../images/iPhone 13 Pro.png';
import zadaVerify from '../images/iPhone 15 Pro.png';
import horizonProject from '../images/Mac Studio2.png';
import elProject from '../images/Mac Studio.png';
import Myworks from '../assets/Myworks';

const projectItems = [
  //this id should be added to the route path in app.tsx to display each project
  {
    id: 'myzada',
    title: 'MyZada',
    description: 'My zada is a web-app',
    imageUrl: myZadaProject,
  },
  {
    id: 'zada-verify',
    title: 'Zada Verify',
    description: 'Zada Verify is a web-app',
    imageUrl: zadaVerify,
  },
  {
    id: 'horizon',
    title: 'Horizon',
    description: 'Horizon is a web-app',
    imageUrl: horizonProject,
  },
  {
    id: 'urban',
    title: 'Urban',
    description: 'Urban is a web-app',
    imageUrl: elProject,
  },
];

const Projects: React.FC = () => {
  return (
    <div>
      <Header />
      <div className="projects-container">
        {projectItems.map((project, index) => (
          <Myworks key={index} {...project} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
