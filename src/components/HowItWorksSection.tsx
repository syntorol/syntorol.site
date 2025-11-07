import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CreditCard, FileText, Rocket } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      step: 1,
      icon: CreditCard,
      title: "Você paga R$68,79",
      description: "Checkout rápido e seguro via Cakto. Sem pegadinhas, sem taxas ocultas.",
      color: "text-primary"
    },
    {
      step: 2,
      icon: FileText,
      title: "Preenche um formulário",
      description: "Responda algumas perguntas simples sobre o que você precisa no seu site.",
      color: "text-accent"
    },
    {
      step: 3,
      icon: Rocket,
      title: "Recebe seu site pronto",
      description: "Em até 72h você recebe seu site profissional e responsivo por email.",
      color: "text-success"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Como funciona?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Processo simplificado em apenas 3 passos. 
              Fácil, rápido e sem complicações.
            </p>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <Card key={index} className="relative border-0 shadow-xl gradient-card text-center p-8 hover:shadow-2xl transition-shadow duration-300">
                  <CardContent className="p-0">
                    {/* Step Number */}
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                      {step.step}
                    </div>

                    {/* Icon */}
                    <div className={`mb-6 ${step.color}`}>
                      <IconComponent className="w-16 h-16 mx-auto" />
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold mb-4 text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Process Flow */}
          <div className="bg-card rounded-2xl p-8 shadow-xl border">
            <h3 className="text-2xl font-bold text-center mb-8">Cronograma de Entrega</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold mx-auto mb-3">
                  0h
                </div>
                <div className="font-semibold">Pagamento</div>
                <div className="text-sm text-muted-foreground">Processamento instantâneo</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold mx-auto mb-3">
                  2h
                </div>
                <div className="font-semibold">Formulário</div>
                <div className="text-sm text-muted-foreground">Recebe link por email</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-warning text-warning-foreground rounded-full flex items-center justify-center font-bold mx-auto mb-3">
                  24h
                </div>
                <div className="font-semibold">Desenvolvimento</div>
                <div className="text-sm text-muted-foreground">Criamos seu site</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-success text-success-foreground rounded-full flex items-center justify-center font-bold mx-auto mb-3">
                  72h
                </div>
                <div className="font-semibold">Entrega</div>
                <div className="text-sm text-muted-foreground">Site pronto!</div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Button 
              variant="cta" 
              size="xl"
              onClick={() => window.open('https://pay.cakto.com.br/3c3nu5i_390837', '_blank')}
            >
              🎯 Começar agora por R$68,79
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;