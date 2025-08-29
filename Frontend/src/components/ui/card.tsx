import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = "" }) => (
  <div className={`bg-white rounded-lg shadow p-4 ${className}`}>{children}</div>
);

const CardContent: React.FC<CardProps> = ({ children, className = "" }) => (
  <div className={`p-2 ${className}`}>{children}</div>
);

export { Card, CardContent };
