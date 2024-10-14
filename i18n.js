import i18next from 'i18next';

i18next.init({
  lng: navigator.language === 'es' ? 'es' : 'en',
  resources: {
    es: {
      translation: {
        hero: {
          description: 'Desarrollador apasionado y autodidacta con una gran determinación para enfrentar desafíos y desarrollar soluciones innovadoras.'
        },
        projects: {
          title: 'Proyectos',
          description1: 'Este icono',
          description2: 'indica que dicha web no sera compatible con formatos moviles',
          clients: 'Clientes',
          clientsdescription: 'Proyecto en desarrollo porfavor vuelva mas tarde',
          best: 'Mejor Proyecto',
          others: 'Otros'
        },
        skills: {
          title: 'Habilidades',
          description: 'Esta y todas las demas webs en este sitio han sido hosteadas en mi Raspberry PI 3'
        },
        footer: {
          copyright: 'Todos los derechos reservados.'
        }
      }
    },
    en: {
      translation: {
        hero: {
          description: 'Passionate and self-taught developer with a great determination to face challenges and develop innovative solutions.'
        },
        projects: {
          title: 'Projects',
          description1: 'This icon',
          description2: 'indicates that this website is not compatible with mobile formats',
          clients: 'Clients',
          clientsdescription: 'Project in development please come back later',
          best: 'Best Project',
          others: 'Others'
        },
        skills: {
          title: 'Skills',
          description: 'This and all other websites on this site have been hosted on my Raspberry PI 3'
        },
        footer: {
          copyright: 'All rights reserved.'
        }
      }
    }
  }
});

export default i18next;