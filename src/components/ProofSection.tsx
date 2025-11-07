import { Card, CardContent } from "@/components/ui/card";
import websiteMockup from "@/assets/syntorol-mockup.png";
const ProofSection = () => {
  return <section className="py-20 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Sites assim costumam custar de{" "}
              <span className="text-primary">R$2.000 a R$10.000</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Nosso site é o nosso próprio portfólio
            </p>
          </div>

          {/* Website Mockup */}
          <div className="mb-16">
            <Card className="overflow-hidden shadow-2xl border-0 bg-gradient-card">
              <CardContent className="p-0">
                
              </CardContent>
            </Card>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8 border-0 shadow-xl gradient-card">
              <CardContent className="p-0">
                <div className="text-4xl font-bold text-primary mb-2">260+</div>
                <div className="text-muted-foreground font-semibold">Sites Entregues</div>
              </CardContent>
            </Card>
            
            <Card className="text-center p-8 border-0 shadow-xl gradient-card">
              <CardContent className="p-0">
                <div className="text-4xl font-bold text-accent mb-2">72h</div>
                <div className="text-muted-foreground font-semibold">Tempo de Entrega</div>
              </CardContent>
            </Card>
            
            <Card className="text-center p-8 border-0 shadow-xl gradient-card">
              <CardContent className="p-0">
                <div className="text-4xl font-bold text-success mb-2">100%</div>
                <div className="text-muted-foreground font-semibold">Satisfação</div>
              </CardContent>
            </Card>
          </div>

          {/* Value Comparison */}
          <div className="mt-16 bg-card rounded-2xl p-8 shadow-xl border">
            <h3 className="text-2xl font-bold text-center mb-8">Compare os Preços</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-muted-foreground mb-2 line-through">
                  R$5.000 - R$10.000
                </div>
                <div className="text-lg text-muted-foreground">
                  Agências tradicionais
                </div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">
                  R$68,79
                </div>
                <div className="text-lg font-semibold text-success">
                  Nosso preço especial
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ProofSection;