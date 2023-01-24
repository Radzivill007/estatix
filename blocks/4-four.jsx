import styles from './4-four.module.scss'

const Four = () => (
  <section className={styles.wrapper} id='investments'>
    <h2>Как инвестировать в проект?</h2>
    <div className={styles.content}>
      <div>
        Чтобы стать участником экосистемы, вам достаточно просто приобрести наш токен&nbsp;-&nbsp;<span>ETX</span>. Далее вам станут
        доступны наши инвестиционные пулы, запуск которых запланирован на Январь 2023 года.
      </div>
      <div>
        Внутри экосистемы есть несколько вариантов получения дохода, а&nbsp;именно:
        <ul>
          <li>
            <span>•</span> Finance Pool
          </li>
          <li>
            <span>•</span> Trading Pool
          </li>
          <li>
            <span>•</span> Ventures
          </li>
        </ul>
      </div>
      <div>
        В конце ноября будут запущены <span>три пула ETX</span> с&nbsp;открытой статистикой по инвестированным средствам
        и&nbsp;по&nbsp;выплаченному доходу.
      </div>
    </div>
  </section>
)

export default Four
