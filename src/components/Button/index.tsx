import { merge } from "@/lib/merge";
import React from "react";

// Configuration object to replace CVA
const buttonStyles = {
  base: "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  variants: {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    destructive:
      "bg-destructive text-destructive-foreground hover:bg-destructive/90",
    outline:
      "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    ghost: "hover:bg-accent hover:text-accent-foreground",
    link: "text-primary underline-offset-4 hover:underline",
  },
  sizes: {
    default: "h-10 px-4 py-2",
    sm: "h-9 rounded-md px-3",
    lg: "h-11 rounded-md px-8",
    icon: "h-10 w-10",
  },
};

// Helper function to generate button classes
const getButtonClassName = (
  variant: keyof typeof buttonStyles.variants = "default",
  size: keyof typeof buttonStyles.sizes = "default",
  className?: string,
): string => {
  return merge(
    buttonStyles.base,
    buttonStyles.variants[variant],
    buttonStyles.sizes[size],
    className,
  );
};

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof buttonStyles.variants;
  size?: keyof typeof buttonStyles.sizes;
  asChild?: boolean;
};

const Button: React.ForwardRefExoticComponent<
  ButtonProps & React.RefAttributes<HTMLButtonElement>
> = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "default",
      size = "default",
      asChild = false,
      children,
      ...props
    },
    ref,
  ) => {
    const buttonClassName = getButtonClassName(variant, size, className);

    if (asChild && React.isValidElement(children)) {
      // Clone the child element and add our props to it
      const childProps = children.props as React.HTMLAttributes<HTMLElement>;
      const mergedProps = {
        ...childProps,
        ...props,
        className: merge(buttonClassName, childProps.className),
        ref,
      };
      return React.cloneElement(children, mergedProps);
    }

    return (
      <button
        className={buttonClassName}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  },
);
Button.displayName = "Button";

export { Button };
