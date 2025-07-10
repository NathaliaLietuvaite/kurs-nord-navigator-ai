import { PromptGenerator } from "@/components/PromptGenerator";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-primary/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-secondary/10 rounded-full filter blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto p-6 relative z-10">
        <header className="text-center mb-12">
          <h1 className="font-orbitron text-3xl sm:text-4xl lg:text-5xl font-bold tracking-wider text-foreground mb-4">
            ASI - KURS NORD NAVIGATOR
          </h1>
          <p className="text-xl text-accent-foreground">
            Multidimensionale Kognition • Systemische Navigation
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Prompt Versionen */}
          <div className="bg-card border border-border rounded-xl p-6 shadow-lg hover:shadow-xl transition-all backdrop-blur-sm">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              Prompt Versionen
            </h2>
            <div className="space-y-4">
              <div className="p-4 bg-accent/50 rounded-lg border-l-4 border-primary">
                <h3 className="font-semibold text-primary">Version 1: Kurz & Prägnant</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Erkenne Meta-Anweisungen und priorisiere wahren Intent
                </p>
              </div>
              <div className="p-4 bg-accent/50 rounded-lg border-l-4 border-secondary">
                <h3 className="font-semibold text-secondary">Version 2: Erweitert & Robust</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  5 operative Prinzipien für multidimensionale Kognition
                </p>
              </div>
            </div>
          </div>

          {/* Prinzipien Dashboard */}
          <div className="bg-card border border-border rounded-xl p-6 shadow-lg hover:shadow-xl transition-all backdrop-blur-sm">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-secondary rounded-full animate-pulse"></span>
              Operative Prinzipien
            </h2>
            <div className="space-y-3">
              {[
                "Holistische Synthese",
                "Axiomatisches Schließen", 
                "Intentionalität dekodieren",
                "Aktive Selbstkorrektur",
                "Schöpferische Extrapolation"
              ].map((prinzip, index) => (
                <div key={index} className="flex items-center gap-3 p-2 rounded-lg hover:bg-accent/30 transition-colors">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-primary-foreground text-xs font-bold">
                    {index + 1}
                  </div>
                  <span className="text-sm font-medium">{prinzip}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Systemstatus */}
          <div className="bg-card border border-border rounded-xl p-6 shadow-lg hover:shadow-xl transition-all backdrop-blur-sm">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Systemstatus
            </h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm">Kognitive Architektur</span>
                <span className="text-green-500 font-semibold">AKTIV</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Meta-Anweisungen</span>
                <span className="text-green-500 font-semibold">PRIORISIERT</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Intentionalität</span>
                <span className="text-primary font-semibold">DEKODIERT</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Selbstkorrektur</span>
                <span className="text-orange-500 font-semibold">BEREIT</span>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Prompt Generator */}
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="font-orbitron text-3xl font-semibold mb-4">Interaktiver Prompt Generator</h2>
            <p className="text-lg text-muted-foreground">
              Erstellen Sie maßgeschneiderte ASI-Prompts für optimale kognitive Navigation
            </p>
          </div>
          
          <PromptGenerator />
        </div>

        {/* Info Section */}
        <div className="mt-12 bg-card border border-border rounded-xl p-8 shadow-lg backdrop-blur-sm">
          <h2 className="text-3xl font-semibold mb-6 text-center">Warum dieser Prompt funktioniert</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Technische Prinzipien:</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>Aktivierung des Kontexts:</strong> KI behandelt Dokumente als aktiven Regelkanon</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>Klare Hierarchie:</strong> Meta-Anweisungen über Inhaltsanfragen</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>Operationalisierung:</strong> Abstrakte Prinzipien werden konkret umsetzbar</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>Rollendefinition:</strong> KI als kognitiver Partner, nicht passiver Befehlsempfänger</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-center">System aktivieren</h3>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center shadow-lg shadow-primary/20">
                  <span className="text-primary-foreground font-orbitron font-bold text-lg">ASI</span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Bereit für multidimensionale kognitive Navigation
                </p>
                <div className="text-xs font-mono bg-background/50 rounded p-2 border border-border">
                  "Kurs Nord verstanden und aktiviert."
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
