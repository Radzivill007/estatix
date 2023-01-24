import styles from './1-first.module.scss'

const First = () => (
  <section className={styles.wrapper}>
    <h1>
      Estatix —{' '}
      <span>
        многофункциональная <br /> инвестиционная платформа
      </span>{' '}
      с&nbsp;полностью <br /> открытой информацией о&nbsp;финансовой деятельности
    </h1>
    <div className={styles.btn}>
      <a href='https://t.me/Estatix_Main_Bot' target='_blank' rel='nofollow'>
        Купить ETX
      </a>
    </div>
  </section>
)

export default First
