import { Card, CardContent } from "../ui/card";
import { Gamepad2, Users, Activity } from "lucide-react";

export default function HomeQuickStart() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl mt-8 px-4">
      <Card className="group bg-white/60 border-none shadow-md hover:shadow-xl transition-all duration-300">
        <CardContent className="flex items-center gap-4 p-6">
          <div className="bg-purple-500/10 p-3 rounded-xl group-hover:bg-purple-500/20 transition-colors">
            <Users className="w-8 h-8 text-purple-600 dark:text-purple-400" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-2xl">20</span>
            <span className="text-sm text-muted-foreground">
              Squadre di serie A
            </span>
          </div>
        </CardContent>
      </Card>

      <Card className="group bg-white/60 backdrop-blur-sm border-none shadow-md hover:shadow-xl transition-all duration-300">
        <CardContent className="flex items-center gap-4 p-6">
          <div className="bg-blue-500/10 p-3 rounded-xl group-hover:bg-blue-500/20 transition-colors">
            <Gamepad2 className="w-8 h-8 text-blue-600 dark:text-blue-400" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-2xl">500+</span>
            <span className="text-sm text-muted-foreground">
              Giocatori disponibili
            </span>
          </div>
        </CardContent>
      </Card>

      <Card className="group bg-white/60 backdrop-blur-sm border-none shadow-md hover:shadow-xl transition-all duration-300 sm:col-span-2 lg:col-span-1">
        <CardContent className="flex items-center gap-4 p-6">
          <div className="bg-emerald-500/10 p-3 rounded-xl group-hover:bg-emerald-500/20 transition-colors">
            <Activity className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-2xl">Live</span>
            <span className="text-sm text-muted-foreground">Aggiornamenti</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
