/* eslint-disable react-refresh/only-export-components -- контекст: провайдер и хук экспортируются вместе */
import React, { createContext, useContext, type ReactNode } from 'react';

export interface BlogPostPreload {
  id: number;
  title: string;
  slug: string;
  content: string;
  image_url?: string;
  tags: string[];
  created_at: string;
  updated_at: string;
}

interface PreloadState {
  blogPost: BlogPostPreload | null;
}

const PreloadContext = createContext<PreloadState>({ blogPost: null });

export function PreloadProvider({
  blogPost = null,
  children,
}: {
  blogPost?: BlogPostPreload | null;
  children: ReactNode;
}) {
  return (
    <PreloadContext.Provider value={{ blogPost }}>
      {children}
    </PreloadContext.Provider>
  );
}

export function usePreload() {
  return useContext(PreloadContext);
}
