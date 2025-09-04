interface LinkTileProps {
  title: string
  description: string
  href: string
}

export default function LinkTile({ title, description, href }: LinkTileProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block p-6 bg-white rounded-lg hover:shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2"
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-brand-ink mb-2 group-hover:text-brand-blue transition-colors">
            {title}
          </h3>
          <p className="text-brand-grey leading-relaxed">
            {description}
          </p>
        </div>
        <div className="ml-4 flex-shrink-0">
          <svg
            className="w-5 h-5 text-brand-grey group-hover:text-brand-blue transition-colors"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </div>
      </div>
    </a>
  )
}
