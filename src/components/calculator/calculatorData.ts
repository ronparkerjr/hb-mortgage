import React from "react";
import {
  Calculator,
  RefreshCw,
  Home,
  TrendingDown,
  Building2,
  DollarSign,
  PieChart,
  Percent,
  Calendar,
  Sliders,
} from "lucide-react";

export interface CalculatorType {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

export const CALCULATOR_INVENTORY: CalculatorType[] = [
  {
    id: "purchase",
    title: "Mortgage Payment Calculator",
    description:
      "Calculate your estimated principal, interest, taxes, and insurance payments.",
    icon: Calculator,
  },
  {
    id: "refinance",
    title: "Refinance Calculator",
    description:
      "Compare your current payment against new loan terms and interest rates.",
    icon: RefreshCw,
  },
  {
    id: "affordability",
    title: "Home Affordability Calculator",
    description:
      "Estimate how much home you can comfortably afford based on target income.",
    icon: Home,
  },
  {
    id: "should-refi",
    title: "Should I Refinance?",
    description:
      "Evaluate breakeven timelines and long-term interest cost trade-offs.",
    icon: TrendingDown,
  },
  {
    id: "rent-vs-buy",
    title: "Buy vs. Rent Calculator",
    description:
      "Compare long-term net worth impact of buying a home vs. renting.",
    icon: Building2,
  },
  {
    id: "extra-payment",
    title: "Extra Payment Calculator",
    description:
      "See how additional principal payments shorten your loan term and save interest.",
    icon: DollarSign,
  },
  {
    id: "blended-rate",
    title: "Blended Rate Calculator",
    description:
      "Calculate the effective blended rate across first and second mortgages or debts.",
    icon: PieChart,
  },
  {
    id: "points",
    title: "Should I Buy Points?",
    description:
      "Determine whether paying discount points upfront makes financial sense.",
    icon: Percent,
  },
  {
    id: "principal",
    title: "Principal Balance Calculator",
    description:
      "Project remaining loan balance and equity build-up after any number of years.",
    icon: Calendar,
  },
  {
    id: "buydown",
    title: "Temporary Buydown Calculator",
    description:
      "Calculate initial discounted payments and subsidy costs for 2-1 or 1-0 buydowns.",
    icon: Sliders,
  },
];
