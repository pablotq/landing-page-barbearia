import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary";
    children: React.ReactNode;
}

export function Button ({
    variant = "primary",
    children,
    className = "",
    ...props
}: ButtonProps) {
    const baseStyles =
        "px-8 py-3 rounded-lg transition-all duration-300 cursor-pointer font-medium";

    const variantStyles = {
        primary:
            "bg-golden-primary text-[#0A0A0A] hover:bg-[#B89B2F] hover:shadow-[0_0_20px_rgba(212,175,55,0.3)]",
        secondary:
            "bg-transparent text-golden-primary border-2 border-golden-primary hover:bg-golden-primary hover:text-[#0A0A0A]",
    };
    return (
        <button
            className={`${baseStyles} ${variantStyles[variant]} ${className}`}
            {...props}>
            {children}
        </button>
    );
};