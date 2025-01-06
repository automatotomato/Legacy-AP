import React from 'react';

interface TabsProps {
  value: string;
  onValueChange: (value: string) => void;
  children: React.ReactNode;
}

interface TabsListProps {
  children: React.ReactNode;
}

interface TabsTriggerProps {
  value: string;
  currentValue: string;
  onSelect: (value: string) => void;
  children: React.ReactNode;
}

export function Tabs({ value, onValueChange, children }: TabsProps) {
  return (
    <div className="w-full">
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { currentValue: value, onSelect: onValueChange });
        }
        return child;
      })}
    </div>
  );
}

export function TabsList({ children }: TabsListProps) {
  return (
    <div className="flex space-x-1 rounded-lg bg-emerald-100/20 p-1">
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          return child;
        }
        return null;
      })}
    </div>
  );
}

export function TabsTrigger({ value, currentValue, onSelect, children }: TabsTriggerProps) {
  return (
    <button
      onClick={() => onSelect(value)}
      className={`px-3 py-2 text-sm font-medium rounded-md transition-all
                ${value === currentValue
                  ? 'bg-white text-emerald-600 shadow'
                  : 'text-gray-600 hover:text-emerald-600 hover:bg-white/50'}`}
    >
      {children}
    </button>
  );
}