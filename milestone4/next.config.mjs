/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'lh3.googleusercontent.com',
              port: '',
              pathname: '/a/**',
            },
            {
              protocol: 'https',
              hostname: 'www.ieeta.pt',
              port: '',
              pathname: '/wp-content/uploads/2022/11/default_image_ieeta.jpg',
            },
            {
              protocol: 'https',
              hostname: 'res.cloudinary.com',
              port: '',
              pathname: '/dcwbny96c/image/**',
            },
          ],
    }
};

export default nextConfig;
