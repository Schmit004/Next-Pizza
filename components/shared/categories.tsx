'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { useCategoryStore } from '@/store';

interface Props {
  className?: string;
}

const items = [
  { name: 'Пицца', id: 1 },
  { name: 'Комбо', id: 2 },
  { name: 'Закуски', id: 3 },
  { name: 'Коктейли', id: 4 },
  { name: 'Кофе', id: 5 },
  { name: 'Десерты', id: 6 },
];


export const Categories: React.FC<Props> = ({ className }) => {
  const categoryActiveId = useCategoryStore((state) => state.activeId);

  return (
    <div className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}>
      {items.map(({ name, id }) => (
        <a
          className={cn(
            'flex items-center font-bold h-11 rounded-2xl px-5',
            categoryActiveId === id && 'bg-white shadow-md shadow-gray-200 text-primary',
          )}
          href={`/#${name}`}
          key={id}>
          <button>{name}</button>
        </a>
      ))}
    </div>
  );
};
