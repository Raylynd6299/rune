import { merge } from "@/lib/merge";
import React from "react";

const inputStyles = {
    base: "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
    error: "border-destructive focus-visible:ring-destructive",
};

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    error?: string;
    label?: string;
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, error, label, id, ...props }, ref) => {
        const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
        const inputClassName = merge(
            inputStyles.base,
            error ? inputStyles.error : "",
            className,
        );

        return (
            <div className="space-y-2">
                {label && (
                    <label
                        htmlFor={inputId}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                        {label}
                    </label>
                )}
                <input
                    id={inputId}
                    className={inputClassName}
                    ref={ref}
                    {...props}
                />
                {error && (
                    <p className="text-sm text-destructive">{error}</p>
                )}
            </div>
        );
    },
);
Input.displayName = "Input";

export { Input };
