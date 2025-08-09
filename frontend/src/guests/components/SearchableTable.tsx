import { Field, Input } from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { useEffect, useState, type ReactNode } from "react";
import EmptyState from "../../components/common/EmptyState";

interface TableHeader<T extends object> {
    key: keyof T | 'actions';
    label: string;
    render?: (item: T, key: keyof T | 'actions') => React.ReactNode;
}

interface SearchableTableProps<T extends object> {
    data: T[];
    itemsPerPage?: number;
    headers: TableHeader<T>[];
    searchKeys: (keyof T)[];
}

export default function SearchableTable<T extends object>({
    data,
    itemsPerPage = 10,
    headers,
    searchKeys,
}: SearchableTableProps<T>) {
    const [searchTerm, setSearchTerm] = useState("");
    const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedSearchTerm(searchTerm);
        }, 500);
        return () => {
            clearTimeout(handler);
        };
    }, [searchTerm]);

    const filteredData = data.filter((item) =>
        searchKeys.some((key) => {
            const value = item[key];
            return (
                (typeof value === "string" || typeof value === "number") &&
                String(value).toLowerCase().includes(debouncedSearchTerm.toLowerCase())
            );
        })
    );

    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    const paginatedData = filteredData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const goToPage = (page: number) => {
        setCurrentPage(Math.max(1, Math.min(totalPages, page)));
    };

    const getPageNumbers = () => {
        const maxPagesToShow = 3; 
        const pageNumbers = [];

        if (totalPages <= maxPagesToShow) {
            for (let i = 1; i <= totalPages; i++) {
                pageNumbers.push(i);
            }
        } else {
            const startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
            const endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

            if (startPage > 1) {
                pageNumbers.push(1);
                if (startPage > 2) {
                    pageNumbers.push("...");
                }
            }

            for (let i = startPage; i <= endPage; i++) {
                pageNumbers.push(i);
            }

            if (endPage < totalPages) {
                if (endPage < totalPages - 1) {
                    pageNumbers.push("...");
                }
                pageNumbers.push(totalPages);
            }
        }

        return pageNumbers;
    };

    const pageNumbers = getPageNumbers();

    return (
        <>
            <div className="flex justify-between items-center mb-4">
                <Field>
                    <div className="relative mt-3">
                        <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-white/60" />
                        <Input
                            className={clsx(
                                "block w-2xs rounded-lg border-none bg-white/5 px-10 py-1.5 text-sm/6 text-white",
                                "focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white/25"
                            )}
                            placeholder="Search..."
                            value={searchTerm}
                            onChange={(e) => {
                                setSearchTerm(e.target.value);
                                setCurrentPage(1);
                            }}
                        />
                    </div>
                </Field>
            </div>

            <div className="mt-8 overflow-x-auto rounded-lg shadow-md">
                <table className="min-w-full divide-y divide-gray-700">
                    <thead className="bg-transparent">
                        <tr>
                            {headers.map((header) => (
                                <th
                                    key={String(header.key)}
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-400"
                                >
                                    {header.label}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-700 bg-transparent">
                        {paginatedData.length > 0 ? (
                            paginatedData.map((item, index) => (
                                <tr
                                    key={`row-${index}`}
                                    className="hover:bg-gray-700/30 transition-colors duration-150 ease-in-out"
                                >
                                    {headers.map((header) => (
                                        <td
                                            key={`cell-${String(header.key)}`}
                                            className="whitespace-nowrap px-6 py-4 text-sm text-gray-300"
                                        >
                                            {header.render
                                                ? header.render(item, header.key)
                                                : (
                                                    (header.key in item)
                                                        ? (item[header.key as keyof T] as ReactNode)
                                                        : null
                                                )
                                            }
                                        </td>
                                    ))}
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={headers.length} className="py-10">
                                    <div className="flex justify-center items-center h-full w-full text-sm text-gray-400">
                                        <EmptyState
                                            message="There are no items in this list."
                                            buttonLink="/leaderboard"
                                        />
                                    </div>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {totalPages > 1 && (
                <div className="mt-4 flex justify-center gap-2">
                    <button
                        onClick={() => goToPage(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="px-3 py-1 rounded bg-gray-700 text-white text-sm disabled:opacity-50"
                    >
                        Previous
                    </button>
                    {/* Render page numbers based on the new logic */}
                    {pageNumbers.map((page, i) =>
                        typeof page === "number" ? (
                            <button
                                key={i}
                                onClick={() => goToPage(page)}
                                className={clsx(
                                    "px-3 py-1 rounded text-sm",
                                    currentPage === page
                                        ? "bg-yellow-600 text-white"
                                        : "bg-gray-700 text-white hover:bg-gray-600"
                                )}
                            >
                                {page}
                            </button>
                        ) : (
                            <span key={i} className="px-3 py-1 text-sm text-gray-400">
                                {page}
                            </span>
                        )
                    )}
                    <button
                        onClick={() => goToPage(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="px-3 py-1 rounded bg-gray-700 text-white text-sm disabled:opacity-50"
                    >
                        Next
                    </button>
                </div>
            )}
        </>
    );
}