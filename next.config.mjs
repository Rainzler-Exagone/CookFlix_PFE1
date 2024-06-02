/** @type {import('next').NextConfig} */
const nextConfig = {
     
    images :{
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.immediate.co.uk',
                port: '',
            }, {
                protocol: 'https',
                hostname: 'st2.depositphotos.com',
                port: '',
            }, {
                protocol: 'https',
                hostname: 'media.gettyimages.com',
                port: '',
            }, {
                protocol: 'https',
                hostname: 'media.istockphoto.com',
                port: '',
            },
            {
                protocol: 'https',
                hostname: 's3.amazonaws.com',
                port: '',
            },
            {
                protocol: 'https',
                hostname: 'utfs.io',
                port: '',
            },
            {
                protocol: 'https',
                hostname: 'nextui.org',
                port: '',
            },
            {
                protocol: 'https',
                hostname: 'platform-lookaside.fbsbx.com',
                port: '',
            },

        ]
    },
    eslint:{
        ignoreDuringBuilds:true,
    }
};

export default nextConfig;
