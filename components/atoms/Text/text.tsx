import styles from "./text.module.scss";

const textClasses = {
  h1: styles.h1,
  h2: styles.h2,
  h3: styles.h3,
  h4: styles.h4,
  h5: styles.h5,
  h6: styles.h6,
  subheading1: styles.h5,
  subheading2: styles.h5,
  body1: styles.p,
  body2: styles.p,
};

type Props = {
    variant?: string
    children: string
  }

const Text = ({variant, children}: Props) => {
  const textClass = variant ? textClasses[variant] : "p";
  return (
    <section
      className={`${textClass}`}
    >
      {children}
    </section>
  );
};

export default Text;