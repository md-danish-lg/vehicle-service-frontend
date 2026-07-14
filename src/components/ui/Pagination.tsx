import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./Button";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  return (
    <div className="mt-6 flex items-center justify-between">
      <p className="text-sm text-slate-400">
        Page {currentPage} of {totalPages}
      </p>

      <div className="flex items-center gap-2">
        <Button
          variant="secondary"
          size="sm"
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
        >
          <ChevronLeft size={16} />
        </Button>

        {Array.from({ length: totalPages }, (_, index) => {
          const page = index + 1;

          return (
            <Button
              key={page}
              variant={page === currentPage ? "primary" : "secondary"}
              size="sm"
              onClick={() => onPageChange(page)}
            >
              {page}
            </Button>
          );
        })}

        <Button
          variant="secondary"
          size="sm"
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
        >
          <ChevronRight size={16} />
        </Button>
      </div>
    </div>
  );
}