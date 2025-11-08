import { useEffect, useState } from "react";
import { CheckCircle, X } from "lucide-react";

const brazilianNames = [
  "João Silva", "Maria Santos", "Pedro Oliveira", "Ana Costa", "Carlos Souza",
  "Juliana Lima", "Fernando Alves", "Camila Rodrigues", "Rafael Fernandes", "Beatriz Carvalho",
  "Lucas Pereira", "Amanda Ribeiro", "Guilherme Martins", "Letícia Gomes", "Bruno Barbosa",
  "Mariana Dias", "Rodrigo Araújo", "Gabriela Nascimento", "Thiago Cardoso", "Isabela Monteiro",
  "Matheus Castro", "Larissa Freitas", "Felipe Rocha", "Natália Correia", "Daniel Mendes",
  "Bianca Teixeira", "André Vieira", "Carolina Pinto", "Vitor Soares", "Renata Moura",
  "Leonardo Azevedo", "Fernanda Cavalcanti", "Marcelo Barros", "Vanessa Nogueira", "Ricardo Lopes",
  "Tatiana Ramos", "Gustavo Torres", "Patricia Duarte", "Diego Campos", "Aline Machado",
  "Roberto Rezende", "Sandra Miranda", "Paulo Cunha", "Adriana Batista", "Fábio Melo",
  "Luciana Farias", "Anderson Nunes", "Cristina Moreira", "Eduardo Pires", "Mônica Caldeira",
  "Sérgio Borges", "Eliane Guimarães", "Marcio Dantas", "Viviane Castro", "Alexandre Ferreira",
  "Denise Santana", "Henrique Medeiros", "Regina Tavares", "Claudio Assunção", "Simone Vasconcelos",
  "Wagner Bezerra", "Rosana Figueiredo", "Leandro Bastos", "Priscila Coelho", "Maurício Xavier"
];

const cities = [
  "São Paulo, SP", "Rio de Janeiro, RJ", "Belo Horizonte, MG", "Curitiba, PR", 
  "Porto Alegre, RS", "Brasília, DF", "Salvador, BA", "Fortaleza, CE",
  "Recife, PE", "Manaus, AM", "Goiânia, GO", "Belém, PA"
];

const PurchaseNotifications = () => {
  const [currentNotification, setCurrentNotification] = useState<{
    name: string;
    city: string;
    time: string;
  } | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const showNotification = () => {
      const randomName = brazilianNames[Math.floor(Math.random() * brazilianNames.length)];
      const randomCity = cities[Math.floor(Math.random() * cities.length)];
      const minutesAgo = Math.floor(Math.random() * 15) + 1;
      
      setCurrentNotification({
        name: randomName,
        city: randomCity,
        time: minutesAgo === 1 ? "agora mesmo" : `há ${minutesAgo} minutos`
      });
      
      setIsVisible(true);
      
      // Hide after 5 seconds
      setTimeout(() => {
        setIsVisible(false);
      }, 5000);
    };

    // Show first notification after 2 seconds
    const initialTimeout = setTimeout(showNotification, 2000);
    
    // Show notifications every 8 seconds (5s visible + 3s gap)
    const interval = setInterval(showNotification, 8000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!currentNotification) return null;

  return (
    <div
      className={`fixed bottom-6 left-6 z-50 transition-all duration-500 ease-in-out ${
        isVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
      }`}
    >
      <div className="bg-card border-2 border-success/50 rounded-lg shadow-2xl p-4 pr-10 max-w-sm relative">
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Fechar notificação"
        >
          <X className="w-4 h-4" />
        </button>
        
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 bg-success/20 rounded-full flex items-center justify-center flex-shrink-0">
            <CheckCircle className="w-6 h-6 text-success" />
          </div>
          
          <div className="flex-1">
            <p className="font-bold text-foreground mb-1">
              {currentNotification.name}
            </p>
            <p className="text-sm text-muted-foreground mb-1">
              de {currentNotification.city}
            </p>
            <p className="text-xs text-success font-medium">
              Acabou de comprar um site • {currentNotification.time}
            </p>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-success/20 rounded-b-lg overflow-hidden">
          <div 
            className={`h-full bg-success transition-all ${
              isVisible ? "animate-[shrink_5s_linear]" : ""
            }`}
            style={{ width: "100%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default PurchaseNotifications;
