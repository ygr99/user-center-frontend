import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card, Alert, Typography } from 'antd';
import styles from './Welcome.less';

const CodePreview: React.FC = ({ children }) => (
  <pre className={styles.pre}>
    <code>
      <Typography.Text copyable>{children}</Typography.Text>
    </code>
  </pre>
);

const Welcome: React.FC = () => {
  return (
    <PageContainer>
      <h2>你好，用户！</h2>
      <Card>
        {/*<Alert*/}
        {/*  message={'更快更强的重型组件，已经发布。'}*/}
        {/*  type="success"*/}
        {/*  showIcon*/}
        {/*  banner*/}
        {/*  style={{*/}
        {/*    margin: -12,*/}
        {/*    marginBottom: 24,*/}
        {/*  }}*/}
        {/*/>*/}


        <Typography.Text
          strong
          style={{
            marginBottom: 12,
          }}
        >
          <a
            href="https://procomponents.ant.design/components"
            rel="noopener noreferrer"
            target="__blank"
          >
          ProComponents 组件总览{' '}
          </a>
          <br/>

            ProComponents 是基于 Ant Design 而开发的模板组件，提供了更高级别的抽象支持，开箱即用。可以显著的提升制作 CRUD 页面的效率，更加专注于页面。

        </Typography.Text>

        <Typography.Text
          strong
          style={{
            marginBottom: 12,
          }}
        >
          <br/>
          <br/>
          高级布局{' '}
          <a
            href="https://procomponents.ant.design/components/layout"
            rel="noopener noreferrer"
            target="__blank"
          >
            欢迎使用
          </a>
        </Typography.Text>
        <CodePreview>yarn add @ant-design/pro-layout</CodePreview>


        <Typography.Text strong>
          高级表格{' '}
          <a
            href="https://procomponents.ant.design/components/table"
            rel="noopener noreferrer"
            target="__blank"
          >
            欢迎使用
          </a>
        </Typography.Text>
        <CodePreview>yarn add @ant-design/pro-table</CodePreview>

      </Card>
    </PageContainer>
  );
};

export default Welcome;
