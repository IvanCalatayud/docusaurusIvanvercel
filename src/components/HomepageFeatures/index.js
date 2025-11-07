import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
 {
    title: 'El Misteri dels Gats',
    Svg: require('/img/gat.svg').default,
    description: (
      <>
        Sabies que els gats dormen una mitjana de 16 hores al dia? Ningú sap ben bé
        què somien, però probablement són amos d’un món secret de sofàs tous i menjar infinit.
      </>
    ),
  },
  {
    title: 'El Poder de les Patates',
    Svg: require('/img/patata.svg').default,
    description: (
      <>
        Les querailles van viatjar de Sud-amèrica a Europa al segle XVI i van canviar la història.
        Són tan versàtils que podrien protagonitzar el seu propi llibre de receptes.
      </>
    ),
  },
  {
    title: 'L’Univers és Estrany',
    Svg: require('/img/espacio.svg').default,
    description: (
      <>
        A l’espai hi ha un núvol gegant de gas que fa olor de rom i gerds. Si això no és
        prou increïble, pensa que potser ara mateix una estrella nova està naixent mentre llegeixes això.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
