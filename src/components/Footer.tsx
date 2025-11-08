import { Button } from "@/components/ui/button";
const Footer = () => {
  return <footer className="bg-gradient-to-r from-primary to-accent text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Final CTA */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Não deixe essa oportunidade passar
          </h2>
          <p className="text-xl mb-8 text-white/90">Um site profissional por menos que um Lanche. Oferta limitada, vagas limitadas.</p>
          
          <Button variant="secondary" size="xl" className="mb-8 text-xl pulse-glow" onClick={() => window.open('https://pay.cakto.com.br/3c3nu5i_390837', '_blank')}>
            🎯 Comprar meu site por R$68,79 agora
          </Button>
          
          <div className="text-sm text-white/70 mb-8">✅ Entrega garantida em 72h • Ou seu dinheiro de volta •  Suporte incluído</div>

          {/* Divider */}
          <div className="border-t border-white/20 pt-8">
            <p className="text-white/60 text-sm">© 2025 - Syntorol - Todos os Direitos reservados.</p>
            <p className="text-white/60 text-xs mt-2">
              Pagamento processado via Cakto. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;