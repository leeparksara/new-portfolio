import React from 'react';

import Header from '../assets/Header';
import Footer from '../assets/Footer';
import myZadaProject from '../images/iPhone 13 Pro.png';
import zadaVerify from '../images/iPhone 15 Pro.png';
import horizonProject from '../images/Mac Studio2.png';
import elProject from '../images/Mac Studio.png';
import Myworks from '../assets/Myworks';
import eliteProjecrImage from '../images/tela.png'
const projectItems = [
  //this id should be added to the route path in app.tsx to display each project
 
  {
    id: 'myzada',
    title: 'MyZada',
    description: 'Elite Furniture Website',
    imageUrl: myZadaProject,
  },
   {
    id: 'elite',
    title: 'Elite',
    description: 'My Zada Credential Web-app',
    imageUrl: eliteProjecrImage ,
  },
  {
    id: 'zada-verify',
    title: 'Zada Verify',
    description: 'Zada Verify Credential Verifying Web-app',
    imageUrl: zadaVerify,
  },
  {
    id: 'horizon',
    title: 'Horizon',
    description: 'Horizon Resort Website',
    imageUrl: horizonProject,
  },
  {
    id: 'urban',
    title: 'Urban',
    description: 'Urban An Online Store',
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
