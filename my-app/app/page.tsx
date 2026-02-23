import { Badge } from "@/components/ui/badge";
import { BadgeCheck } from "lucide-react";

export default function Home() {
  return (
    <div className="h-full">
      <div className="flex flex-col gap-4 items-center justify-center h-[40%] bg-gradient-to-r from-purple-200 to-blue-200 dark:bg-gradient-to-r dark:from-purple-900 dark:to-blue-900">
        <Badge variant="outline">
          <BadgeCheck data-icon="inline-start" />
          Gestisci la tua asta con stile
        </Badge>
        <h1 className="text-4xl font-bold">MyFantaTool</h1>
        <div className="text-center">
          La piattaforma definitiva per gestire la tua asta del fantacalcio.
          <br></br> Elegante, potente e facile da usare.
        </div>
      </div>
    </div>
  );
}
