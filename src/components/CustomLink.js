import { cn } from "@/lib/utils"
import { ExternalLink } from "lucide-react"
import Link from "next/link"

const CustomLink = ({
  href,
  children,
  className,
  ...rest
}) => {
  const isInternalLink = href.startsWith("/")
  const isAnchorLink = href.startsWith("#")

  if (isInternalLink || isAnchorLink) {
    return (
      <Link href={href} className={className} {...rest}>
        {children}
      </Link>
    )
  }

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center gap-1 align-baseline underline underline-offset-4",
        className
      )}
      {...rest}
    >
      <span>{children}</span>
      <ExternalLink className="ml-0.5 inline-block h-4 w-4" />
    </Link>
  )
}

export default CustomLink
