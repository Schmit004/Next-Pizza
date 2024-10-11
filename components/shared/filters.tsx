'use client';

import React from 'react';
import { Input } from '../ui';
import { Title } from './title';
import { RangeSlider } from './range-slider';
import { CheckboxFiltersGroup } from './checkbox-filters-group';
import { useIngredients, useFilters, useQueryFilters } from '@/hooks';

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  const { ingredients, loading } = useIngredients();
  const items = ingredients.map((item) => ({ value: String(item.id), text: item.name }));

  const filters = useFilters();
  useQueryFilters(filters);

  const updatePrices = (prices: number[]) => {
    filters.setPrices('priceFrom', prices[0]);
    filters.setPrices('priceTo', prices[1]);
  };

  return (
    <div className={className}>
      <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />

      <CheckboxFiltersGroup
        title="Тип теста"
        name="pizzaTypes"
        className="mb-5"
        onClickCheckbox={filters.setPizzaTypes}
        selected={filters.pizzaTypes}
        items={[
          { text: 'Тонкое', value: '1' },
          { text: 'Традиционное', value: '2' },
        ]}
      />

      <CheckboxFiltersGroup
        title="Размеры"
        name="sizes"
        className="mb-5"
        onClickCheckbox={filters.setSizes}
        selected={filters.sizes}
        items={[
          { text: '20 см', value: '20' },
          { text: '30 см', value: '30' },
          { text: '40 см', value: '40' },
        ]}
      />

      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className='font-bold mb-3'>Цена от и до:</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={1000}
            value={String(filters.prices.priceFrom)}
            onChange={(evt) => filters.setPrices('priceFrom', Number(evt.target.value))}
          />
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={1000}
            value={String(filters.prices.priceTo)}
            onChange={(evt) => filters.setPrices('priceTo', Number(evt.target.value))}
          />
        </div>

        <RangeSlider
          min={0}
          max={1000}
          step={10}
          value={[filters.prices.priceFrom || 0, filters.prices.priceTo || 1000]}
          onValueChange={updatePrices}
        />
      </div>

      <CheckboxFiltersGroup
        className="mt-5"
        title="Ингредиенты"
        name="ingredients"
        items={items}
        defaultItems={items.slice(0, 5)}
        limit={5}
        loading={loading}
        onClickCheckbox={filters.setSelectedIngredients}
        selected={filters.selectedIngredients}
      />
    </div>
  );
};
