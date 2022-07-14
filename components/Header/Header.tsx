import Link from 'next/link';
import styles from './header.module.scss';
import { NextPage } from 'next';
import { v4 as uuid } from 'uuid';
import Logo from 'assets/images/icons/logo.svg';
import { useRouter } from 'next/router';
import { useRef } from 'react';
import { menuItemType } from 'menuItemType/menuType';

const mockMenu: menuItemType[] = [
  { name: 'Puzzle-card', id: 'about', href: '/puzzle-card', className: 'menuItem' },
  { name: 'Puzzles', id: 'projects', href: '/puzzles', className: 'menuItem' },
  { name: 'Our services', id: 'services', href: '/services', className: 'menuItem' },
  { name: 'Industries', id: 'industries', href: '/industries', className: 'menuItem' },
  { name: 'Technologies', id: 'technologies', href: '/projects', className: 'menuItem' },
  { name: 'Contacts', id: 'no_id', href: '/contacts', className: 'menuItem' },
];

const Header: NextPage = () => {
  const router = useRouter();

  const smoothScroll = (elementId: string) => {
    const el = document.getElementById(elementId);
    if (el) {
      const top = el.getBoundingClientRect().top;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const headerRef = useRef<HTMLDivElement | null>(null);

  const handleClick = (menuItem: menuItemType): void => {
    if (headerRef.current!.clientWidth < 960) {
      setTimeout(() => router.push(menuItem.href), 600);
    } else if (router.pathname === '/') {
      menuItem.href === '/contacts' ? router.push(menuItem.href) : smoothScroll(menuItem.id);
    } else {
      router.push(menuItem.href);
    }
  };

  return (
    <header id='header' className={router.pathname === '/' ? styles.wrapper : styles.wrapperOtherPage} ref={headerRef}>
      <div>
        <Link href='/'>
          <a className={styles.logo}>
            <Logo />
          </a>
        </Link>
      </div>
      <section className={styles.box}>
        <input type='checkbox' name='' id='navi-toggle' className={styles.checkbox} hidden />
        <label htmlFor='navi-toggle' className={styles.button}>
          <span className={styles.icon}>&nbsp;</span>
        </label>
        <div className={styles.background}>&nbsp;</div>
        <nav className={styles.menu}>
          {mockMenu.map((item, index) => (
            <Link className={styles['menuItem']} href={item.href} key={index}>
              <a className={styles['menuItem']}>
                <span>{item.name}</span>
              </a>
            </Link>
            /*<label className={styles['menuItem']} htmlFor='navi-toggle' key={uuid()} onClick={() => handleClick(item)}>
              <span>{item.name}</span>
            </label>*/
          ))}
        </nav>
      </section>
    </header>
  );
};

export default Header;
