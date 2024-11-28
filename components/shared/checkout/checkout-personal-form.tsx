import React from 'react';
import { WhiteBlock } from '../white-block';
import { FormInput } from '../form';

interface Props {
  className?: string;
}

export const CheckoutPersonalForm: React.FC<Props> = ({ className }) => {
  return (
    <WhiteBlock title="2. Персональные данные" className={className}>
      <div className="grid grid-cols-2 gap-5">
        <FormInput className="text-base" name="firstName" placeholder="Имя" />
        <FormInput className="text-base" name="lastName" placeholder="Фамилия" />
        <FormInput className="text-base" name="email" placeholder="Email" />
        <FormInput className="text-base" name="phone" placeholder="Телефон" />
      </div>
    </WhiteBlock>
  );
};
