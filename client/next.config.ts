import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "**.themealdb.com",
				port: "",
				search: "",
			},
		],
	},
};

export default nextConfig;
