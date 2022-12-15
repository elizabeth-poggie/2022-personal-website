import styles from "./text.module.scss";

const textVariantsStyles = {
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

const textVariants = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subheading1: "p",
  subheading2: "p",
  body1: "p",
  body2: "p",
};

type Props = {
    variant?: string
    children: string
  }

const Text = ({variant, children}: Props) => {
  let Component = variant ? textVariants[variant] : "p";
  const textVariant = variant ? textVariantsStyles[variant] : styles.p;
  return (
    <Component
      className={`${textVariant}`}
    >
      {children}
    </Component>
  );
};

export default Text;