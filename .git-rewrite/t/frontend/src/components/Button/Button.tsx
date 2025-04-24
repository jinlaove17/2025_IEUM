import { ButtonHTMLAttributes, ReactNode } from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/utils/cn"

const buttonVariants = cva(
  //
  "rounded-xl px-5 py-3 cursor-pointer transition-colors duration-200",
  {
    variants: {
      variant: {
        default: "bg-em-black text-white font-semibold  hover:bg-em-black/80",
        disabled: "bg-em-gray-sm text-em-gray focus:outline-none",
        outline: "bg-em-white border border-em-gray text-em-black",
        ghost: "bg-transparent text-em-black",
        destructive: "bg-em-marker text-white font-semibold hover:bg-em-marker/80",
      },
      shape: {
        default: "rounded-xl",
        square: "rounded-none",
        circle: "rounded-full size-10",
      },
      size: {
        default: "px-5 py-3",
        sm: "px-4 py-2",
        lg: "px-6 py-4",
      },
      weight: {
        light: "font-light",
        normal: "font-normal",
        semibold: "font-semibold",
        bold: "font-bold",
      },
    },
    defaultVariants: {
      variant: "default",
      shape: "default",
      size: "default",
      weight: "normal",
    },
  },
)

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children?: ReactNode
}

const Button = ({ className, variant, shape, size, weight, children, ...props }: ButtonProps) => {
  return (
    <button className={cn(buttonVariants({ variant, shape, size, weight }), className)} {...props}>
      {children}
    </button>
  )
}
export default Button
