import React from 'react';
import Input from '../ui/Input';
import Button from '../ui/Button';
import type { Category, SortField, SortOrder } from '../../types/project';

interface ProjectFilterProps {
  search: string;
  onSearchChange: (value: string) => void;
  category: Category | "all";
  onCategoryChange: (value: Category | "all") => void;
  sortField: SortField;
  onSortFieldChange: (value: SortField) => void;
  sortOrder: SortOrder;
  onSortOrderChange: (value: SortOrder) => void;
  resultCount: number;
  totalCount: number;
}

const CATEGORIES: (Category | "all")[] = ["all", "frontend", "fullstack", "backend"];

export default function ProjectFilter({
  search,
  onSearchChange,
  category,
  onCategoryChange,
  sortField,
  onSortFieldChange,
  sortOrder,
  onSortOrderChange,
  resultCount,
  totalCount
}: ProjectFilterProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-8">
      <div className="flex-1">
        <Input 
          id="search" 
          label=""
          placeholder="Proje ara (İsim, teknoloji vb.)..." 
          value={search} 
          onChange={e => onSearchChange(e.target.value)} 
        />
      </div>
      
      <div className="flex gap-2 flex-wrap items-center">
        {CATEGORIES.map(cat => (
          <Button 
            key={cat} 
            variant={category === cat ? "primary" : "ghost"} 
            size="sm" 
            onClick={() => onCategoryChange(cat)}
            type="button"
          >
            {cat === "all" ? "Tümü" : cat.toUpperCase()}
          </Button>
        ))}
      </div>

      <div className="flex gap-2 items-center sm:ml-auto">
        <select 
          value={sortField} 
          onChange={e => onSortFieldChange(e.target.value as SortField)} 
          className="border border-gray-300 rounded-lg px-3 py-2 text-sm dark:bg-gray-800 dark:border-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-colors"
        >
          <option value="year">Yıla Göre</option>
          <option value="title">Başlığa Göre</option>
        </select>
        
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={() => onSortOrderChange(sortOrder === "asc" ? "desc" : "asc")}
          type="button"
        >
          {sortOrder === "asc" ? "A-Z / Eski-Yeni" : "Z-A / Yeni-Eski"}
        </Button>
      </div>
    </div>
  );
}
