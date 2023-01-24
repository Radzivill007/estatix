import styles from './2-second.module.scss'

const Second = () => (
  <section className={styles.wrapper} id='about'>
    <div className={styles.inner}>
      <p className={styles.title}>
        <span className={styles.black}>Estatix</span> - объединение разработчиков, трейдеров и инфлюенсеров.
      </p>
      <p>
        Наша цель - <span>создание крупнейшего DAO на&nbsp;Российском рынке</span>.
        <br /> На&nbsp;данный момент компания обладает возможностью применять весь свой объём средств на&nbsp;доходные инструменты, тем
        самым обеспечивая стабильную прибыль каждому нашему инвестору и&nbsp;развитию компании.
      </p>
    </div>
  </section>
)

export default Second
