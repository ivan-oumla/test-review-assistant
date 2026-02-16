import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
}

export default function Button({
  children,
  variant = "primary",
  onClick,
  type = "button",
  className = "",
}: ButtonProps) {
  const baseStyles =
    "px-6 py-3 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variantStyles = {
    primary: "bg-gray-900 text-white hover:bg-gray-800 focus:ring-gray-500",
    secondary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    outline:
      "bg-white text-gray-900 border-2 border-gray-900 hover:bg-gray-50 focus:ring-gray-500",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
