import styles from './7-seven.module.scss'

const Seven = () => (
  <section className={styles.wrapper}>
    <h2>
      Estatix <span>Roadmap</span>
    </h2>
    <div className={styles.content}>
      <div>
        <p><span>Первый этап</span> (выполнен)</p>
        <ul>
          <li>- Запуск вебсайта</li>
          <li>- Создание социальных сетей</li>
          <li>- Тестовый Trading Pool</li>
          <li>- Подписание договоров на&nbsp;оффлайн продажу</li>
        </ul>
      </div>
      <div>
        <p><span>Второй этап</span>: (Октябрь -&nbsp;Январь 2022)</p>
        <ul>
          <li>- Написание смарт-контрактов</li>
          <li>
            -<span> Запуск Trading Pool</span>
          </li>
          <li>
            -<span> Запуск Finance Pool</span>
          </li>
          <li>- 5 тысяч человек в&nbsp;социальных сетях</li>
        </ul>
      </div>
      <div>
        <p><span>Третий этап</span>: (Февраль -&nbsp;Апрель 2023)</p>
        <ul>
          <li>- Подача документов на&nbsp;IDO</li>
          <li>- Прохождение аудита</li>
          <li>
            -<span> Запуск Ventures</span>
          </li>
          <li>- Ежемесячный объем 1млн$</li>
        </ul>
      </div>
      <div>
        <p><span>Четвёртый этап</span>: (Июль -&nbsp;Декабрь 2023)</p>
        <ul>
          <li>- Презентация продукта Ventures</li>
          <li>- Ежемесячный объем 5млн$</li>
          <li>- 5 тысяч клиентов экосистемы</li>
          <li>- Расширение комьюнити до&nbsp;50 тыс. человек</li>
        </ul>
      </div>
    </div>
  </section>
)

export default Seven
