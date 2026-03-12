import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

export default function CtaSection() {
  return (
    <Card className="w-full mt-24 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 border-none overflow-hidden relative">
      <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
      <CardContent className="flex flex-col items-center gap-6 p-12 relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-white text-center">
          Pronto per iniziare?
        </h2>
        <p className="text-purple-50 text-center text-lg max-w-2xl">
          Inizia a gestire la tua asta del fantacalcio con la migliore
          piattaforma disponibile. Gratuita, veloce e sempre aggiornata.
        </p>
        <Button
          size="lg"
          className="bg-white text-purple-600 hover:bg-purple-50 hover:scale-105 transition-all px-10 py-6 text-lg font-bold rounded-full shadow-xl"
        >
          Inizia Ora
        </Button>
      </CardContent>
    </Card>
  );
}
