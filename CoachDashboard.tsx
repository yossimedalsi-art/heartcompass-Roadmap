import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Copy, Plus, LayoutDashboard, Compass, FileText, Target, Ear, HeartPulse, CalendarDays, AlertTriangle } from "lucide-react";
import { worldsData } from "../data/worlds";
import { journeyPhases, homeworkPlans } from "../data/journey";

export default function CoachDashboard() {
  const [magicLink, setMagicLink] = useState("");
  const [sessionState, setSessionState] = useState<any>(null);
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [isResourceModalOpen, setIsResourceModalOpen] = useState(false);
  
  const generateLink = () => {
    const randomId = Math.random().toString(36).substring(2, 8);
    setSessionId(randomId);
    setMagicLink(`${window.location.origin}/journey/${randomId}`);
    setSessionState({ phase: 0 }); 
    localStorage.setItem(`session_${randomId}`, JSON.stringify({ phase: 0 }));
    localStorage.setItem("active_coach_session", randomId);
  };

  useEffect(() => {
    const savedSession = localStorage.getItem("active_coach_session");
    if (savedSession && !sessionId) {
      setSessionId(savedSession);
      setMagicLink(`${window.location.origin}/journey/${savedSession}`);
    }
  }, []);

  useEffect(() => {
    if (!sessionId) return;
    const checkState = () => {
      const stateStr = localStorage.getItem(`session_${sessionId}`);
      if (stateStr) {
        setSessionState((prev: any) => {
          if (JSON.stringify(prev) === stateStr) return prev;
          return JSON.parse(stateStr);
        });
      } else {
        // Trainee ended the session
        setSessionState(null);
        setSessionId(null);
        setMagicLink("");
        localStorage.removeItem("active_coach_session");
      }
    };
    window.addEventListener("storage", checkState);
    const interval = setInterval(checkState, 500); 
    return () => {
      window.removeEventListener("storage", checkState);
      clearInterval(interval);
    }
  }, [sessionId]);

  const activeWorld = worldsData.find(w => w.id === sessionState?.environment);
  const chosenArchetype = activeWorld?.archetypes.find(a => a.id === sessionState?.archetype);
  const currentStep = sessionState?.phase > 0 ? journeyPhases[Math.min(sessionState.phase - 1, journeyPhases.length - 1)] : null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#0a0b10] text-neutral-100 flex flex-col font-sans" dir="rtl">
      {/* Header */}
      <header className="h-16 border-b border-white/5 flex items-center justify-between px-6 bg-[#11131a] print:hidden">
        <div className="font-bold text-lg flex items-center gap-2 text-amber-500 tracking-wider">
          <Compass className="w-5 h-5" /> HEART COMPASS <span className="text-neutral-500 font-normal text-sm ml-2">| ממשק מאמן</span>
        </div>
        <div className="flex gap-4">
          {sessionState?.phase >= 10 && (
            <button onClick={handlePrint} className="flex items-center gap-2 px-4 py-2 bg-amber-500/10 text-amber-400 border border-amber-500/30 font-bold rounded-lg text-sm hover:bg-amber-500 hover:text-black transition">
              <FileText className="w-4 h-4" /> ייצא סיכום PDF
            </button>
          )}
        </div>
      </header>

      <main className="flex-1 flex p-6 gap-6 h-[calc(100vh-64px)] overflow-hidden print:h-auto print:overflow-visible max-w-7xl mx-auto w-full">
        
        {/* Center Panel: Live Flow */}
        <section className="flex-1 flex flex-col gap-6 overflow-y-auto pr-2 custom-scrollbar print:overflow-visible">
          
          <div className="bg-[#11131a] rounded-2xl p-6 border border-white/5 shadow-2xl flex items-center justify-between print:hidden">
            <div>
              <h2 className="text-xl font-bold mb-1 text-white">שליטה וסנכרון סשן חי</h2>
              <p className="text-sm text-neutral-400">המסך שלך מסונכרן בזמן אמת למסך הנער.</p>
            </div>
            {!magicLink ? (
              <button onClick={generateLink} className="flex items-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-400 text-black font-bold rounded-xl transition shadow-[0_0_15px_rgba(245,158,11,0.3)]">
                <Plus className="w-5 h-5" /> פתח מסע חדש
              </button>
            ) : (
              <div className="flex items-center gap-2 bg-black/40 p-2 rounded-xl border border-white/5">
                <span className="px-4 text-amber-400 font-mono text-sm">{magicLink}</span>
                <button onClick={() => navigator.clipboard.writeText(magicLink)} className="p-2 hover:bg-white/10 rounded-lg transition" title="העתק קישור">
                  <Copy className="w-5 h-5 text-neutral-400" />
                </button>
                <Link to={new URL(magicLink).pathname} target="_blank" className="ml-2 text-xs bg-amber-500/20 text-amber-400 px-3 py-2 rounded-lg hover:bg-amber-500/30 transition">
                  פתח מתאמן עכשיו
                </Link>
              </div>
            )}
          </div>

          {!magicLink ? (
            <div className="flex-1 flex flex-col items-center justify-center opacity-30 print:hidden">
              <LayoutDashboard className="w-16 h-16 mb-4" />
              <p>צור סשן כדי להתחיל מעקב</p>
            </div>
          ) : (
            <div className="flex flex-col gap-8 pb-20">
              
              <div className="print:hidden flex flex-col gap-8">
                {/* Archetype Card Display */}
                {chosenArchetype && (
                <div className="bg-[#11131a] rounded-2xl border border-white/5 shadow-lg overflow-hidden flex flex-col items-center p-8">
                  <div className="text-xs font-bold tracking-widest text-neutral-500 mb-6 uppercase">מצב המחבא / {chosenArchetype.name}</div>
                  <div className="w-48 h-72 rounded-2xl border-4 border-amber-500/20 overflow-hidden shadow-[0_0_40px_rgba(245,158,11,0.15)] relative">
                    {chosenArchetype.imageUrl ? (
                      <img src={chosenArchetype.imageUrl} alt="Card" className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full bg-black flex items-center justify-center text-4xl">🔮</div>
                    )}
                  </div>
                  <h2 className="text-3xl font-black text-white mt-6">{chosenArchetype.name}</h2>
                  <p className="text-amber-500 text-sm mt-2">"{sessionState?.trigger || chosenArchetype.description}"</p>
                  <div className="text-neutral-500 text-xs mt-4">0 תגובות • 0 דפוסים • 0 כוחות</div>
                </div>
              )}

              {/* The Active Question (Mirrors Trainee UI) */}
              {currentStep && (
                <div className="bg-[#11131a] rounded-2xl border border-blue-500/20 shadow-lg p-8">
                  <div className="flex justify-between items-center mb-8">
                    <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                      {currentStep.traineeTitle.replace(/\[ארכיטיפ\]/g, `"${chosenArchetype?.name || ''}"`).replace(/\[משאב\]/g, `"${sessionState?.resourceArchetype ? worldsData.flatMap(w => w.archetypes).find(a => a.id === sessionState.resourceArchetype)?.name : 'הכוח החדש'}"`)}
                    </h3>
                    <div className="flex items-center gap-2 text-xs font-bold text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full">
                      <span className="w-2 h-2 rounded-full bg-blue-500"></span> שלב {currentStep.order}
                    </div>
                  </div>

                  {/* Options Mirror */}
                  {currentStep.uiType === "structured-dialogue" && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {currentStep.options?.[sessionState?.environment as keyof typeof currentStep.options]?.map((option, idx) => {
                      const traineeAnswer = sessionState?.answers?.[currentStep.id];
                      const isSelected = traineeAnswer === option;
                      const letter = String.fromCharCode(65 + idx);
                      
                      return (
                        <div key={idx} className={`p-5 rounded-2xl border transition-all flex items-center gap-4 ${
                          isSelected ? 'bg-amber-500/10 border-amber-500' : 'bg-black/30 border-white/5 opacity-50'
                        }`}>
                          <span className={`w-8 h-8 shrink-0 rounded-md border flex items-center justify-center text-sm font-bold ${isSelected ? 'bg-amber-500/20 text-amber-500 border-amber-500' : 'bg-white/5 text-neutral-500 border-white/10'}`}>{letter}</span>
                          <span className={`flex-1 text-right ${isSelected ? 'text-white font-bold' : 'text-neutral-400'}`}>{option}</span>
                          {isSelected && <span className="text-xs text-blue-400 font-bold tracking-widest uppercase shrink-0">✦ כוח</span>}
                        </div>
                      );
                    })}
                    
                    {/* Handle Custom Text in Mirror */}
                    {sessionState?.answers?.[currentStep.id] && !currentStep.options?.[sessionState?.environment as keyof typeof currentStep.options]?.includes(sessionState.answers[currentStep.id]) && (
                      <div className="col-span-1 md:col-span-2 p-5 rounded-2xl border bg-amber-500/10 border-amber-500 flex items-center gap-4">
                        <span className="w-8 h-8 shrink-0 rounded-md border bg-amber-500/20 text-amber-500 border-amber-500 flex items-center justify-center text-sm font-bold">✎</span>
                        <span className="flex-1 text-white font-bold text-right">"{sessionState.answers[currentStep.id]}"</span>
                        <span className="text-xs text-blue-400 font-bold tracking-widest uppercase shrink-0">טקסט חופשי</span>
                      </div>
                    )}

                    {/* Pattern Revealed (Mirror of what the trainee sees) */}
                    {sessionState?.answers?.[currentStep.id] && currentStep.patternRevealed && (
                      <div className="col-span-1 md:col-span-2 mt-2 p-5 rounded-2xl border bg-blue-500/10 border-blue-500/20 flex items-start gap-4">
                        <span className="w-8 h-8 shrink-0 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-lg">💧</span>
                        <div>
                          <h4 className="text-blue-400 font-bold text-sm tracking-widest uppercase mb-1">דפוס שנחשף (המתאמן קורא כעת)</h4>
                          <p className="text-blue-100 font-medium text-lg">
                            {(() => {
                              const answer = sessionState.answers[currentStep.id];
                              const optionsArray = currentStep.options?.[sessionState.environment as keyof typeof currentStep.options] || [];
                              const answerIdx = optionsArray.indexOf(answer);
                              if (answerIdx !== -1) {
                                const patterns = currentStep.patternRevealed?.[sessionState.environment as keyof typeof currentStep.patternRevealed];
                                return patterns ? patterns[answerIdx] : "";
                              }
                              return "מדהים שהצלחת לנסח את זה בעצמך. הדפוס מנסה להגן עליך, אבל עכשיו אתה מתחיל לראות אותו מבחוץ.";
                            })()}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                  )}
                </div>
              )}

              {/* Coach Clinical Deep Dive (Only visible if step is active) */}
              {currentStep && (
                <div className="bg-[#11131a] rounded-2xl border border-amber-500/20 shadow-lg p-8">
                  <div className="flex items-center mb-6 border-b border-white/5 pb-4">
                     <span className="text-xs font-bold text-amber-500 bg-amber-500/10 px-3 py-1 rounded-full flex items-center gap-2">
                       <span className="w-2 h-2 rounded-full bg-amber-500"></span> למאמן - בזמן אמת
                     </span>
                  </div>

                  <div className="space-y-8">
                    {/* Framing */}
                    {currentStep.coachFraming && (
                      <div>
                        <h4 className="flex items-center gap-2 text-amber-500 font-bold text-sm mb-3 uppercase tracking-widest">
                          <Target className="w-4 h-4" /> מסגור
                        </h4>
                        <p className="text-neutral-300 text-lg leading-relaxed">{currentStep.coachFraming}</p>
                      </div>
                    )}

                    {/* Deepening */}
                    {currentStep.coachDeepeningQuestions && (
                      <div>
                        <h4 className="flex items-center gap-2 text-amber-500 font-bold text-sm mb-3 uppercase tracking-widest">
                          <Ear className="w-4 h-4" /> שאלות להעמקה עכשיו
                        </h4>
                        <ul className="space-y-3">
                          {currentStep.coachDeepeningQuestions.map((q, i) => (
                            <li key={i} className="text-white font-medium text-lg flex items-start gap-2">
                               <span className="text-amber-500 mt-1">›</span> {q}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Warning / Anchor */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-white/5">
                      {currentStep.coachWarning && (
                        <div>
                          <h4 className="flex items-center gap-2 text-red-400 font-bold text-sm mb-3 uppercase tracking-widest">
                            <AlertTriangle className="w-4 h-4" /> שים לב
                          </h4>
                          <p className="text-neutral-300 text-base">{currentStep.coachWarning}</p>
                        </div>
                      )}
                      <div>
                        <h4 className="flex items-center gap-2 text-amber-500 font-bold text-sm mb-3 uppercase tracking-widest">
                          <HeartPulse className="w-4 h-4" /> עוגן גופני
                        </h4>
                        <p className="text-neutral-300 text-base mb-6">שאל איפה בגוף הוא מרגיש את התשובה הזו. חזק את ההכרה.</p>
                        
                        <button 
                          onClick={() => setIsResourceModalOpen(true)}
                          className="w-full flex items-center justify-center gap-2 py-3 bg-amber-500/10 text-amber-500 border border-amber-500/30 rounded-xl hover:bg-amber-500 hover:text-black font-bold transition"
                        >
                          <Plus className="w-4 h-4" /> פתח חפיסת משאבים ושלח למתאמן
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              </div>

              {/* End of Journey Plan (Visible at the very end) */}
              {sessionState?.phase >= 10 && (
                <div className="bg-[#11131a] rounded-2xl border border-amber-500/50 shadow-[0_0_40px_rgba(245,158,11,0.1)] p-8 mt-12">
                  <div className="flex items-center mb-6">
                    <h3 className="text-xl font-bold text-amber-500 flex items-center gap-2">
                      <Target className="w-6 h-6" /> תכנית עבודה להמשך
                    </h3>
                  </div>
                  
                  <p className="text-xl text-white font-medium mb-10 pb-6 border-b border-white/10">
                    התמה המרכזית של הסשן היא זיהוי החלק השומר ({chosenArchetype?.name}) וחיבורו למשאבים. תכנית העבודה תעגן את מה שכבר נמצא.
                  </p>

                  <div className="space-y-10">
                    {/* 72 Hours */}
                    <div>
                      <h4 className="flex items-center gap-2 text-neutral-400 font-bold text-sm mb-4 tracking-widest">
                        <CalendarDays className="w-4 h-4" /> 72 השעות הקרובות
                      </h4>
                      <ul className="space-y-4 pr-6 border-r-2 border-amber-500/20">
                        {homeworkPlans[sessionState?.environment as keyof typeof homeworkPlans]?.next72.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-white text-lg">
                            <span className="w-2 h-2 rounded-full bg-amber-500 mt-2 shrink-0"></span> {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Next Week */}
                    <div>
                      <h4 className="flex items-center gap-2 text-neutral-400 font-bold text-sm mb-4 tracking-widest">
                        <CalendarDays className="w-4 h-4" /> השבוע הקרוב
                      </h4>
                      <ul className="space-y-4 pr-6 border-r-2 border-amber-500/20">
                        {homeworkPlans[sessionState?.environment as keyof typeof homeworkPlans]?.nextWeek.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-white text-lg">
                            <span className="w-2 h-2 rounded-full bg-amber-500 mt-2 shrink-0"></span> {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Next 30 Days (Coach Only) */}
                    <div>
                      <h4 className="flex items-center gap-2 text-neutral-400 font-bold text-sm mb-4 tracking-widest">
                        <CalendarDays className="w-4 h-4" /> 30 הימים הקרובים (מעקב קליני)
                      </h4>
                      <ul className="space-y-4 pr-6 border-r-2 border-amber-500/20">
                        {homeworkPlans[sessionState?.environment as keyof typeof homeworkPlans]?.next30.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-white text-lg">
                            <span className="w-2 h-2 rounded-full bg-amber-500 mt-2 shrink-0"></span> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}

            </div>
          )}
        </section>

      </main>

      {/* Resource Selection Modal */}
      {isResourceModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-6">
          <div className="bg-[#11131a] border border-white/10 rounded-3xl p-8 max-w-4xl w-full max-h-[85vh] flex flex-col relative">
            <button onClick={() => setIsResourceModalOpen(false)} className="absolute top-6 right-6 text-neutral-500 hover:text-white">✕ סגור</button>
            <h2 className="text-2xl font-bold text-amber-500 mb-2">שלח קלף משאב / דמות חכמה</h2>
            <p className="text-neutral-400 mb-6">בחר דמות מתוך החפיסה. הקלף יקפוץ מיד במסך של המתאמן ויציע לו עזרה ותמיכה.</p>
            
            <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-6">
              {worldsData.map(world => (
                world.archetypes.map(arc => (
                  <div key={arc.id} className="bg-black/30 border border-white/5 rounded-2xl p-4 flex flex-col items-center text-center hover:border-amber-500/50 cursor-pointer transition"
                    onClick={() => {
                      if (sessionId) {
                        const currentStored = JSON.parse(localStorage.getItem(`session_${sessionId}`) || "{}");
                        localStorage.setItem(`session_${sessionId}`, JSON.stringify({
                          ...currentStored,
                          coachInjectedResource: arc.id
                        }));
                      }
                      setIsResourceModalOpen(false);
                    }}
                  >
                    <div className="w-20 h-20 rounded-full bg-[#171a23] mb-3 overflow-hidden border border-white/10">
                      {arc.imageUrl ? (
                        <img src={arc.imageUrl} alt={arc.name} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-2xl">✨</div>
                      )}
                    </div>
                    <h4 className="text-white font-bold mb-1">{arc.name}</h4>
                    <span className="text-xs text-neutral-500">{world.title}</span>
                  </div>
                ))
              ))}
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media print {
          body { background: white !important; color: black !important; }
          .print\\:hidden { display: none !important; }
          .bg-\\[\\#11131a\\] { background: white !important; border: 1px solid #ddd !important; box-shadow: none !important; }
          .text-white, .text-neutral-100, .text-neutral-300, .text-neutral-400 { color: black !important; }
          .border-white\\/5, .border-white\\/10 { border-color: #e5e7eb !important; }
          .bg-black\\/30 { background: #f9fafb !important; }
          .bg-amber-500\\/10 { background: #fffbeb !important; }
          * { direction: rtl !important; }
        }
      `}</style>
    </div>
  );
}
