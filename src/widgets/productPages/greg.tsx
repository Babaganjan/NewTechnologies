'use client';
import { useState } from 'react';
import './greg.scss';

const Greg = () => {
  const [activeTab, setActiveTab] = useState('videoinput');

  // Данные для карточек характеристик (из скриншота)
  const features = [
    {
      title: 'ВХОДЯЩАЯ / ИСХОДЯЩАЯ ПРОПУСКНАЯ СПОСОБНОСТЬ',
      value: '40',
      unit: 'Мбит/с',
      desc: '',
    },
    {
      title: 'ПОДКЛЮЧЕНИЕ ДО 8-МИ ВИДЕОКАМЕР',
      desc: 'Позволяет создать полноценную систему видеонаблюдения с охватом всех критических зон объекта.',
    },
    {
      title: 'ДЕКОДИРОВАНИЕ ДО 1-КАН. @ 8MP/4-CH @ 1080P/8-КАН. @ D1',
      desc: 'Обеспечивает одновременный просмотр видео в высоком качестве со всех камер.',
    },
    {
      title: 'ПОДДЕРЖКА ИНТЕРФЕЙСА 1 HDMI (4K) / 1 VGA',
      desc: 'Даёт возможность подключить два монитора одновременно — современный телевизор (4K) и офисный монитор.',
    },
    {
      title: 'PLUG & PLAY 8 POE ПОРТОВ',
      desc: 'Позволяет подключить и сразу начать работу с 8 камерами по технологии «включил и работай».',
    },
    {
      title: '1 SATA',
      value: 'ДО 8 ТБ',
      unit: '',
      desc: 'Позволяет установить вместительный жесткий диск для длительного хранения видеоархива.',
    },
  ];

  // Данные для таблицы характеристик
  const specs = [
    { label: 'ОБЩАЯ ТРЕВОГА', value: 'Обнаружение движения, потеря видео' },
    {
      label: 'ИНТЕЛЛЕКТУАЛЬНЫЕ ФУНКЦИИ',
      value:
        'Обнаружение курения, обнаружение дыма и огня, обнаружение места возгорания, вторжение, пересечение линий, подсчет людей, вход на территорию.',
    },
    { label: 'ABNORMAL ALARM', value: 'Disk Alarm, IP Address Conflict, Network Disconnect' },
  ];

  return (
    <div className="product-page">
      {/* --- HERO SECTION --- */}
      <section className="hero-section">
        <div className="container">
          <h1 className="main-title">
            8-МИ КАНАЛЬНЫЙ
            <br />
            <span className="highlight">IP-РЕГИСТРАТОР</span>{' '}
            <span className="model">NT-NVR3708E1-P8</span>
          </h1>

          <div className="gallery-grid">
            <div className="gallery-item big marker-box">
              {/* Замените src на ваши реальные изображения */}
              <img
                src="https://placehold.co/600x300/333/fff?text=NVR+Front"
                alt="Registrator Front"
              />
            </div>
            <div className="gallery-subgrid">
              <div className="gallery-item small marker-box">
                <img src="https://placehold.co/300x200/333/fff?text=Angle" alt="Angle" />
              </div>
              <div className="gallery-item small marker-box">
                <img src="https://placehold.co/300x200/333/fff?text=Ports" alt="Ports" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FEATURES SECTION (Black) --- */}
      <section className="features-section">
        <div className="container">
          <h3 className="section-label">| ОСНОВНЫЕ ХАРАКТЕРИСТИКИ</h3>
          <div className="features-grid">
            {features.map((item, index) => (
              <div key={index} className="feature-card marker-box-dark">
                <h4>{item.title}</h4>
                {item.value && (
                  <div className="feature-big-value">
                    {item.value} <span className="unit">{item.unit}</span>
                  </div>
                )}
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- TECH SPECS TABS (White) --- */}
      <section className="tabs-section">
        <div className="container">
          <h3 className="section-label dark">| ОБЩИЕ ХАРАКТЕРИСТИКИ</h3>
          <div className="tabs-header">
            {['Видеовход', 'Видеовыход', 'Запись', 'Просмотр и хранение'].map((tab) => (
              <button
                key={tab}
                className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="tab-content">
            <div className="spec-row">
              <span className="spec-key">IP ВИДЕОВХОД</span>
              <span className="spec-value">8 КАНАЛОВ</span>
            </div>
            <div className="spec-row">
              <span className="spec-key">ВХОДЯЩАЯ ПРОПУСКНАЯ СПОСОБНОСТЬ</span>
              <span className="spec-value">40 MBPS</span>
            </div>
            <div className="spec-row">
              <span className="spec-key">ВЫХОДНАЯ ПРОПУСКНАЯ СПОСОБНОСТЬ</span>
              <span className="spec-value">40 MBPS</span>
            </div>
          </div>
        </div>
      </section>

      {/* --- DIMENSIONS --- */}
      <section className="dimensions-section">
        <div className="container">
          <h3 className="section-label dark">| РАЗМЕРЫ</h3>
          <div className="dimensions-grid">
            <div className="dim-img marker-box-light">
              <img src="https://placehold.co/500x200/eee/999?text=Front+Dimensions" alt="Dim 1" />
            </div>
            <div className="dim-img marker-box-light">
              <img src="https://placehold.co/500x200/eee/999?text=Back+Dimensions" alt="Dim 2" />
            </div>
          </div>
        </div>
      </section>

      {/* --- DETAILED SPECS --- */}
      <section className="detailed-specs-section">
        <div className="container">
          <h3 className="section-label dark">| СПЕЦИФИКАЦИЯ</h3>
          <div className="specs-header-row">
            <div className="active">Тревога</div>
            <div>Сеть</div>
            <div>Интерфейс</div>
          </div>
          <div className="detailed-table">
            {specs.map((row, i) => (
              <div key={i} className="table-row">
                <div className="table-key">{row.label}</div>
                <div className="table-val">{row.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FOOTER CTA --- */}
      <div className="sticky-cta">
        <button className="order-btn">
          ЗАКАЗАТЬ КАМЕРУ <span>→</span>
        </button>
      </div>
    </div>
  );
};

export default Greg;
