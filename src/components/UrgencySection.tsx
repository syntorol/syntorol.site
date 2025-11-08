import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, AlertTriangle, Users } from "lucide-react";

const UrgencySection = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          return { hours: 23, minutes: 59, seconds: 59 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-warning/10 to-destructive/10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-warning/20 text-warning-foreground px-6 py-3 rounded-full font-bold text-lg mb-6">
              <AlertTriangle className="w-6 h-6" />
              OFERTA POR TEMPO LIMITADO
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Não perca esta oportunidade única
            </h2>
            <p className="text-xl text-muted-foreground">
              Esta oferta pode sair do ar a qualquer momento
            </p>
          </div>

          {/* Countdown Timer */}
          <Card className="border-2 border-warning/50 shadow-2xl mb-12 overflow-hidden">
            <CardContent className="p-8 bg-gradient-to-r from-warning/5 to-destructive/5">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-6 text-foreground">
                  ◷ Tempo restante para garantir seu site por R$68,79:
                </h3>
                <div className="grid grid-cols-3 gap-4 max-w-md mx-auto mb-6">
                  <div className="bg-card rounded-lg p-4 shadow-lg">
                    <div className="text-3xl font-bold text-warning">{timeLeft.hours.toString().padStart(2, '0')}</div>
                    <div className="text-sm text-muted-foreground font-semibold">HORAS</div>
                  </div>
                  <div className="bg-card rounded-lg p-4 shadow-lg">
                    <div className="text-3xl font-bold text-warning">{timeLeft.minutes.toString().padStart(2, '0')}</div>
                    <div className="text-sm text-muted-foreground font-semibold">MINUTOS</div>
                  </div>
                  <div className="bg-card rounded-lg p-4 shadow-lg">
                    <div className="text-3xl font-bold text-warning">{timeLeft.seconds.toString().padStart(2, '0')}</div>
                    <div className="text-sm text-muted-foreground font-semibold">SEGUNDOS</div>
                  </div>
                </div>
                <p className="text-destructive font-bold">
                  Depois deste prazo, o preço volta para R$2.000+
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Scarcity Elements */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="border-0 shadow-xl gradient-card p-8">
              <CardContent className="p-0">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-warning/10 rounded-lg">
                    <Users className="w-8 h-8 text-warning" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-foreground">Vagas Limitadas</h3>
                    <p className="text-muted-foreground mb-4">
                      Conseguimos entregar apenas <span className="font-bold text-warning">5 sites por dia</span> 
                      para manter a qualidade premium.
                    </p>
                    <div className="bg-warning/20 rounded-lg p-3">
                      <div className="flex justify-between text-sm font-semibold mb-2">
                        <span>Vagas hoje:</span>
                        <span className="text-warning">2 de 5 restantes</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-warning h-2 rounded-full w-3/5"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl gradient-card p-8">
              <CardContent className="p-0">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-destructive/10 rounded-lg">
                    <Clock className="w-8 h-8 text-destructive" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-foreground">Demanda Alta</h3>
                    <p className="text-muted-foreground mb-4">
                      <span className="font-bold text-destructive">127 pessoas</span> visualizaram 
                      esta página nas últimas 24 horas.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                        <span>João comprou há 15 minutos</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                        <span>Maria comprou há 32 minutos</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Final CTA */}
          <div className="text-center bg-gradient-to-r from-primary to-accent rounded-2xl p-8 text-white shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">🚨 Última chance de garantir por R$68,79</h3>
            <p className="text-xl mb-6 text-white/90">
              Não deixe para depois. Esta oportunidade pode não voltar.
            </p>
            <Button 
              variant="secondary" 
              size="xl" 
              className="text-xl pulse-glow"
              onClick={() => window.open('https://pay.cakto.com.br/3c3nu5i_390837', '_blank')}
            >
              🎯 GARANTIR AGORA POR R$68,79
            </Button>
            <p className="text-sm mt-4 text-white/70">
              ✅ Processamento instantâneo • Entrega garantida em 72h
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UrgencySection;