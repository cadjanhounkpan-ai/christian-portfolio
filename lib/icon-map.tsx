import { TrendingUp } from "lucide-react"
import {
  SearchX,
  Gauge,
  TrendingDown,
  MapPinX,
  CircleDollarSign,
  Bug,
  Code2,
  FileText,
  MapPin,
  ClipboardCheck,
  Instagram,
  Search,
  LayoutTemplate,
  Rocket,
  type LucideIcon,
} from "lucide-react";

export const iconMap: Record<string, LucideIcon> = {
  "search-x": SearchX,
  gauge: Gauge,
  "trending-down": TrendingDown,
  "map-pin-x": MapPinX,
  "circle-dollar-sign": CircleDollarSign,
  bug: Bug,
  "code-2": Code2,
  "file-text": FileText,
  "map-pin": MapPin,
  "clipboard-check": ClipboardCheck,
  instagram: Instagram,
  search: Search,
  "layout-template": LayoutTemplate,
  rocket: Rocket,
  "trending-up": TrendingUp,
};




export function getIcon(name: string): LucideIcon {
  return iconMap[name] ?? Code2;
}
