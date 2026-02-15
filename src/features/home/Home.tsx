import React from 'react';
import { NavLink, useParams, Navigate } from 'react-router-dom';
import { projects } from './ProjectsList';

const Home: React.FC = () => {
  const { projectId } = useParams();
  const activeProject = projects.find(p => p.id === projectId);

  if (!activeProject && projectId) {
      return <Navigate to="/projects/planner-5d" replace />;
  }

  return (
  <>
    <header className="mb-3xl border-l-1 border-f-1 pl-md">
      <h1 className="mb-1">
        Hello, I'm Vlad, seasoned software engineer specialized in building complex UI.
      </h1>
      <p className="text italic">
        Here you can take a look at the projects to which I have contributed.
      </p>
    </header>

    <section className="dashboard-grid">
      <article className="section-block">
        <header>
          <h2>Projects</h2>
        </header>
        <div className="space-y-sm h-full flex flex-col items-start">
          {projects.map((project) => (
            <NavLink
              key={project.id}
              to={`/projects/${project.id}`}
              className={({ isActive }) =>
                `link h1 !text-xl w-full !h-[62px] block ${isActive ? '!text-active' : ''}`
              }
            >
              -&nbsp;{project.title}
            </NavLink>
          ))}
        </div>

        <br/>

        <header className="mb-md">
          <h2>Profile</h2>
        </header>
        <div className="space-y-sm">
          <div className="block-row">
            <span className="block-label text">Availability&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</span>
            <span className="block-value flex items-center text">
              <span className="status-indicator"></span>1 month
            </span>
          </div>
          <div className="block-row">
            <span className="block-label text">Education&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</span>
            <span className="block-value text">M.Sc. CS</span>
          </div>
          <div className="block-row">
            <span className="block-label text">Experience&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</span>
            <span className="block-value text">10 Years</span>
          </div>
          <div className="block-row">
            <span className="block-label text">Time Zones&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</span>
            <span className="block-value text">All US</span>
          </div>
          <div className="block-row">
            <span className="block-label text">Preferred Location:</span>
            <span className="block-value text">Remote</span>
          </div>
        </div>
      </article>

      <article className="section-block grid-cols-2">
        {activeProject?.content1}
      </article>
    </section>

    <section className="dashboard-grid-1">
      <article className="section-block">
        {activeProject?.content2}
      </article>
    </section>
  </>
  );
};

export default Home;
