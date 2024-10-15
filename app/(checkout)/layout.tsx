import { Metadata } from 'next';
import { Container } from '@/components/shared';

export const metadata: Metadata = {
  title: 'Next Pizza | Корзина',
  description: 'Generated by create next app',
};

export default function CheckoutLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-[#F4F1EE]">
      <Container>
        {children}
      </Container>
    </main>
  );
}
