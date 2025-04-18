import { useParams, Link } from "react-router-dom";
import { Download, ArrowLeft, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { apps } from "@/data/apps";

export default function AppDetails() {
  const { id } = useParams<{ id: string }>();
  const app = apps.find(app => app.id === id);

  if (!app) {
    return (
      <div className="container max-w-4xl py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Приложение не найдено</h2>
        <Link to="/">
          <Button>Вернуться на главную</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container max-w-4xl py-8">
      <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Назад к списку приложений
      </Link>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/3 flex flex-col items-center">
          <img 
            src={app.icon || "/placeholder.svg"} 
            alt={app.title} 
            className="w-48 h-48 rounded-xl object-cover mb-4" 
          />
          <Button className="w-full gap-2">
            <Download size={16} />
            Скачать
          </Button>
          <div className="mt-4 text-sm text-center">
            <div>Версия: {app.version}</div>
            <div>Размер: {app.size}</div>
          </div>
        </div>

        <div className="md:w-2/3">
          <div className="flex justify-between items-start">
            <h1 className="text-3xl font-bold">{app.title}</h1>
            <Badge variant="outline">{app.category}</Badge>
          </div>

          <div className="flex items-center gap-1 mt-2 mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="h-5 w-5 fill-primary text-primary" />
            ))}
            <span className="ml-2 text-sm">5.0</span>
          </div>

          <Separator className="my-4" />

          <h2 className="text-xl font-semibold mb-2">Описание</h2>
          <p className="text-muted-foreground">{app.description}</p>

          <Separator className="my-6" />

          <h2 className="text-xl font-semibold mb-4">Скриншоты</h2>
          <div className="grid grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <img 
                key={i}
                src="/placeholder.svg" 
                alt="Скриншот приложения" 
                className="rounded-md object-cover aspect-[9/16]" 
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
