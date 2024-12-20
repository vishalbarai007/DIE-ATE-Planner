import { LucideIcon } from 'lucide-react'
import { cn } from '../../lib/utils'

interface ActionCardProps {
  icon: LucideIcon
  title: string
  className?: string
}

export function ActionCard({ icon: Icon, title, className }: ActionCardProps) {
  return (
    <div className={cn(
      "flex items-center gap-2 sm:gap-4 p-3 sm:p-4 bg-white rounded-lg border hover:shadow-md transition-shadow cursor-pointer",
      className
    )}>
      <div className="p-1 sm:p-2 rounded-lg bg-gray-50">
        <Icon className="w-4 h-4 sm:w-6 sm:h-6" />
      </div>
      <span className="text-sm sm:text-base font-medium">{title}</span>
    </div>
  )
}

