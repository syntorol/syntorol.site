import { Button } from "@/components/ui/button";
import { Star, Zap, Clock } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
const HeroSection = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(${heroImage})`
    }}>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-accent/80"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto fade-in-up">
          {/* Social Proof Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-8 border border-white/20">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
            </div>
            <span className="text-sm font-medium">Mais de 260 sites entregues</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="block">💥 Um site completo</span>
            <span className="block text-yellow-300">por apenas R$68,79.</span>
            <span className="block text-lg md:text-xl font-normal mt-4 text-white/90">
              Parece loucura? É real.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
            Você pode pagar <span className="font-bold text-yellow-300">R$10.000</span> por um site… 
            ou só <span className="font-bold text-yellow-300">R$68,79</span> aqui. 
            Uma página profissional, rápida, linda e feita para converter — 
            <span className="font-bold"> por menos que um Lanche.</span>
          </p>

          {/* Value Props */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
              <Zap className="w-5 h-5 text-yellow-300" />
              <span className="font-semibold">Entrega em 72h</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
              <Clock className="w-5 h-5 text-yellow-300" />
              <span className="font-semibold">100% Responsivo</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
              <Star className="w-5 h-5 text-yellow-300" />
              <span className="font-semibold">Design Profissional</span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="space-y-4">
            <Button variant="hero" size="xl" className="text-xl px-12 py-6 shadow-2xl hover:shadow-yellow-300/25" onClick={() => window.open('https://pay.cakto.com.br/3c3nu5i_390837', '_blank')}>
              → Quero meu site agora por R$68,79
            </Button>
            
            <p className="text-sm text-white/70">
              ✅ Checkout 100% seguro via Cakto • Garantia ou seu dinheiro de volta
            </p>
          </div>

          {/* Urgency */}
          <div className="mt-8 p-4 bg-warning/20 backdrop-blur-sm rounded-lg border border-warning/30 max-w-md mx-auto">
            <p className="text-sm font-semibold text-yellow-300">
              ⚡ Vagas limitadas por dia! Pode sair do ar a qualquer momento.
            </p>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full float-animation"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/20 rounded-full float-animation" style={{
      animationDelay: '1s'
    }}></div>
      <div className="absolute top-1/2 left-20 w-16 h-16 bg-yellow-300/20 rounded-full float-animation" style={{
      animationDelay: '2s'
    }}></div>
    </section>;
};
export default HeroSection;