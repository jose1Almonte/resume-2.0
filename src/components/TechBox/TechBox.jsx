import Styles from './TechBox.module.css'

export function TechBox({text}) {
    return (
      <div className={Styles.boxOfTech}>
        <p className={Styles.tech}>{text}</p>
      </div>
    )
  }