import "./globals.css";

export const metadata = {
	title: "Vehicle Application",
	description: "A minimalistic vehicle-related application",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
