import { useMemo } from 'react';
import Link from 'next/link';
import styles from './link-button.module.scss';
import { NextPage } from 'next';
import { LinkButtonProps } from './linkButton.types';

const LinkButton: NextPage<LinkButtonProps> = (props) => {
  const { lineType = 'outlined', dark, name, href, style = {} } = props;

  const linkClass = useMemo((): string => {
    let line = styles.linkOutlined;
    if (lineType !== 'outlined') line = styles.linkFilled;
    return `${styles.link} ${line} ${dark && styles.linkDark}`;
  }, [lineType, dark]);

  return (
    <Link href={href}>
      <a className={linkClass} style={style}>
        <span>{name}</span>
      </a>
    </Link>
  );
};

export default LinkButton;
