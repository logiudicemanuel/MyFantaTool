import { Badge } from "@/components/ui/badge";
import { BadgeCheck } from "lucide-react";
import HomeQuickStart from "@/components/home/HomeQuickStart";
import FeatureSection from "@/components/home/FeatureSection";

export default function Home() {
  return (
    <div className="min-h-full">
      {/* Hero Section */}
      <div className="flex flex-col gap-6 items-center justify-center min-h-[50vh] px-4 py-12 bg-gradient-to-br from-purple-100 via-indigo-50 to-blue-100 dark:from-purple-950 dark:via-slate-900 dark:to-blue-950 transition-all">
        <Badge variant="outline" className="px-4 py-1 gap-2 animate-fade-in">
          <BadgeCheck className="w-4 h-4 text-primary" />
          Gestisci la tua asta con stile
        </Badge>

        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400">
          MyFantaTool
        </h1>

        <p className="text-center text-muted-foreground text-lg max-w-2xl px-4">
          La piattaforma definitiva per gestire la tua asta del fantacalcio.
          <br className="hidden md:block" /> Elegante, potente e facile da
          usare.
        </p>

        {/* Quick Stats Grid */}
        <HomeQuickStart />
      </div>

      {/* Features Section */}
      <FeatureSection />
    </div>
  );
}
