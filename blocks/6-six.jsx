import styles from './6-six.module.scss'

import Tokenomic from '../public/tokenomic.svg'
import TokenomicMob from '../public/tokenomicMob.svg'

const Six = () => (
  <section className={styles.wrapper}>
    <h2 className='d-sm-block'>Токеномика</h2>
    <div className={styles.inner}>
      <Tokenomic className='d-sm-none' />
      <TokenomicMob className='d-sm-block' />
      <div className={styles.title}>Токеномика</div>
      <div>
        <p>
          Всего выпущено <span>20 млн. токенов ETX</span>. Мы выпускаем в оборот токены, в соответствии с финансовым обеспечением.
        </p>
        <p>
          <span>1 ETX</span> приблизительно равен <span>0,58$</span>, поэтому на каждые <span>0,58$</span> внутри экосистемы мы добавляем в
          оборот <span>1 ETX</span>
        </p>
        <p>
          <span>Все токены</span> многофункциональны, их можно как инвестировать, так и оплачивать ими какие-то услуги или продукты.
        </p>
        <p>
          <span>Экосистема</span> построена устойчивым образом и может функционировать, даже если <span>все наши клиенты</span> одновременно{' '}
          <span>продадут ETX</span>
        </p>
      </div>
    </div>
  </section>
)

export default Six
