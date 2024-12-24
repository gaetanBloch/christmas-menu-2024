const VERSION = "1.0.1"; // Increment this whenever you make changes

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GlassWater, Utensils, ChefHat, Cake, ChevronsUpIcon as Cheese, SunSnowIcon as Santa } from 'lucide-react'

function getColorClass(index: number) {
  const colors = ["text-red-800", "text-green-800", "text-pink-700", "text-purple-700", "text-blue-600"]
  return colors[index];
}

function getIcon(title: string, index: number) {
  const colorClass = getColorClass(index);
  switch (title) {
    case 'Amuse-bouches': return <GlassWater className={`w-5 h-5 md:w-6 md:h-6 ${colorClass}`} />;
    case 'Entrées': return <Utensils className={`w-5 h-5 md:w-6 md:h-6 ${colorClass}`} />;
    case 'Plats principal': return <ChefHat className={`w-5 h-5 md:w-6 md:h-6 ${colorClass}`} />;
    case 'Fromage': return <Cheese className={`w-5 h-5 md:w-6 md:h-6 ${colorClass}`} />;
    case 'Desserts': return <Cake className={`w-5 h-5 md:w-6 md:h-6 ${colorClass}`} />;
    default: return null;
  }
}

function getDishes(title: string) {
  switch (title) {
    case 'Amuse-bouches': return ["Vache qui rit", "Focaccia", "Verrine de Saint Jacques aux pommes"];
    case 'Entrées': return ["Gravlax divers et Blinis"];
    case 'Plats principal': return ["Chapon rôti aux morilles, pommes de terre dauphinoises et poêlée de marrons"];
    case 'Fromage': return ["Plateau de fromages"];
    case 'Desserts': return ["Bûche de Noël exotique", "Cafê gourmand"];
    default: return [];
  }
}

export default function MenuNoelEtendu() {
  return (
    <div className="min-h-screen bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Christmas%20Menu%20Concept.jpg-8BzM9chfwKfEUpLgkSTlvlb7amFdqd.webp')] bg-cover bg-right-top md:bg-right bg-no-repeat bg-fixed flex items-center justify-start p-4 md:p-8">
      <Card className="w-full max-w-[calc(100%-2rem)] md:max-w-4xl bg-white/95 backdrop-blur-sm shadow-xl relative mx-4 md:ml-8">
        <div className="absolute top-2 right-2 md:top-4 md:right-4">
          <Santa className="w-8 h-8 md:w-12 md:h-12 text-red-600" />
        </div>
        <CardHeader className="space-y-1 md:space-y-2">
          <CardTitle className="text-2xl md:text-4xl font-mono text-center text-red-800">Menu de Noël</CardTitle>
          <p className="text-xs text-center text-gray-500">Version {VERSION}</p>
        </CardHeader>
        <CardContent className="grid gap-6 md:gap-8">
          {['Amuse-bouches', 'Entrées', 'Plats principal', 'Fromage', 'Desserts'].map((title, index) => (
            <MenuSection
              key={title}
              icon={getIcon(title, index)}
              title={title}
              dishes={getDishes(title)}
              index={index}
            />
          ))}
        </CardContent>
      </Card>
    </div>
  )
}

function MenuSection({ icon, title, dishes, index }: { icon: React.ReactNode; title: string; dishes: string[]; index: number }) {
  return (
    <div className="group">
      <div className="flex items-center space-x-2 md:space-x-3 mb-2 md:mb-3">
        <div className={`${getColorClass(index)} group-hover:text-red-500 transition-colors duration-300`}>
          {icon}
        </div>
        <h2 className={`text-xl md:text-2xl font-serif ${getColorClass(index)} group-hover:text-red-600 transition-colors duration-300`}>
          {title}
        </h2>
      </div>
      <ul className="space-y-1.5 md:space-y-2 pl-7 md:pl-9">
        {dishes.map((dish, index) => (
          <li 
            key={index} 
            className="text-sm md:text-base text-gray-700 font-light italic group-hover:text-black transition-colors duration-300"
          >
            {dish}
          </li>
        ))}
      </ul>
    </div>
  )
}

