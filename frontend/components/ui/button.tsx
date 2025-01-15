export default function Button({
  variant = "primary",
  children,
  ...props
}: Readonly<{
  variant?: "primary" | "outlined" | "icon";
  children: React.ReactNode;
  [key: string]: unknown;
}>) {
  const variants = {
    primary: "px-12 py-2 bg-primary",
    outlined: "px-12 py-2 bg-transparent border border-primary hover:bg-primary",
    icon: "px-4 py-4 bg-transparent border border-transparent",
  };
  return (
    <button
      className={`text-sm xs:text-base md:text-lg font-medium rounded-lg text-white transition-all duration-300 ${variants[variant]}`}
      {...props}
    >
      {children}
    </button>
  );
}
