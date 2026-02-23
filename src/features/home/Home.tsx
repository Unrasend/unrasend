import React from 'react';
import { NavLink, useParams, Navigate } from 'react-router-dom';
import { projects } from './ProjectsList';
import diploma from '../../assets/images/diploma.jpg';
import './Home.scss';

const Home: React.FC = () => {
  const { projectId } = useParams();
  const activeProject = projects.find(p => p.id === projectId);

  if (!activeProject && projectId) {
      return <Navigate to="/projects/planner-5d" replace />;
  }

  return (
  <>
    <header className="home-header">
      <h1 className="mb-1">
        Hello, I'm Vlad, seasoned software engineer specialized in building complex UI.
      </h1>
      <p className="text italic">
        Here you can take a look at the projects to which I have contributed.
      </p>
    </header>

    <label htmlFor="burger" className="button offset mobile-project-button">
      Choose Project
    </label>

    <section className="home-grid">
      <article className="home-card xs:hidden">
        <header>
          <h2 className="card-title">Projects</h2>
        </header>
        <div className="project-list-wrapper">
          {projects.map((project) => (
            <NavLink
              key={project.id}
              to={`/projects/${project.id}`}
              className={({ isActive }) =>
                `button offset project-nav-link ${isActive ? 'active' : ''}`
              }
            >
              {project.title}
            </NavLink>
          ))}
        </div>

        <br/>

        <header className="mb-md">
          <h2 className="card-title">Profile</h2>
        </header>
        <div className="profile-list">
          <div className="profile-row">
            <span className="profile-label text">Availability</span>
            <span>:</span>
            <span className="profile-value text">
              <span className="status-indicator"></span>1 month
            </span>
          </div>
          <div className="profile-row">
            <span className="profile-label text">Education</span>
            <span>:</span>
            <a href={diploma} target='_blank' className="profile-value">M.Sc. CS</a>
          </div>
          <div className="profile-row">
            <span className="profile-label text">Experience</span>
            <span>:</span>
            <span className="profile-value text">10 Years</span>
          </div>
        </div>
      </article>

      <article className="home-card">
        {activeProject?.content1}
      </article>
    </section>

    <section className="home-bottom-grid">
      <article className="home-card">
        {activeProject?.content2}
      </article>
    </section>
  </>
  );
};

export default Home;
