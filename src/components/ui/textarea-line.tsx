import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "border-input focus:border-white selection:bg-white selection:text-foreground placeholder:text-white/70 flex field-sizing-content min-h-32 resize-none text-white w-full border-b bg-transparent py-2 text-base outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-base",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
