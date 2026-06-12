"use client";

import type { PointerEvent } from "react";
import { Database, List, Trophy, Users } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

const features = [
  {
    title: "La Mia Squadra",
    description:
      "Gestisci la tua rosa completa con visualizzazione tattica e statistiche dettagliate di ogni giocatore.",
    action: "Vai alla Squadra",
    icon: Trophy,
    gradient: "from-red-500 to-red-800",
    iconBackground: "bg-red-100 dark:bg-red-900/30",
    iconColor: "text-red-600 dark:text-red-400",
    buttonColor:
      "text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300",
    corners: ["feature-corner--top-left", "feature-corner--bottom-right"],
  },
  {
    title: "Database Giocatori",
    description:
      "Consulta tutti i giocatori disponibili, organizzati per squadra, con statistiche complete per prepararti all'asta.",
    action: "Esplora Database",
    icon: Database,
    gradient: "from-blue-500 to-blue-800",
    iconBackground: "bg-blue-100 dark:bg-blue-900/30",
    iconColor: "text-blue-600 dark:text-blue-400",
    buttonColor:
      "text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300",
    corners: ["feature-corner--top-right", "feature-corner--bottom-left"],
  },
  {
    title: "Gestione Asta",
    description:
      "Crea e gestisci liste personalizzate di giocatori suddivise per ruolo e priorità per la tua asta.",
    action: "Gestisci Liste",
    icon: List,
    gradient: "from-green-500 to-green-800",
    iconBackground: "bg-green-100 dark:bg-green-900/30",
    iconColor: "text-green-600 dark:text-green-400",
    buttonColor:
      "text-green-600 hover:text-green-800 dark:text-green-400 dark:hover:text-green-300",
    corners: ["feature-corner--top-right", "feature-corner--bottom-left"],
  },
  {
    title: "Asta Live",
    description:
      "Simula un'asta live con timer, offerte in tempo reale e visualizzazione delle squadre in costruzione.",
    action: "Simula Asta",
    icon: Users,
    gradient: "from-purple-500 to-purple-800",
    iconBackground: "bg-purple-100 dark:bg-purple-900/30",
    iconColor: "text-purple-600 dark:text-purple-400",
    buttonColor:
      "text-purple-600 hover:text-purple-800 dark:text-purple-400 dark:hover:text-purple-300",
    corners: ["feature-corner--top-left", "feature-corner--bottom-right"],
  },
];

export default function FeatureSection() {
  const updateTilt = (event: PointerEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    const card = event.currentTarget.querySelector<HTMLElement>(
      "[data-feature-card]",
    );

    if (card) {
      card.style.transform = `rotateX(${-y * 12}deg) rotateY(${x * 16}deg) scale(1.04)`;
    }
  };

  const resetTilt = (event: PointerEvent<HTMLDivElement>) => {
    const card = event.currentTarget.querySelector<HTMLElement>(
      "[data-feature-card]",
    );

    if (card) {
      card.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-20 flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-2">
        Funzionalità generali
      </h2>
      <p className="text-muted-foreground mb-12 text-center">
        Tutto ciò che ti serve per una perfetta asta del fantacalcio
      </p>

      <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2">
        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <div
              key={feature.title}
              className="feature-card-shell group"
              onPointerMove={updateTilt}
              onPointerLeave={resetTilt}
            >
              <Card
                data-feature-card
                className="feature-card relative isolate flex h-full min-h-72 flex-col overflow-hidden border-none bg-white/70 py-0"
              >
                {feature.corners.map((position) => (
                  <div
                    key={position}
                    className={`feature-corner absolute z-0 bg-gradient-to-br opacity-90 transition-transform duration-300 group-hover:scale-110 ${position} ${feature.gradient}`}
                  />
                ))}

                <CardContent className="relative z-10 flex flex-1 flex-col gap-5 p-8">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-lg transition-transform group-hover:scale-110 ${feature.iconBackground}`}
                  >
                    <Icon className={`h-6 w-6 ${feature.iconColor}`} />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  <Button
                    variant="ghost"
                    className={`group/btn mt-auto h-auto w-fit cursor-pointer p-0 font-semibold ${feature.buttonColor}`}
                  >
                    {feature.action}
                    <span className="ml-1 transition-transform group-hover/btn:translate-x-1">
                      →
                    </span>
                  </Button>
                </CardContent>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
}
