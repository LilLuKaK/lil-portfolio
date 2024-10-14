import styles from './FooterStyles.module.css';
import i18next from './../../../i18n';

function Footer() {
  const copyright = i18next.t('footer.copyright');
  return (
    <section id="footer" className={styles.container}>
      <p>
        &copy; 2024 Lucas Bravo. <br />
        {copyright}
      </p>
    </section>
  );
}

export default Footer;
