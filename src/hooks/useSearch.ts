import { useState, useMemo, useCallback } from 'react';
import type { MenuItem, SearchResult } from '../types/menu';
import { searchTree } from '../utils/searchTree';

export function useSearch(menuTree: MenuItem[]) {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const results: SearchResult[] = useMemo(() => {
    if (query.trim().length < 2) return [];
    return searchTree(menuTree, query).slice(0, 8);
  }, [menuTree, query]);

  const handleChange = useCallback((value: string) => {
    setQuery(value);
    setIsOpen(value.trim().length >= 2);
  }, []);

  const clearSearch = useCallback(() => {
    setQuery('');
    setIsOpen(false);
  }, []);

  return {
    query,
    results,
    isOpen,
    setIsOpen,
    handleChange,
    clearSearch,
  };
}
