import containerStyles from './container-styles.module.css'

type Props = {
  children?: React.ReactNode
}

const Container = ({ children }: Props) => {
  return <div className={containerStyles.main}>{children}</div>
}

export default Container
