// About page
import '../css/meetteam.css';

import woman1 from '../assets/woman1.jpg';
import man1 from '../assets/man1.jpg';
import woman2 from '../assets/woman2.jpg';
import man2 from '../assets/man2.jpg';

function MeetTeam() {
  const team = [
    {
      name: 'Olivia Carter',
      role: 'Founder & CEO',
      image: woman1,
    },
    {
      name: 'Ethan Brooks',
      role: 'Head of Product',
      image: man1,
    },
    {
      name: 'Sophia Nguyen',
      role: 'Experience Curator',
      image: woman2,
    },
    {
      name: 'Liam Johnson',
      role: 'Head of Operations',
      image: man2,
    },
  ];

  return (
    <section className="meet-team">
      <div className="meet-team-container">
        {/* Left text */}
        <div className="meet-team-header">
          <span className="section-label2">Meet the team</span>
          <h2>The people behind Aura</h2>
          <p>
            Travel lovers, dreamers and problem solvers working together to help you explore the world better.
          </p>
        </div>

        {/* Right team members */}
        <div className="team-grid">
          {team.map((member) => (
            <div className="team-card" key={member.name}>
              <div className="team-img-wrapper">
                <img src={member.image} alt={member.name} />
              </div>
              <h3>{member.name}</h3>
              <span>{member.role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MeetTeam;