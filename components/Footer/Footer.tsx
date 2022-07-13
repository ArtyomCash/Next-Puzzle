import { NextPage } from 'next';
import { v4 as uuid } from 'uuid';
import Logo from 'assets/images/icons/logo.svg';
import styles from './footer.module.scss';
import { useRouter } from 'next/router';
import { menuItemType } from 'menuItemType/menuType';

const mockMenu: menuItemType[] = [
  { name: 'About us', id: 'about', href: '/about', className: 'menuItem' },
  { name: 'Projects', id: 'projects', href: '/cases', className: 'menuItem' },
  { name: 'Services', id: 'services', href: '/services', className: 'menuItem' },
  { name: 'Reviews', id: 'reviews', href: '/industries', className: 'menuItem' },
  { name: 'Technologies', id: 'technologies', href: '/projects', className: 'menuItem' },
  { name: 'Contact Us', id: 'contacts', href: '/contacts', className: 'menuItem' },
];

const Footer: NextPage = () => {
  const smoothScroll = (elementId: string) => {
    const el = document.getElementById(elementId);
    if (el) {
      const top = el.getBoundingClientRect().top;
      window.scrollBy({ top, behavior: 'smooth' });
    }
  };

  const date = new Date();

  const router = useRouter();

  const handleClick = (menuItem: menuItemType, index: number): void => {
    if (index === 5) {
      router.push('/contacts');
    } else if (router.pathname !== '/') {
      router.push(menuItem.href);
    } else {
      smoothScroll(menuItem.id);
    }
  };

  return (
    <footer className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.aboutDscrBox}>
          <button className={styles.logoLink} type='button' onClick={() => smoothScroll('header')}>
            <Logo />
          </button>
          <p className={styles.dscr}>
            Application Programming Interface (API) is a core and important part of the application.API allows two
          </p>
        </div>
        <div className={styles.menuBox}>
          <ul className={styles.nav}>
            {mockMenu.map((menuItem, index) => (
              <button
                className={styles.menuItem}
                type='button'
                key={uuid()}
                onClick={() => handleClick(menuItem, index)}>
                {menuItem.name}
              </button>
            ))}
          </ul>
          <div className={styles.support}>
            <a className={styles.supportLink} href='mailto:info@flexyti.com'>
              info@flexyti.com
            </a>
            <a className={styles.supportLink} href='tel:+380503326358'>
              +380503326358
            </a>
            <a className={styles.supportLink} href='tel:+380509826188'>
              +380509826188
            </a>
          </div>
        </div>
      </div>
      <p className={styles.copyDscr}>{date.getFullYear()} &copy; All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
