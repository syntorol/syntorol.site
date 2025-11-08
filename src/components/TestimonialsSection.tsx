import { Card, CardContent } from "@/components/ui/card";
import { Star, CheckCircle, Zap, Trophy } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "João Silva",
      role: "Consultor de Marketing",
      content: "Nunca pensei que um site de R$68,79 pudesse parecer tão profissional! Recebi em menos de 72h e já estou convertendo clientes.",
      rating: 5
    },
    {
      name: "Ana Costa",
      role: "Designer Freelance",
      content: "Incrível! O design ficou moderno e responsivo. Economizei milhares e o resultado superou minhas expectativas.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              O que nossos clientes dizem
            </h2>
            <p className="text-xl text-muted-foreground">
              Depoimentos reais de pessoas que já compraram
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-xl gradient-card h-full">
                <CardContent className="p-8">
                  {/* Stars */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Content */}
                  <blockquote className="text-lg mb-6 text-foreground italic">
                    "{testimonial.content}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div>
                      <div className="font-bold text-foreground">{testimonial.name}</div>
                      <div className="text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Trust Signals */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Trophy className="w-8 h-8 text-primary" />
              </div>
              <div className="font-bold text-lg">Qualidade Premium</div>
              <div className="text-muted-foreground">Sites de nível profissional</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <div className="font-bold text-lg">Entrega Rápida</div>
              <div className="text-muted-foreground">Máximo 72 horas</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <CheckCircle className="w-8 h-8 text-primary" />
              </div>
              <div className="font-bold text-lg">Garantia Total</div>
              <div className="text-muted-foreground">Ou seu dinheiro de volta</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;