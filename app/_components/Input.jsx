import React from "react"

const Input = React.forwardRef(({ className, type = "text", ...props }, ref) => {
  const baseStyles = 
    "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"

  const classes = `${baseStyles} ${className || ""}`

  return (
    <input
      type={type}
      className={classes}
      ref={ref}
      {...props}
    />
  )
})

Input.displayName = "Input"

export default Input