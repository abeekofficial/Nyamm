import type React from "react";

interface ButtonProps {
  className?: string;
  isLoading?: boolean;
  disabled?: boolean;
  variant: "neon" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  className = "",
  isLoading = false,
  disabled = false,
  variant,
  size = "md",
  children,
  onClick,
  type = "button",
  fullWidth = false
}) => {

  // Base classes - asosiy stil
  const baseClasses = "inline-flex items-center border border-black/50 justify-center font-medium transition-all duration-200 px-5 py-2.5 focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-sm";

  // Variant bo'yicha stil
  const variantClasses = {
    neon: "bg-[#1e1e1e] text-gray-50 font-thin hover:bg-orange-600 transition-all ease-in",
    outline: "border-2 border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-500",
    ghost: "text-gray-600 hover:bg-gray-100 focus:ring-gray-500",
  }

  // Size bo'yicha stil
  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg"
  };

  // Width stil
  const widthClass = fullWidth ? "w-full" : "";

  // Disabled holat
  const disabledClasses = "opacity-50 cursor-not-allowed";

  // Loading holat
  const loadingClasses = "cursor-wait";

  // Barcha classlarni birlashtirish
  const combinedClasses = [
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    widthClass,
    disabled || isLoading ? disabledClasses : "",
    isLoading ? loadingClasses : "",
    className
  ].filter(Boolean).join(" ");

  return (
    <button
      type={type}
      className={combinedClasses}
      disabled={disabled || isLoading}
      onClick={onClick}
    >
      {isLoading ? (
        <div className="flex items-center">
          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Loading...
        </div>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;