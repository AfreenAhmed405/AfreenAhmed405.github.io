/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    typescript: {
        ignoreBuildErrors: true,
    },
    // Disable server-side rendering for static export
    images: {
        unoptimized: true,
    },
    webpack: (config, { webpack }) => {
        // Add tree shaking for Sentry
        config.plugins.push(
            new webpack.DefinePlugin({
                __SENTRY_DEBUG__: false,
                __SENTRY_TRACING__: false,
                __RRWEB_EXCLUDE_IFRAME__: true,
                __RRWEB_EXCLUDE_SHADOW_DOM__: true,
                __SENTRY_EXCLUDE_REPLAY_WORKER__: true,
            })
        );
        
        // Handle the diagnostics_channel module
        config.externals = [...(config.externals || []), 'diagnostics_channel'];
        
        return config;
    },
};

export default nextConfig;