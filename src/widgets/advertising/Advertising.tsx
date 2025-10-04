import Image from 'next/image';
import './_advertising-block.scss';

export const Advertising = () => {
  return (
    <section
      className="advertising with-top-trapezoid with-bottom-trapezoid"
      aria-labelledby="advertising-title"
    >
      <div className="advertising__container container">
        <h2 id="advertising-title" className="advertising__title">
          Наши партнеры
        </h2>
        <div className="advertising__subtitle-container">
          <h3 className="advertising__subtitle">
            Работаем с лидерами
            <span>
              рынка из <span className="advertising__subtitle--break">отрасли</span>
            </span>
          </h3>
        </div>
        <div className="swiper mySwiper">
          <div className="swiper-wrapper" role="list">
            <div className="swiper-slide" role="listitem">
              <Image
                src="/img/adverting-img/alhua.svg"
                alt="Логотип компании Alhua"
                width={200}
                height={100}
              />
              <div className="advertising__decoration" aria-hidden="true"></div>
            </div>
            <div className="swiper-slide" role="listitem">
              <Image src="/img/adverting-img/bosch.svg" alt="bosch" width={200} height={100} />
              <div className="advertising__decoration" aria-hidden="true"></div>
            </div>
            <div className="swiper-slide" role="listitem">
              <Image
                src="/img/adverting-img/hikvision.svg"
                alt="Логотип компании Hikvision"
                width={200}
                height={100}
              />
              <div className="advertising__decoration" aria-hidden="true"></div>
            </div>
            <div className="swiper-slide" role="listitem">
              <Image
                src="/img/adverting-img/huawei.svg"
                alt="Логотип компании Huawei"
                width={200}
                height={100}
              />
              <div className="advertising__decoration" aria-hidden="true"></div>
            </div>
            <div className="swiper-slide" role="listitem">
              <Image
                src="/img/adverting-img/bosch.svg"
                alt="Логотип компании Bosch"
                width={200}
                height={100}
              />
              <div className="advertising__decoration" aria-hidden="true"></div>
            </div>
            <div className="swiper-slide" role="listitem">
              <Image
                src="/img/adverting-img/hikvision.svg"
                alt="Логотип компании Hikvision"
                width={200}
                height={100}
              />
              <div className="advertising__decoration" aria-hidden="true"></div>
            </div>
            <div className="swiper-slide" role="listitem">
              <Image
                src="/img/adverting-img/huawei.svg"
                alt="Логотип компании Huawei"
                width={200}
                height={100}
              />
              <div className="advertising__decoration" aria-hidden="true"></div>
            </div>
            <div className="swiper-slide" role="listitem">
              <Image
                src="/img/adverting-img/huawei.svg"
                alt="Логотип компании Huawei"
                width={200}
                height={100}
              />
              <div className="advertising__decoration" aria-hidden="true"></div>
            </div>
            <div className="swiper-slide" role="listitem">
              <Image
                src="/img/adverting-img/bosch.svg"
                alt="Логотип компании Bosch"
                width={200}
                height={100}
              />
              <div className="advertising__decoration" aria-hidden="true"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
