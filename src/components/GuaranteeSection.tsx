import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, CheckCircle, Lock, Headphones } from "lucide-react";

const GuaranteeSection = () => {
  const guarantees = [
    {
      icon: Shield,
      title: "Garantia Total",
      description: "100% do seu dinheiro de volta se não ficar satisfeito"
    },
    {
      icon: CheckCircle,
      title: "Entrega Garantida",
      description: "Seu site será entregue em até 72h ou reembolso completo"
    },
    {
      icon: Lock,
      title: "Pagamento Seguro",
      description: "Checkout criptografado via Cakto, dados 100% protegidos"
    },
    {
      icon: Headphones,
      title: "Suporte Incluso",
      description: "Suporte por WhatsApp durante todo o processo"
    }
  ];

  return (
    <section className="py-20 bg-success/5">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-success/20 text-success-foreground px-6 py-3 rounded-full font-bold text-lg mb-6">
              <Shield className="w-6 h-6" />
              GARANTIA DE SATISFAÇÃO
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Sem riscos para você
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Estamos tão confiantes na qualidade do nosso trabalho que oferecemos 
              garantia total de satisfação
            </p>
          </div>

          {/* Main Guarantee */}
          <Card className="border-2 border-success/50 shadow-2xl mb-12 overflow-hidden">
            <CardContent className="p-8 bg-gradient-to-r from-success/5 to-success/10">
              <div className="text-center">
                <div className="w-20 h-20 bg-success text-success-foreground rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-bold mb-4 text-foreground">
                  Garantia de 30 dias ou seu dinheiro de volta
                </h3>
                <p className="text-xl text-muted-foreground mb-6 max-w-3xl mx-auto">
                  Se por qualquer motivo você não ficar 100% satisfeito com seu site, 
                  devolvemos todo o valor pago. Sem perguntas, sem burocracia.
                </p>
                <div className="inline-flex items-center gap-2 bg-success/20 text-success-foreground px-6 py-3 rounded-lg font-bold">
                  <CheckCircle className="w-5 h-5" />
                  RISCO ZERO PARA VOCÊ
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Guarantee Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {guarantees.map((guarantee, index) => {
              const IconComponent = guarantee.icon;
              return (
                <Card key={index} className="border-0 shadow-xl gradient-card text-center p-6">
                  <CardContent className="p-0">
                    <div className="mb-4">
                      <IconComponent className="w-12 h-12 mx-auto text-success" />
                    </div>
                    <h3 className="text-lg font-bold mb-3 text-foreground">
                      {guarantee.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {guarantee.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Security Info */}
          <div className="bg-card rounded-2xl p-8 shadow-xl border">
            <h3 className="text-2xl font-bold text-center mb-8">Segurança Total</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lock className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-bold mb-2">SSL Criptografado</h4>
                <p className="text-muted-foreground text-sm">
                  Todos os dados são transmitidos com criptografia de nível bancário
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-accent" />
                </div>
                <h4 className="font-bold mb-2">Cakto Verified</h4>
                <p className="text-muted-foreground text-sm">
                  Processamento seguro via Cakto, plataforma certificada
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-success" />
                </div>
                <h4 className="font-bold mb-2">Dados Protegidos</h4>
                <p className="text-muted-foreground text-sm">
                  Não armazenamos dados de cartão, total conformidade LGPD
                </p>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center mt-12">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Pronto para começar sem riscos?
            </h3>
            <Button 
              variant="success" 
              size="xl"
              onClick={() => window.open('https://pay.cakto.com.br/3c3nu5i_390837', '_blank')}
            >
              🛡️ Comprar com garantia total
            </Button>
            <p className="text-sm mt-4 text-muted-foreground">
              Proteção total • Reembolso garantido • Suporte incluso
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;