import styles from './SkillsStyles.module.css';
import i18next from './../../../i18n';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';

function Skills() {
  const title = i18next.t('skills.title');
  const description = i18next.t('skills.description');
  const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

  return (
    <>
      <h3>{description}</h3>
      <section id="skills" className={styles.container}>
        <h1 className="sectionTitle">{title}</h1>
        <div className={styles.skillList}>
          <SkillList src={checkMarkIcon} skill="HTML5" />
          <SkillList src={checkMarkIcon} skill="CSS3" />
          <SkillList src={checkMarkIcon} skill="Bootstrap" />
        </div>
        <hr />
        <div className={styles.skillList}>
          <SkillList src={checkMarkIcon} skill="JavaScript" />
          <SkillList src={checkMarkIcon} skill="TypeScript" />
          <SkillList src={checkMarkIcon} skill="React" />
        </div>
        <hr />
        <div className={styles.skillList}>
          <SkillList src={checkMarkIcon} skill="GitHub" />
          <SkillList src={checkMarkIcon} skill="Git" />
        </div>
      </section>
    </>
  );
}

export default Skills;
