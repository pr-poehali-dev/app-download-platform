import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export interface AppType {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: string;
  size: string;
  version: string;
  downloadUrl: string;
}

interface AppCardProps {
  app: AppType;
}

export default function AppCard({ app }: AppCardProps) {
  return (
    <Card className="overflow-hidden transition-shadow hover:shadow-md">
      <CardHeader className="flex flex-row items-center gap-4 pb-2">
        <img
          src={app.icon || "/placeholder.svg"}
          alt={app.title}
          className="h-16 w-16 rounded-lg object-cover"
        />
        <div className="flex flex-col">
          <h3 className="text-xl font-semibold">{app.title}</h3>
          <Badge variant="outline" className="w-fit">
            {app.category}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground line-clamp-2">{app.description}</p>
        <div className="flex gap-3 mt-2">
          <span className="text-xs text-muted-foreground">Версия: {app.version}</span>
          <span className="text-xs text-muted-foreground">Размер: {app.size}</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full gap-2" asChild>
          <a href={app.downloadUrl} download>
            <Download size={16} />
            Скачать
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
