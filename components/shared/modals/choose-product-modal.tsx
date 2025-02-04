'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { ProductForm } from '@/components/shared/product-form';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { ProductWithRelations } from '@/@types/prisma';
import { cn } from '@/lib/utils';

interface Props {
  product: ProductWithRelations;
  className?: string;
}

export const ChooseProductModal: React.FC<Props> = ({ product, className }) => {
  const router = useRouter();

  return (
    <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
      <DialogContent className={cn('p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden', className)}>
        <ProductForm product={product} onSubmit={() => router.back()} />
      </DialogContent>
    </Dialog>
  );
};
