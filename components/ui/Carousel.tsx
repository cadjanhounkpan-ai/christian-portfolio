"use client";

import { AnimatePresence, motion, type PanInfo } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface CarouselProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  prevLabel?: string;
  nextLabel?: string;
  autoPlayMs?: number;
  className?: string;
}

export function Carousel<T>({
  items,
  renderItem,
  prevLabel = "Précédent",
  nextLabel = "Suivant",
  className,
}: CarouselProps<T>) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const goTo = (next: number) => {
    if (items.length === 0) return;
    setDirection(next > index ? 1 : -1);
    setIndex(((next % items.length) + items.length) % items.length);
  };

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -80) goTo(index + 1);
    else if (info.offset.x > 80) goTo(index - 1);
  };

  if (items.length === 0) return null;

  return (
    <div className={cn("relative", className)}>
      <div className="overflow-hidden rounded-2xl">
        <AnimatePresence mode="wait" initial={false} custom={direction}>
          <motion.div
            key={index}
            custom={direction}
            initial={{ opacity: 0, x: direction >= 0 ? 60 : -60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction >= 0 ? -60 : 60 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.15}
            onDragEnd={handleDragEnd}
          >
            {renderItem(items[index] as T, index)}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => goTo(index - 1)}
          aria-label={prevLabel}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 text-ink-700 transition-colors hover:border-primary-500 hover:text-primary-600 focus-visible:outline-none focus-visible:shadow-focus"
        >
          <ChevronLeft className="h-5 w-5" aria-hidden="true" />
        </button>
        <div className="flex items-center gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              aria-label={`Aller à l'élément ${i + 1}`}
              onClick={() => goTo(i)}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                i === index ? "w-6 bg-primary-500" : "w-1.5 bg-slate-300"
              )}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => goTo(index + 1)}
          aria-label={nextLabel}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 text-ink-700 transition-colors hover:border-primary-500 hover:text-primary-600 focus-visible:outline-none focus-visible:shadow-focus"
        >
          <ChevronRight className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
