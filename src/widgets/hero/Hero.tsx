import './_hero.scss';

export const Hero = () => {
  return (
    <section className="hero with-bottom-trapezoid">
      <div className="container hero__container flex">
        <h1 className="heading">Новые технологии</h1>
        <div className="hero__content flex">
          <h2 className="hero__title title">Мы&nbsp;предлагаем</h2>
          <p className="hero__prev">
            системы видеонаблюдения, пожаротушения, охранно-пожарной сигнализации, скуд
            и&nbsp;оповещения для частых лиц и&nbsp;бизнеса
          </p>
        </div>
        <h3 className="hero__subtitle subtitle">
          Интеграция безопасности в&nbsp;вашу инфраструктуру
        </h3>
      </div>
    </section>
  );
};
