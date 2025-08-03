import { FolderIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

interface EmptyStateProps {
    message?: string
    buttonText?: string
    buttonLink?: string
}

export default function EmptyState({
    message,
    buttonText,
    buttonLink = '/',
}: EmptyStateProps) {
    return (
        <div className="flex flex-col items-center justify-center text-center space-y-4 text-gray-400">
            <FolderIcon className="w-20 h-20 text-gray-500" />
            <p className="text-sm">{message}</p>
            {buttonText && buttonLink && (
                <Link
                    to={buttonLink}
                    className="inline-block rounded bg-yellow-600 px-4 py-2 text-sm font-medium text-white hover:bg-yellow-700 transition"
                >
                    {buttonText}
                </Link>
            )}

        </div>
    )
}
