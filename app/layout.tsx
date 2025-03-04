import type { Metadata } from "next";
import {
	Fira_Code,
	IBM_Plex_Mono,
	Inconsolata,
	Inter,
	JetBrains_Mono,
	Source_Code_Pro,
} from "next/font/google";
import "./globals.css";
import { SettingsProvider } from "@/contexts/SettingsContext";
import clsx from "clsx";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";
import { SUPPORTED_FONT_STYLES as fonts } from "@/lib/fonts";
import Providers from "@/contexts/Providers";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const firaCode = Fira_Code({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-fira-code",
});

const jetBrainsMono = JetBrains_Mono({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-jetbrains-mono",
});

const inconsolata = Inconsolata({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-inconsolata",
});

const sourceCodePro = Source_Code_Pro({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-source-code-pro",
});

const ibmPlexMono = IBM_Plex_Mono({
	weight: "400",
	subsets: ["latin"],
	display: "swap",
	variable: "--font-ibm-plex-mono",
});

export const metadata: Metadata = {
	title: "SnapSyntax: A code editor for the web",
	description:
		"A code editor for the web with a focus on simplicity. Built with Next.js, Tailwind CSS, and CodeMirror.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang="en"
			className={cn(
				// fonts..variable,
				fonts[0].variable,
				fonts[1].variable,
				fonts[2].variable
			)}
		>
			<body
				className={cn(
					"grid min-h-screen grid-rows-[auto,1fr] text-sm",
					"bg-almost-black text-greyish caret-fuchsia-500 selection:bg-fuchsia-500 selection:text-amlost-white"
				)}
			>
				<Providers>
					<Header />
					<main className={cn("grid")}>{children}</main>
				</Providers>
			</body>
		</html>
	);
}
