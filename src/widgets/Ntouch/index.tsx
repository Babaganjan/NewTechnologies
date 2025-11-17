import { Breadcrumbs } from '@/shared/ui';
import './ntouch.scss';
export const Ntouch = () => {
  return (
    <section className="ntouch">
      <Breadcrumbs />
      <div className="ntouch__container container">
        <h1 className="ntouch__title">
          ТОО «Новые технологии – Тараз» проводит теоретические и практические курсы, посвященные
          работе с оборудованием торговой марки NTOUCH
        </h1>
        <div className="ntouch__subtitle-container">
          <p className="ntouch__subtitle">
            Занятия проводят сертифицированные специалисты, обучение проходит по утверждённым
            программам не реже одного раза в квартал. <br />
            Мы обеспечиваем слушателей методическими материалами, практическими кейсами и доступом к
            современному оборудованию.
          </p>
        </div>
      </div>
    </section>
  );
};
