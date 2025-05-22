type Filter = {
  id: string;
  label: string;
};

type ProjectFiltersProps = {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
  filters: Filter[];
};

const ProjectFilters = ({ activeFilter, onFilterChange, filters }: ProjectFiltersProps) => {
  return (
    <div className="flex flex-wrap gap-3 py-12 justify-center">
      {filters.map((filter) => (
        <button
          key={filter.id}
          onClick={() => onFilterChange(filter.id)}
          className={`
            px-4 py-2 rounded-full text-sm font-medium transition-colors
            ${
              activeFilter === filter.id
                ? "bg-primary text-black"
                : "bg-gray-100 text-gray-700 hover:bg-primary/50"
            }
          `}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
};

export default ProjectFilters;
