/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['rc-util',
    '@ant-design',
    'kitchen-flow-editor',
    '@ant-design/pro-editor',
     'antd',
    'rc-pagination',
    'rc-picker'],
};

export default nextConfig;
