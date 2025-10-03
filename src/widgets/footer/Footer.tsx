export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <a href="#" className="footer__logo" aria-label="На главную страницу">NT</a>
                <button type="button" className="arrow-button" aria-label="Прокрутить страницу к началу">
                    Наверх
                </button>
                <nav className="footer__pages" aria-label="Основная навигация">
                    <span className="footer__title">Страницы</span>
                    <ul className="footer__list">
                        <li><a href="#">Сервис</a></li>
                        <li><a href="#">Производство</a></li>
                        <li><a href="#">IT-Решения</a></li>
                        <li><a href="#">О нас</a></li>
                        <li><a href="#">Контакты</a></li>
                    </ul>
                </nav>

                <address className="footer__about">
                    <span className="footer__title">Связь с нами</span>
                    <p>астана, 14/1 умай ана</p>
                    <p><a href="tel:+77008369436">+7 (700) 836-94-36</a></p>
                    <p><a href="mailto:info.ast@nt-t.kz">info.ast@nt-t.kz</a></p>
                    <p className="social-link"><a href="#">Instagram</a></p>
                </address>

                <div className="footer__activity">
                    <span className="footer__title">Деятельность</span>
                    <ul>
                        <li>Сервис</li>
                        <li>Производство</li>
                        <li>IT-решения</li>
                    </ul>
                </div>

                <div className="footer__about-company">
                    <span className="footer__title">О компании</span>
                    <ul>
                        <li>О нас</li>
                        <li>Контакты</li>
                    </ul>
                </div>
                <div className="footer__copyright">
                    <p className="footer__copyright-text">
                        Тоо «новые технологии»
                        <span>©2025 все права защищены</span>
                    </p>
                    <a href="#">Политика конфиденциальности</a>
                </div>
            </div>
        </footer>
    )
}