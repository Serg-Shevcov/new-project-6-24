import "./css/style.css";
import "./css/button.css";

const Home = () => {
  return (
      <div className="container">
        <h1 className="text homeH1">Текст про наш продукт</h1>
        <h2 className="text homeH2">Мы верим, что сделаем чью-то жизнь лучше</h2>
        <hr className="homeHr" />

        <div className="Row">
          <section className="sectionFirstRow">
            <h3 className="text homeH3">Для чего</h3>
            <p className="text">Для автоматизации составления визуального расписания</p>
            <p className="text">Для понимания, чего хотят дети</p>
          </section>

          <section className="sectionFirstRow">
            <h3 className="text homeH3">Для кого</h3>
            <p className="text">В помощь родителям детей с РАС</p>
          </section>

          <section className="sectionFirstRow">
            <h3 className="text homeH3">Как работает</h3>
            <p className="text">
              Составляйте расписание, с помощью ИИ выбирайте подходящие картинки
            </p>
            <p className="text">
              Покажите ребенку картинки, ребенок выберет картинку того, что он
              хочет
            </p>
          </section>
        </div>

        <div className="Row">
          <section className="sectionSecondRow">
            <h3 className="text homeH3">Визуальное расписание</h3>
            <p className="text">Описание этой функции</p>
            <button className="bt Section-button">Составить расписание</button>
          </section>

          <section className="sectionSecondRow">
            <img
              src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
              alt="profile-img"
              className="profile-img-card"
            />
          </section>
        </div>

        <div className="Row">
          <section className="sectionSecondRow">
            <img
              src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
              alt="profile-img"
              className="profile-img-card"
            />
          </section>

          <section className="sectionSecondRow">
            <h3 className="text homeH3">Общение через карточки</h3>
            <p className="text">Описание этой функции</p>
            <button className="bt Section-button">Начать общение</button>
          </section>
        </div>

        <div>
          <h3 className="text homeH3">Другие функции нашего продукта</h3>
          <p className="text">Общение в форумах, что это такое зачем</p>
          <p className="text">Раздел со статьями</p>
          <p className="text">Раздел с мероприятиями</p>
          <p className="text">Раздел с экспертами</p>
        </div>
      </div>

  );
};

export default Home;
