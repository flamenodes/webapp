import { ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'

export interface ParsedMessagePart {
  type: 'text' | 'button'
  content: string
  label?: string
  url?: string
}

/**
 * Parse message with :button:Label:URL syntax
 * Example: "Access your server :button:Panel:https://panel.example.com or contact support"
 */
export function parseDeploymentMessage(message: string): ParsedMessagePart[] {
  const parts: ParsedMessagePart[] = []
  const buttonRegex = /:button:([^:]+):([^:\s]+)/g
  
  let lastIndex = 0
  let match: RegExpExecArray | null

  while ((match = buttonRegex.exec(message)) !== null) {
    // Add text before the button
    if (match.index > lastIndex) {
      const textBefore = message.substring(lastIndex, match.index).trim()
      if (textBefore) {
        parts.push({ type: 'text', content: textBefore })
      }
    }

    // Add button
    parts.push({
      type: 'button',
      content: match[0],
      label: match[1],
      url: match[2],
    })

    lastIndex = match.index + match[0].length
  }

  // Add remaining text
  if (lastIndex < message.length) {
    const textAfter = message.substring(lastIndex).trim()
    if (textAfter) {
      parts.push({ type: 'text', content: textAfter })
    }
  }

  // If no buttons found, return the whole message as text
  if (parts.length === 0 && message.trim()) {
    parts.push({ type: 'text', content: message.trim() })
  }

  return parts
}

export function RenderDeploymentMessage({ message }: { message: string }) {
  const parts = parseDeploymentMessage(message)

  return (
    <div className="space-y-2">
      {parts.map((part, index) => {
        if (part.type === 'text') {
          return (
            <p key={index} className="text-sm">
              {part.content}
            </p>
          )
        }

        return (
          <Button
            key={index}
            variant="default"
            size="sm"
            asChild
            className="mr-2"
          >
            <a href={part.url} target="_blank" rel="noopener noreferrer">
              {part.label}
              <ExternalLink className="w-3 h-3 ml-2" />
            </a>
          </Button>
        )
      })}
    </div>
  )
}
