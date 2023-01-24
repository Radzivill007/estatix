import styles from './5-five.module.scss'

const Five = () => (
  <section className={styles.wrapper} id='pools'>
    <h2>Estatix Pools</h2>
    <p className={styles.title}>На&nbsp;данный момент на стадии запуска находятся пулы средств:</p>
    <div className={styles.item}>
      <h4>Estatix Trading Pool</h4>
      <div className={styles.text}>
        <span>Estatix Trading Pool</span> - пул, в котором доходность поступает за счёт трейдинга. В&nbsp;составе Estatix сформировалась
        команда опытных трейдеров, которые работают в данной сфере более 7 лет.
      </div>
      <div className={styles.text}>
        Средняя доходность команды трейдеров - это <span>10% ежемесячно</span>, по нашему трейдинг пулу процент составляет{' '}
        <span>5% в месяц</span>. Оставшиеся средства уходят на:
        <ul>
          <li>
            <span>•</span> Оклад команде трейдеров
          </li>
          <li>
            <span>•</span> Маркетинг Estatix
          </li>
          <li>
            <span>•</span> Разработку продукта в сфере метавселенных
          </li>
        </ul>
      </div>
      <div className={styles.text}>
        Информация по объёмам торговых счетов, а также по средней доходности находится у наших менеджеров в открытом доступе и
        предоставляется по запросу клиента. Инвестиции в пул происходят с помощью альткоина ETX.
      </div>
      <div className={styles.text}>
        <span>Вывод доступен ежемесячно</span>, в случае долгосрочных инвестиций работает сложный процент.
      </div>
      <div className={styles.card}>
        <div>
          <p>Trading Pool</p>
          <p>APY</p>
          <p>60%</p>
        </div>
        <div className={styles.btn}>SOON</div>
      </div>
    </div>
    <div className={styles.item}>
      <h4>Estatix Finance Pool</h4>
      <div className={styles.text}>
        <span>Estatix Finance Pool</span> - пул кредитования. Среди партнёров Estatix есть частные банки и другие финансовые организации,
        которые уже несколько лет занимаются кредитованием клиентов по всей России.
      </div>
      <div className={styles.text}>
        Взаимодействие и извлечение дохода происходит таким образом: мы передаём партнёрам объём пула под дальнейшую выдачу кредитов и
        различных залогов. Надёжность партнёров и устойчивая система делает этот пул самым стабильным и минимализирует риски.
      </div>
      <div className={styles.text}>
        <span>Доходность составляет 3% в месяц.</span>
      </div>
      <div className={styles.card}>
        <div>
          <p>Finance Pool</p>
          <p>APY</p>
          <p>36%</p>
        </div>
        <div className={styles.btn}>SOON</div>
      </div>
    </div>
    <div className={styles.item}>
      <h4>Estatix Ventures</h4>
      <div className={styles.text}>
        <span>Estatix Ventures</span> - направление долгосрочных инвестиций в сторону криптовалютных стартапов по всему миру
      </div>
      <div className={styles.text}>
        В формате живого чата каждый из инвесторов данного пула сможет принимать участие в выборе стартапов, выборе дизайна, вариантах
        продукта и в разработке в целом. Доходность такого пула нестабильна, средства инвестируются на срок от 1 года.
      </div>
      <div className={styles.text}>
        В процентном соотношении <span>от 150% до 700% в год</span>.
      </div>
      <div className={styles.card}>
        <div>
          <p>Ventures Pool</p>
          <p>APY</p>
          <p>36%</p>
        </div>
        <div className={styles.btn}>SOON</div>
      </div>
    </div>
  </section>
)

export default Five
