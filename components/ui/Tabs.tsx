"use client";

import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useId } from "react";

export interface TabItem {
  id: string;
  label: string;
}

interface TabsProps {
  tabs: TabItem[];
  activeId: string;
  onChange: (id: string) => void;
  children: React.ReactNode;
}

export function Tabs({ tabs, activeId, onChange, children }: TabsProps) {
  const groupId = useId();

  return (
    <div>
      <div
        role="tablist"
        aria-label="Filtrer les réalisations"
        className="mx-auto mb-10 flex w-fit gap-1 rounded-full border border-slate-200 bg-slate-50 p-1"
      >
        {tabs.map((tab) => {
          const isActive = tab.id === activeId;
          return (
            <button
              key={tab.id}
              role="tab"
              id={`${groupId}-tab-${tab.id}`}
              aria-selected={isActive}
              aria-controls={`${groupId}-panel-${tab.id}`}
              onClick={() => onChange(tab.id)}
              className={cn(
                "relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:shadow-focus sm:px-5",
                isActive ? "text-white" : "text-slate-600 hover:text-ink-800"
              )}
            >
              {isActive && (
                <motion.span
                  layoutId={`${groupId}-active-tab`}
                  className="absolute inset-0 -z-10 rounded-full bg-primary-500"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              {tab.label}
            </button>
          );
        })}
      </div>
      <div
        role="tabpanel"
        id={`${groupId}-panel-${activeId}`}
        aria-labelledby={`${groupId}-tab-${activeId}`}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeId}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
