import { BarChart3, LayoutDashboard, ShieldCheck } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import CtaSection from "./CtaSection";

export default function FeatureSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20 flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-2">
        Funzionalità generali
      </h2>
      <p className="text-muted-foreground mb-12 text-center">
        Tutto ciò che ti serve per una perfetta asta del fantacalcio
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
        <Card className="group h-fit py-0 flex flex-col border-none bg-white/60 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 overflow-hidden">
          <div className="h-2 w-full bg-gradient-to-r from-purple-600 to-indigo-600"></div>
          <CardContent className="flex flex-col gap-4 p-8 pt-0">
            <div className="bg-purple-100 dark:bg-purple-900/30 w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <ShieldCheck className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-xl">Squadre Serie A</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Esplora tutte le squadre, formazioni probabili e statistiche
                dettagliate dei giocatori per scegliere i tuoi top di reparto.
              </p>
            </div>
            <Button
              variant="ghost"
              className="cursor-pointer w-fit p-0 h-auto text-purple-600 hover:text-purple-700 dark:text-purple-400 font-semibold group/btn"
            >
              Esplora{" "}
              <span className="ml-1 group-hover/btn:translate-x-1 transition-transform">
                →
              </span>
            </Button>
          </CardContent>
        </Card>

        <Card className="group h-fit py-0 flex flex-col border-none bg-white/60 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 overflow-hidden">
          <div className="h-2 w-full bg-gradient-to-r from-blue-600 to-cyan-600"></div>
          <CardContent className="flex flex-col gap-4 p-8 pt-0">
            <div className="bg-blue-100 dark:bg-blue-900/30 w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <LayoutDashboard className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-xl">Gestione Asta</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Gestisci la tua asta in tempo reale, monitora il budget residuo
                delle squadre e traccia i tuoi acquisti strategici.
              </p>
            </div>
            <Button
              variant="ghost"
              className="cursor-pointer w-fit p-0 h-auto text-blue-600 hover:text-blue-700 dark:text-blue-400 font-semibold group/btn"
            >
              Esplora{" "}
              <span className="ml-1 group-hover/btn:translate-x-1 transition-transform">
                →
              </span>
            </Button>
          </CardContent>
        </Card>

        <Card className="group h-fit py-0 flex flex-col border-none bg-white/60 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 overflow-hidden">
          <div className="h-2 w-full bg-gradient-to-r from-emerald-600 to-teal-600"></div>
          <CardContent className="flex flex-col gap-4 p-8 pt-0">
            <div className="bg-emerald-100 dark:bg-emerald-900/30 w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <BarChart3 className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-xl">Statistiche Live</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Visualizza statistiche avanzate in tempo reale e formazioni
                aggiornate per ogni singola partita della stagione.
              </p>
            </div>
            <Button
              variant="ghost"
              className="cursor-pointer w-fit p-0 h-auto text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 font-semibold group/btn"
            >
              Esplora{" "}
              <span className="ml-1 group-hover/btn:translate-x-1 transition-transform">
                →
              </span>
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* CTA Section */}
      <CtaSection />
    </div>
  );
}
