import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface AgentRole {
  id: string;
  role: string;
  title: string;
  description: string;
  tools: string[];
  workflow: string;
}

export enum SectionType {
  DARK = 'DARK',
  LIGHT = 'LIGHT',
  GRADIENT = 'GRADIENT'
}