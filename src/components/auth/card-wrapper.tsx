'use client';


import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import React from 'react';
import BackButton from '@/components/auth/back-button';
import AuthHeader from '@/components/auth/auth-header';

interface CardWrapperProps {
  label: string,
  title: string,
  backButtonHref: string,
  backButtonLabel: string
  children: React.ReactNode
}

const CardWrapper = ({ label, title, backButtonHref, backButtonLabel, children }: CardWrapperProps) => {
  return (
    <Card className="xl:w-1/4 md:w-1/2 shadow-md">
      <CardHeader>
        <AuthHeader label={label} title={title} />
      </CardHeader>
      <CardContent>
        {children}
      </CardContent>
      <CardFooter>
        <BackButton label={backButtonLabel} href={backButtonHref} />
      </CardFooter>
    </Card>
  );

};
export default CardWrapper;