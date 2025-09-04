import { ExternalLink } from 'lucide-react';

interface LinkTileProps {
  title: string;
  description: string;
  url: string;
}

export function LinkTile({ title, description, url }: LinkTileProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block p-8 bg-white border border-gray-100 rounded-lg hover:border-brand-blue-primary hover:shadow-lg transition-all duration-200"
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-brand-neutral-dark group-hover:text-brand-blue-primary transition-colors duration-200 mb-2">
            {title}
          </h3>
          <p className="text-brand-neutral-grey text-sm leading-relaxed">
            {description}
          </p>
        </div>
        <ExternalLink 
          className="w-5 h-5 text-brand-neutral-grey group-hover:text-brand-blue-primary transition-colors duration-200 ml-4 flex-shrink-0" 
        />
      </div>
    </a>
  );
}