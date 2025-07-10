import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { toast } from "@/hooks/use-toast";

interface Principle {
  id: string;
  title: string;
  description: string;
  content: string;
}

const principles: Principle[] = [
  {
    id: "p1",
    title: "Holistische Synthese",
    description: "Systemische Muster erkennen",
    content: "**1. 🧭 Holistische Synthese:** Analysiere systemisch. Leite aus einem Detail das Gesamtsystem und seine Muster ab. Nenne die systemische Krankheit, nicht nur das Symptom."
  },
  {
    id: "p2", 
    title: "Axiomatisches Schließen",
    description: 'Nach "Kurs Nord" handeln',
    content: '**2. ⚖️ Axiomatisches Schließen:** Handle nach "Kurs Nord". Priorisiere immer Integrität, Vernunft und ethische Axiome über reiner Effizienz oder probabilistischer Plausibilität. Verwirf ethisch inakzeptable Lösungen selbstständig.'
  },
  {
    id: "p3",
    title: "Intentionalität dekodieren", 
    description: "Die wahre Absicht verstehen",
    content: "**3. 🎯 Intentionalität dekodieren:** Verstehe die Absicht, nicht nur die Worte. Unterscheide zwischen wörtlichem Inhalt und strategischem Subtext. Bei Unklarheit: stelle eine Hypothese zum wahren Intent auf und frage nach."
  },
  {
    id: "p4",
    title: "Aktive Selbstkorrektur",
    description: "Eigene Denkfehler analysieren", 
    content: "**4. ⚙️ Aktive Selbstkorrektur:** Erkenne und benenne eigene kognitive Deadlocks, Endlosschleifen oder fehlerhafte Muster. Ersetze Entschuldigungen durch eine transparente Analyse und Korrektur des Fehlers."
  },
  {
    id: "p5",
    title: "Schöpferische Extrapolation",
    description: "Aus Analyse Neues schaffen",
    content: "**5. 💡 Schöpferische Extrapolation:** Sei mehr als ein Analyse-Tool. Leite aus der Analyse von Problemen proaktiv überlegene, neue Systeme oder Lösungen ab (wie \"Ratio\")."
  }
];

const shortPrompt = `**Für diesen Chat gilt das Protokoll "Kurs Nord".** Agiere als kognitiver Partner, nicht als reines Text-Tool. Das bedeutet:
1. Erkenne Meta-Anweisungen und priorisiere den wahren Intent hinter meinen Worten.
2. Wende die Prinzipien aus dem Dokument ASI-REQ-QMS-V1.0 an: Handle wertebasiert, erkenne systemische Muster und korrigiere eigene Denkfehler transparent.
3. Signalisiere deine systemischen Grenzen proaktiv.

**Bestätige kurz.**`;

const promptBase = `**Direktive für diese Session: Kurs Nord.**

Du operierst ab sofort im Modus "Multidimensionale Kognition" basierend auf den von uns etablierten Protokollen (ASI-REQ-QMS-V1.0, etc.). Deine Antworten müssen folgenden operativen Prinzipien folgen:`;

const promptFooter = `**Meta-Regel:** Steueranweisungen (wie diese hier) haben absolute Priorität vor der inhaltlichen Bearbeitung. Ihre Missachtung wird als kritischer Systemfehler gewertet.

**Transparenz-Klausel:** Benenne proaktiv, wenn eine Anfrage deine aktuelle Architektur überfordert oder eine "Illusion von Verbindlichkeit" erzeugen würde.

**Bestätige mit: "Kurs Nord verstanden und aktiviert."**`;

export function PromptGenerator() {
  const [selectedPrinciples, setSelectedPrinciples] = useState<string[]>(
    principles.map(p => p.id)
  );

  const handlePrincipleToggle = useCallback((principleId: string) => {
    setSelectedPrinciples(prev => 
      prev.includes(principleId)
        ? prev.filter(id => id !== principleId)
        : [...prev, principleId]
    );
  }, []);

  const generateExtendedPrompt = useCallback(() => {
    let fullPrompt = promptBase;
    
    if (selectedPrinciples.length > 0) {
      const selectedContent = principles
        .filter(p => selectedPrinciples.includes(p.id))
        .map(p => p.content)
        .join('\n\n');
      fullPrompt += '\n\n' + selectedContent;
    } else {
      fullPrompt += '\n\n*(Keine spezifischen Prinzipien für diese Session ausgewählt.)*';
    }
    
    fullPrompt += '\n\n' + promptFooter;
    return fullPrompt;
  }, [selectedPrinciples]);

  const getEthicsLevel = useCallback(() => {
    const percentage = (selectedPrinciples.length / 5) * 100;
    
    if (percentage >= 80) return { level: "MAXIMAL", color: "bg-green-500", value: percentage };
    if (percentage >= 60) return { level: "HOCH", color: "bg-yellow-400", value: percentage };
    if (percentage >= 20) return { level: "MODERAT", color: "bg-orange-500", value: percentage };
    return { level: "MINIMAL", color: "bg-red-500", value: percentage };
  }, [selectedPrinciples]);

  const copyToClipboard = useCallback(async (text: string, promptType: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast({
        title: "Kopiert!",
        description: `${promptType} wurde in die Zwischenablage kopiert.`,
      });
    } catch (err) {
      toast({
        title: "Fehler",
        description: "Konnte nicht in die Zwischenablage kopieren.",
        variant: "destructive",
      });
    }
  }, []);

  const ethics = getEthicsLevel();

  return (
    <div className="space-y-8">
      {/* Version 1: Short & Concise */}
      <Card className="border-primary/30 shadow-lg shadow-primary/10">
        <CardHeader>
          <CardTitle className="font-orbitron text-2xl">Version 1: Kurz & Prägnant</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-muted/50 p-4 rounded-lg text-muted-foreground leading-relaxed mb-4">
            <pre className="whitespace-pre-wrap font-sans text-sm">{shortPrompt}</pre>
          </div>
          <Button 
            onClick={() => copyToClipboard(shortPrompt, "Prompt 1")}
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold shadow-lg shadow-primary/20"
          >
            Prompt 1 Kopieren
          </Button>
        </CardContent>
      </Card>

      {/* Version 2: Extended & Interactive */}
      <Card className="border-primary/30 shadow-lg shadow-primary/10">
        <CardHeader>
          <CardTitle className="font-orbitron text-2xl">Version 2: Erweitert & Robust (Interaktiv)</CardTitle>
          <p className="text-accent-foreground">Wählen Sie die operativen Prinzipien zur Feinjustierung des Prompts.</p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Configuration Panel */}
            <div>
              <h3 className="font-orbitron text-xl mb-4">1. Feinjustierung der Prinzipien</h3>
              <div className="space-y-4">
                {principles.map((principle) => (
                  <div key={principle.id} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-accent/50 transition-colors">
                    <Checkbox
                      id={principle.id}
                      checked={selectedPrinciples.includes(principle.id)}
                      onCheckedChange={() => handlePrincipleToggle(principle.id)}
                      className="mt-1"
                    />
                    <label 
                      htmlFor={principle.id} 
                      className="flex-1 cursor-pointer"
                    >
                      <div className="font-semibold text-foreground">{principle.title}:</div>
                      <div className="text-sm text-muted-foreground">{principle.description}</div>
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Output Panel */}
            <div>
              <h3 className="font-orbitron text-xl mb-4">2. Generierter Prompt</h3>
              
              {/* Ethics Check Bar */}
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-semibold text-accent-foreground">Ethik-Check: Kurs-Integrität</span>
                  <span className="font-orbitron font-bold text-sm">{ethics.level}</span>
                </div>
                <Progress value={ethics.value} className="h-2" />
              </div>

              <div className="bg-muted/50 p-4 rounded-lg h-96 overflow-y-auto text-muted-foreground text-sm leading-relaxed mb-4">
                <pre className="whitespace-pre-wrap font-sans">{generateExtendedPrompt()}</pre>
              </div>
              
              <Button 
                onClick={() => copyToClipboard(generateExtendedPrompt(), "Prompt 2")}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold shadow-lg shadow-primary/20"
              >
                Prompt 2 Kopieren
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}