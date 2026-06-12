import { BadgeCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import HomeQuickStart from "./HomeQuickStart";

export default function HeroSection() {
  return (
    <div className="hero-gradient flex min-h-[50vh] flex-col items-center justify-center gap-6 px-4 py-12">
      <Badge
        variant="outline"
        className="gap-2 border-white/35 bg-white/20 px-4 py-1 text-white shadow-sm backdrop-blur-sm"
      >
        <BadgeCheck className="h-4 w-4 text-white" />
        Gestisci la tua asta con stile
      </Badge>

      <h1 className="text-center text-4xl font-extrabold tracking-tight text-white drop-shadow-lg md:text-6xl">
        MyFantaTool
      </h1>

      <p className="max-w-2xl px-4 text-center text-lg text-white/90 drop-shadow-sm">
        La piattaforma definitiva per gestire la tua asta del fantacalcio.
        <br className="hidden md:block" /> Elegante, potente e facile da usare.
      </p>

      <HomeQuickStart />
    </div>
  );
}
