import { getPageTitle } from '@ant-design/pro-layout';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import type { ConnectProps } from 'umi';
import { Link } from 'umi';
import React from 'react';
import GlobalFooter from '@/components/GlobalFooter';
import defaultSettings from '../../config/defaultSettings';
import styles from './UserLayout.less';
import { SLOGAN } from '@/constant';
import { Inspector } from 'react-dev-inspector';
import SYSTEM_LOGO from '@/assets/logo.png';

const isDev = process.env.NODE_ENV === 'development';
const InspectorWrapper = isDev ? Inspector : React.Fragment;

export type UserLayoutProps = Partial<ConnectProps>;

/**
 * 用户页面布局（登录注册）
 * @param props
 * @constructor
 * @author https://yuyuanweb.feishu.cn/wiki/Abldw5WkjidySxkKxU2cQdAtnah yupi
 */
const UserLayout: React.FC<UserLayoutProps> = (props) => {
  const {
    children,
    location = {
      pathname: '',
    },
  } = props;
  const title = getPageTitle({
    pathname: location.pathname,
    ...defaultSettings,
  });
  return (
    // https://github.com/zthxxx/react-dev-inspector
    <HelmetProvider>
      <InspectorWrapper keys={['control', 'shift', 'command', 'c']} disableLaunchEditor={false}>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={title} />
        </Helmet>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.top}>
              <div className={styles.header}>
                <Link to="/">
                  <img alt="logo" className={styles.logo} src={SYSTEM_LOGO} />
                  <span className={styles.title}>测试鸭</span>
                </Link>
              </div>
              <div className={styles.desc}>{SLOGAN}</div>
            </div>
            {children}
          </div>
          <GlobalFooter />
        </div>
      </InspectorWrapper>
    </HelmetProvider>
  );
};

export default UserLayout;
