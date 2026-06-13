import SectionHero from "@/components/home/SectionHero";
import CustomContainer from "@/components/general/CustomContainer";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const moduleGroups = [
  {
    label: "Difesa a 3",
    items: [
      { value: "343", text: "3-4-3" },
      { value: "352", text: "3-5-2" },
    ],
  },
  {
    label: "Difesa a 4",
    items: [
      { value: "442", text: "4-4-2" },
      { value: "433", text: "4-3-3" },
      { value: "451", text: "4-5-1" },
    ],
  },
  {
    label: "Difesa a 5",
    items: [
      { value: "532", text: "5-3-2" },
      { value: "541", text: "5-4-1" },
      { value: "523", text: "5-2-3" },
    ],
  },
];

export function SelectGroups() {
  return (
    <Select>
      <SelectTrigger className="w-full max-w-48 border border-gray-300">
        <SelectValue placeholder="Seleziona un modulo" />
      </SelectTrigger>
      <SelectContent position="popper" className="bg-white">
        {moduleGroups.map((group) => (
          <SelectGroup key={group.label}>
            <SelectLabel className="text-gray-500 underline">
              {group.label}
            </SelectLabel>
            {group.items.map((items) => (
              <SelectItem
                key={items.value}
                className={"hover:bg-gray-100"}
                value={items.value}
              >
                {items.text}
              </SelectItem>
            ))}
          </SelectGroup>
        ))}
      </SelectContent>
    </Select>
  );
}

export default function Squadre() {
  return (
    <div className="h-full flex flex-col">
      <SectionHero
        title="La Mia Squadra"
        subtitle="Gestisci la tua rosa completa con visualizzazione tattica e statistiche dettagliate di ogni giocatore."
        titleGradientClass="title-gradient-red"
      />
      <div className="flex">
        <CustomContainer
          customClassName={"min-h-[600px] flex-2 mx-4"}
          title={"Squadre"}
        >
          <div className={"h-125 flex items-center justify-center"}>
            Qui ci va l'elenco squadre
          </div>
        </CustomContainer>
        <CustomContainer
          customClassName={"h-[400px] flex-1 mx-4"}
          title={"Campetto"}
        >
          <div className={"flex flex-col"}>
            <SelectGroups></SelectGroups>
            <div className={"h-75 flex items-center justify-center"}>
              Qua ci va il campetto
            </div>
          </div>
        </CustomContainer>
      </div>
    </div>
  );
}
