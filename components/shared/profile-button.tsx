import React from 'react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { CircleUser, User } from 'lucide-react';
import { Button } from '../ui/button';

interface Props {
  className?: string;
  onClickSignIn?: () => void;
}

export const ProfileButton: React.FC<Props> = ({ className, onClickSignIn }) => {
  const { data: session } = useSession();

  return (
    <div className={className}>
      {!session ? (
        <Button onClick={onClickSignIn} variant="outline" className="flex items-center gap-1">
          <User size={16} />
          Войти
        </Button>
      ) : (
        <Link href="/profile">
          <Button variant="secondary" className="flex items-center gap-2">
            <CircleUser size={18} />
            Профиль
          </Button>
        </Link>
      )}
    </div>
  );
};
