import React, { useState, useEffect, useMemo } from 'react';
import Card from '../ui/Card';
import Alert from '../ui/Alert';
import ProjectFilter from '../forms/ProjectFilter';

import type { Project, Category, SortField, SortOrder } from "../../types/project";
import { fetchProjects } from "../../services/projectService";
import { applyFilters } from "../../util/projectHelpers";

export default function ProjectList() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<Category | "all">("all");
  const [sortField, setSortField] = useState<SortField>("year");
  const [sortOrder, setSortOrder] = useState<SortOrder>("desc");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchProjects();
        setProjects(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Bilinmeyen hata");
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  const filtered = useMemo(() => {
    return applyFilters(projects, search, category, sortField, sortOrder);
  }, [projects, search, category, sortField, sortOrder]);

  return (
    <section id="projeler" className="py-16 px-4 bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10">Projelerim</h2>
        
        {error && (
          <div className="mb-6">
            <Alert variant="error" title="Hata">{error}</Alert>
          </div>
        )}

        <ProjectFilter 
          search={search} 
          onSearchChange={setSearch}
          category={category} 
          onCategoryChange={setCategory}
          sortField={sortField} 
          onSortFieldChange={setSortField}
          sortOrder={sortOrder} 
          onSortOrderChange={setSortOrder}
          resultCount={filtered.length} 
          totalCount={projects.length}
        />

        {loading && (
          <p className="text-center text-gray-500 dark:text-gray-400 py-10">
            Projeler yükleniyor...
          </p>
        )}

        {!loading && filtered.length === 0 && !error && (
          <p className="text-center text-gray-500 dark:text-gray-400 py-10">
            Aradığınız kriterlere uygun proje bulunamadı.
          </p>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(project => (
            <Card 
              key={project.id} 
              variant="elevated" 
              title={project.title} 
              image={project.image} 
              imageAlt={`${project.title} görseli`}
            >
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 h-10">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tech.map(t => (
                  <span 
                    key={t} 
                    className="bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 text-xs px-2.5 py-1 rounded-full font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400 font-semibold border-t border-gray-100 dark:border-gray-800 pt-3 mt-auto">
                <span>{project.year}</span>
                <span className="uppercase tracking-wider">{project.category}</span>
              </div>
            </Card>
          ))}
        </div>

        {!loading && !error && (
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-8 text-center">
            {filtered.length} / {projects.length} proje gösteriliyor
          </p>
        )}
      </div>
    </section>
  );
}
