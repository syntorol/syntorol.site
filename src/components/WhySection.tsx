import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Target, Users, Zap, Shield } from "lucide-react";
const WhySection = () => {
  return <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Por que tão barato?
            </h2>
            <div className="bg-card rounded-2xl p-8 shadow-xl border max-w-4xl mx-auto">
              <p className="text-xl leading-relaxed text-foreground">
                Queremos mostrar o que conseguimos fazer. O preço simbólico é só para 
                <span className="font-bold text-primary"> filtrar curiosos</span>. 
                É o nosso <span className="font-bold text-accent">marketing na prática</span>.
              </p>
              <p className="text-lg mt-4 text-muted-foreground">
                Estamos construindo nosso portfólio e reputação. Cada site de R$68,79 
                é um futuro cliente de projetos maiores.
              </p>
            </div>
          </div>

          {/* Reasons Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card className="border-0 shadow-xl gradient-card p-8">
              <CardContent className="p-0">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Target className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Marketing Inteligente</h3>
                    <p className="text-muted-foreground">
                      Preferimos investir em fazer sites incríveis por R$68,79 do que gastar 
                      milhares em anúncios. Nosso trabalho fala por si só.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl gradient-card p-8">
              <CardContent className="p-0">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Users className="w-8 h-8 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Construindo Portfólio</h3>
                    <p className="text-muted-foreground">
                      Cada site entregue é uma oportunidade de mostrar nossa qualidade 
                      e conquistar clientes para projetos futuros.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl gradient-card p-8">
              <CardContent className="p-0">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-success/10 rounded-lg">
                    <Zap className="w-8 h-8 text-success" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Processo Otimizado</h3>
                    <p className="text-muted-foreground">
                      Desenvolvemos um sistema que nos permite criar sites profissionais 
                      de forma rápida e eficiente, reduzindo custos.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl gradient-card p-8">
              <CardContent className="p-0">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-warning/10 rounded-lg">
                    <Shield className="w-8 h-8 text-warning" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Filtrando Curiosos</h3>
                    <p className="text-muted-foreground">
                      O valor simbólico garante que apenas pessoas realmente interessadas 
                      façam o pedido, otimizando nosso tempo.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Value Proposition */}
          <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 text-white text-center shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">A matemática é simples:</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div>
                <div className="text-2xl font-bold mb-2">260+ Sites</div>
                <div className="text-white/80">Já entregamos</div>
              </div>
              <div>
                <div className="text-2xl font-bold mb-2">×</div>
                <div className="text-white/80">Multiplicado por</div>
              </div>
              <div>
                <div className="text-2xl font-bold mb-2">R$68,79 cada</div>
                <div className="text-white/80">Preço unitário</div>
              </div>
            </div>
            <p className="text-xl mb-6">
              = Marketing direto e portfólio real por menos de R$10.000
            </p>
            <Button variant="secondary" size="xl" onClick={() => window.open('https://pay.cakto.com.br/3c3nu5i_390837', '_blank')}>
              Aproveitar essa oportunidade
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default WhySection;