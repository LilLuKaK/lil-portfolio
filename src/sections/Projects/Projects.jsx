import styles from './ProjectsStyles.module.css';
import i18next from './../../../i18n';
import screenLight from '../../assets/screen-light.svg';
import screenDark from '../../assets/screen-dark.svg';
import laika from '../../assets/laika-logo.png';
import dystopia from '../../assets/dystopia-logo.png';
import ProjectCard from '../../common/ProjectCard';
import { useTheme } from '../../common/ThemeContext';

function Projects() {
  const title = i18next.t('projects.title');
  const description1 = i18next.t('projects.description1');
  const description2 = i18next.t('projects.description2');
  const clients = i18next.t('projects.clients');
  const clientsdescription = i18next.t('projects.clientsdescription');
  const best = i18next.t('projects.best');
  const others = i18next.t('projects.others');
  const { theme } = useTheme();
  const screenIcon = theme === 'light' ? screenLight : screenDark;

  return (
    <>
      <h3> {description1} <img src={screenIcon} alt="screen icon" /> {description2} </h3>
      <section id="projects" className={styles.container}>
        <h1 className="sectionTitle">{title}</h1>
        <h2>{clients}</h2>
        <hr />
        <div className={styles.projectsContainer}>
          <h3>{clientsdescription}</h3>
        </div>
        <h2>{best}</h2>
        <hr />
        <div className={styles.projectsContainer}>
          <ProjectCard
            src={laika}
            link="https://laikaplayer.freemyip.com/"
            h3="LAIKA Song Player"
            p={
              <>
                PHP | JavaScript | MySQL <img src={screenIcon} alt="screen icon" />
              </>
            }
          />
        </div>
        <h2>{others}</h2>
        <hr />
        <div className={styles.projectsContainer}>
          <ProjectCard
            src={dystopia}
            link="https://dystopiabylil.freemyip.com/"
            h3="DYSTOPIA"
            p={
              <>
                PHP | JavaScript | MySQL <img src={screenIcon} alt="screen icon" />
              </>
            }
          />
        </div>
      </section>
    </>
  );
}

export default Projects;
