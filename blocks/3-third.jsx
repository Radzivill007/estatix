import styles from './3-third.module.scss'

import Line from '../public/line.svg'

const Third = () => (
  <section className={styles.wrapper} id='DAO'>
    <h2>
      Что такое <span>DAO?</span>
    </h2>
    <p>
      Простым языком <span>DAO</span>&nbsp;-&nbsp;аналог ООО (общества с&nbsp;ограниченной ответственностью)
      <br /> в&nbsp;предпринимательстве, только организованное <span>на базе блокчейна</span>.{' '}
    </p>
    <div className={styles.content}>
      <div>
        <div className={styles.number}>
          <span>2</span>
        </div>
        Принимать участие
       
        в&nbsp;деятельности <br /> Estatix&nbsp;Ventures
      </div>
      <div>
        <span>Каждый держатель</span> нашего <br /> собственного альткоина <span>сможет</span>:
      </div>
      <div>
        <div className={styles.number}>
          <span>1</span>
        </div>
        Выбирать новые продукты путём голосования и ознакомления с деловыми предложениями.
      </div>
      <Line className={`d-sm-none`} />
    </div>
  </section>
)

export default Third
