import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/d428f3cd-113c-4155-9401-76022692cbf1/files/6bc48331-c027-4b82-8023-4ad6b9816bab.jpg";

type Page = "home" | "constructor" | "gallery" | "contact";

const JEWELRY_TYPES = [
  { id: "bracelet", label: "Браслет", emoji: "📿", desc: "Круговой макет", slots: 16 },
  { id: "necklace", label: "Ожерелье", emoji: "💎", desc: "Линейный макет", slots: 24 },
  { id: "earrings", label: "Серьги", emoji: "✨", desc: "1–3 бусины", slots: 3 },
  { id: "keychain_bag", label: "Брелок на сумку", emoji: "👜", desc: "Подвеска", slots: 8 },
  { id: "keychain_phone", label: "Брелок на телефон", emoji: "📱", desc: "Шнурок", slots: 10 },
];

type BeadColor = { name: string; hex: string; label: string };
type BeadShape = "round" | "oval" | "facet" | "tube" | "heart" | "star";

const BEAD_COLORS: BeadColor[] = [
  { name: "rose", hex: "#E8849A", label: "Розовый" },
  { name: "coral", hex: "#F4A261", label: "Коралловый" },
  { name: "gold", hex: "#F2C94C", label: "Золотой" },
  { name: "amber", hex: "#D97706", label: "Янтарный" },
  { name: "lavender", hex: "#C084FC", label: "Лавандовый" },
  { name: "sky", hex: "#7DD3FC", label: "Голубой" },
  { name: "mint", hex: "#6EE7B7", label: "Мятный" },
  { name: "white", hex: "#F5F0EB", label: "Белый" },
  { name: "pearl", hex: "#EFE8D8", label: "Жемчуг" },
  { name: "silver", hex: "#CBD5E1", label: "Серебро" },
  { name: "black", hex: "#374151", label: "Чёрный" },
  { name: "red", hex: "#EF4444", label: "Красный" },
  { name: "burgundy", hex: "#9F1239", label: "Бордовый" },
  { name: "teal", hex: "#0D9488", label: "Бирюза" },
  { name: "olive", hex: "#65A30D", label: "Оливковый" },
  { name: "chocolate", hex: "#92400E", label: "Шоколад" },
];

const BEAD_SHAPES: { id: BeadShape; label: string; emoji: string }[] = [
  { id: "round", label: "Круглая", emoji: "⚪" },
  { id: "oval", label: "Овальная", emoji: "🥚" },
  { id: "facet", label: "Гранёная", emoji: "💠" },
  { id: "tube", label: "Трубочка", emoji: "🔵" },
  { id: "heart", label: "Сердечко", emoji: "❤️" },
  { id: "star", label: "Звёздочка", emoji: "⭐" },
];

const BEAD_SIZES = [
  { id: "xs", label: "4мм", px: 18 },
  { id: "sm", label: "6мм", px: 24 },
  { id: "md", label: "8мм", px: 32 },
  { id: "lg", label: "10мм", px: 40 },
  { id: "xl", label: "12мм", px: 48 },
];

type Bead = {
  color: BeadColor;
  shape: BeadShape;
  sizeId: string;
};

type PlacedBead = Bead | null;

const GALLERY_ITEMS = [
  { id: 1, name: "Нежный браслет", type: "Браслет", colors: ["#E8849A", "#F2C94C", "#EFE8D8"], emoji: "📿" },
  { id: 2, name: "Летнее ожерелье", type: "Ожерелье", colors: ["#7DD3FC", "#6EE7B7", "#F4A261"], emoji: "💎" },
  { id: 3, name: "Серьги «Роза»", type: "Серьги", colors: ["#E8849A", "#9F1239", "#EFE8D8"], emoji: "✨" },
  { id: 4, name: "Брелок звёздочки", type: "Брелок", colors: ["#F2C94C", "#F4A261", "#D97706"], emoji: "⭐" },
  { id: 5, name: "Браслет «Осень»", type: "Браслет", colors: ["#D97706", "#92400E", "#65A30D"], emoji: "📿" },
  { id: 6, name: "Ожерелье «Море»", type: "Ожерелье", colors: ["#0D9488", "#7DD3FC", "#EFE8D8"], emoji: "💎" },
];

function HomePage({ onStart }: { onStart: () => void }) {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden pt-20 pb-16 px-4">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-10 right-10 w-72 h-72 rounded-full opacity-20"
            style={{ background: "radial-gradient(circle, hsl(340,65%,58%) 0%, transparent 70%)" }} />
          <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-15"
            style={{ background: "radial-gradient(circle, hsl(38,90%,65%) 0%, transparent 70%)" }} />
        </div>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 glass-warm rounded-full px-4 py-2 mb-6 text-sm font-medium"
              style={{ color: "hsl(var(--warm-deep))" }}>
              <span className="animate-pulse-soft w-2 h-2 rounded-full gradient-brand inline-block" />
              Конструктор украшений из бусин
            </div>
            <h1 className="font-cormorant text-5xl md:text-6xl font-semibold leading-tight mb-6">
              <span className="gradient-text">Создавай эскизы</span>
              <br />
              <span style={{ color: "hsl(var(--warm-deep))" }}>украшений онлайн</span>
            </h1>
            <p className="text-lg leading-relaxed mb-8 font-golos"
              style={{ color: "hsl(20, 30%, 35%)" }}>
              Выбирай тип украшения, подбирай бусины по цвету и форме — и составляй готовый эскиз за несколько минут. Идеально для мастеров и их заказчиков.
            </p>
            <div className="flex flex-wrap gap-3">
              <button className="btn-primary text-lg px-8 py-4" onClick={onStart}>
                Начать создавать
              </button>
              <button className="btn-outline text-lg px-8 py-4">
                Посмотреть примеры
              </button>
            </div>
          </div>
          <div className="relative animate-fade-in-up delay-200">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl animate-float"
              style={{ boxShadow: "0 20px 60px rgba(220, 80, 120, 0.2)" }}>
              <img src={HERO_IMAGE} alt="Украшения из бусин" className="w-full h-80 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3d1020]/20 to-transparent" />
            </div>
            <div className="absolute -left-6 top-12 glass rounded-2xl px-4 py-3 shadow-lg animate-fade-in-up delay-300">
              <div className="text-2xl mb-1">📿</div>
              <div className="text-xs font-semibold" style={{ color: "hsl(var(--warm-deep))" }}>Браслеты</div>
            </div>
            <div className="absolute -right-4 bottom-16 glass rounded-2xl px-4 py-3 shadow-lg animate-fade-in-up delay-400">
              <div className="text-2xl mb-1">✨</div>
              <div className="text-xs font-semibold" style={{ color: "hsl(var(--warm-deep))" }}>Серьги</div>
            </div>
          </div>
        </div>
      </section>

      {/* Типы украшений */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title text-4xl text-center mb-3">Что можно создать</h2>
          <p className="text-center mb-10 font-golos" style={{ color: "hsl(var(--muted-foreground))" }}>
            5 типов украшений с готовыми шаблонами
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {JEWELRY_TYPES.map((type, i) => (
              <button
                key={type.id}
                onClick={onStart}
                className="glass-warm rounded-2xl p-5 text-center card-hover animate-fade-in-up cursor-pointer"
                style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="text-4xl mb-3">{type.emoji}</div>
                <div className="font-semibold text-sm mb-1" style={{ color: "hsl(var(--warm-deep))" }}>
                  {type.label}
                </div>
                <div className="text-xs" style={{ color: "hsl(var(--muted-foreground))" }}>{type.desc}</div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Как это работает */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title text-4xl text-center mb-12">Как это работает</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "1", icon: "Layers", title: "Выбери шаблон", desc: "Браслет, ожерелье, серьги или брелок — выбери нужный тип украшения" },
              { step: "2", icon: "Palette", title: "Подбери бусины", desc: "Фильтруй по цвету, форме и размеру. Нажимай на бусину — затем на место в шаблоне" },
              { step: "3", icon: "Camera", title: "Сохрани эскиз", desc: "Сделай скриншот готового эскиза и отправь мастеру для заказа" },
            ].map((item, i) => (
              <div key={i} className={`glass rounded-3xl p-6 text-center card-hover animate-fade-in-up delay-${(i + 1) * 100}`}>
                <div className="w-14 h-14 gradient-brand rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-white font-cormorant font-bold text-2xl">{item.step}</span>
                </div>
                <h3 className="font-semibold text-lg mb-2" style={{ color: "hsl(var(--warm-deep))" }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Мини-галерея */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <h2 className="section-title text-4xl">Примеры работ</h2>
            <button className="btn-outline text-sm px-4 py-2">Все примеры</button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {GALLERY_ITEMS.map((item, i) => (
              <div key={item.id}
                className="glass-warm rounded-2xl p-5 card-hover animate-fade-in-up cursor-pointer"
                style={{ animationDelay: `${i * 0.08}s` }}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{item.emoji}</span>
                  <div>
                    <div className="font-semibold text-sm" style={{ color: "hsl(var(--warm-deep))" }}>{item.name}</div>
                    <div className="text-xs" style={{ color: "hsl(var(--muted-foreground))" }}>{item.type}</div>
                  </div>
                </div>
                <div className="flex gap-2 flex-wrap">
                  {item.colors.map((c, ci) => (
                    <div key={ci} className="w-7 h-7 rounded-full shadow-sm border-2 border-white"
                      style={{ background: c }} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="glass rounded-3xl p-10 shadow-xl" style={{ boxShadow: "0 10px 40px rgba(220,80,120,0.12)" }}>
            <div className="text-5xl mb-4">💎</div>
            <h2 className="font-cormorant text-4xl font-semibold mb-4" style={{ color: "hsl(var(--warm-deep))" }}>
              Готова создать своё украшение?
            </h2>
            <p className="mb-8" style={{ color: "hsl(var(--muted-foreground))" }}>
              Открой конструктор и собери эскиз прямо сейчас — это займёт всего пару минут
            </p>
            <button className="btn-primary text-lg px-10 py-4" onClick={onStart}>
              Открыть конструктор
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

function ConstructorPage() {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [placedBeads, setPlacedBeads] = useState<PlacedBead[]>([]);
  const [selectedBead, setSelectedBead] = useState<Bead | null>(null);
  const [filterColor, setFilterColor] = useState<string | null>(null);
  const [filterShape, setFilterShape] = useState<BeadShape | null>(null);
  const [filterSize, setFilterSize] = useState<string>("md");
  const [history, setHistory] = useState<PlacedBead[][]>([]);
  const [aiTip, setAiTip] = useState<string | null>(null);

  const currentType = JEWELRY_TYPES.find(t => t.id === selectedType);
  const slots = currentType?.slots ?? 0;

  const initSlots = (typeId: string) => {
    const t = JEWELRY_TYPES.find(x => x.id === typeId);
    setPlacedBeads(new Array(t?.slots ?? 0).fill(null));
    setHistory([]);
    setSelectedType(typeId);
    setAiTip(null);
  };

  const filteredBeads = BEAD_COLORS
    .filter(c => !filterColor || c.name === filterColor)
    .map(color => ({
      color,
      shape: filterShape ?? "round" as BeadShape,
      sizeId: filterSize,
    } as Bead));

  const placeBeadOnSlot = (slotIndex: number) => {
    if (!selectedBead) return;
    setHistory(h => [...h, [...placedBeads]]);
    const next = [...placedBeads];
    next[slotIndex] = next[slotIndex]?.color.name === selectedBead.color.name &&
      next[slotIndex]?.shape === selectedBead.shape ? null : selectedBead;
    setPlacedBeads(next);
  };

  const undo = () => {
    if (history.length === 0) return;
    const prev = history[history.length - 1];
    setPlacedBeads(prev);
    setHistory(h => h.slice(0, -1));
  };

  const clear = () => {
    setHistory(h => [...h, [...placedBeads]]);
    setPlacedBeads(new Array(slots).fill(null));
  };

  const getAiTip = () => {
    const filled = placedBeads.filter(Boolean).length;
    const colors = [...new Set(placedBeads.filter(Boolean).map(b => b?.color.label))];
    const tips: string[] = [];
    if (filled === 0) tips.push("Начни с центральной бусины — она задаёт тон всему украшению! Попробуй жемчуг или яркий коралл.");
    if (filled > 0 && filled < slots / 3) tips.push(`Отлично начинаешь! Цвет «${colors[0]}» выглядит изысканно. Попробуй добавить контрастный оттенок через 2–3 бусины.`);
    if (filled >= slots / 2 && filled < slots) tips.push("Украшение уже наполовину готово! Чтобы создать симметрию — повтори первые бусины в обратном порядке.");
    if (filled === slots) tips.push("Эскиз готов! Сделай скриншот и отправь мастеру. Получилось очень красиво!");
    const tip = tips[0] ?? "Попробуй чередовать крупные и мелкие бусины — это создаёт красивый ритм в украшении!";
    setAiTip(tip);
  };

  const renderWorkArea = () => {
    if (!currentType) return null;
    const isBracelet = currentType.id === "bracelet";
    const isEarring = currentType.id === "earrings";
    const isNecklace = currentType.id === "necklace";

    if (isBracelet) {
      const radius = 110;
      const cx = 140, cy = 140;
      return (
        <div className="flex flex-col items-center gap-4">
          <p className="text-sm font-medium" style={{ color: "hsl(var(--muted-foreground))" }}>
            Браслет · {slots} бусин · нажми на место, чтобы добавить
          </p>
          <svg width={280} height={280} className="overflow-visible">
            <circle cx={cx} cy={cy} r={70} fill="none"
              stroke="rgba(220,80,120,0.08)" strokeWidth={1} strokeDasharray="6 4" />
            {Array.from({ length: slots }).map((_, i) => {
              const angle = (i / slots) * 2 * Math.PI - Math.PI / 2;
              const x = cx + radius * Math.cos(angle);
              const y = cy + radius * Math.sin(angle);
              const bead = placedBeads[i];
              return (
                <g key={i} onClick={() => placeBeadOnSlot(i)} style={{ cursor: "pointer" }}>
                  {bead && (
                    <defs>
                      <radialGradient id={`grad-${i}`} cx="35%" cy="35%" r="65%">
                        <stop offset="0%" stopColor={bead.color.hex} stopOpacity="1" />
                        <stop offset="100%" stopColor={bead.color.hex} stopOpacity="0.6" />
                      </radialGradient>
                    </defs>
                  )}
                  <circle cx={x} cy={y} r={13}
                    fill={bead ? `url(#grad-${i})` : "rgba(220,80,120,0.07)"}
                    stroke={bead ? "rgba(255,255,255,0.7)" : "rgba(220,80,120,0.35)"}
                    strokeWidth={bead ? 2 : 1.5}
                    strokeDasharray={bead ? "none" : "4 3"}
                    style={{ filter: bead ? "drop-shadow(0 2px 4px rgba(0,0,0,0.15))" : "none" }}
                  />
                  {!bead && (
                    <text x={x} y={y + 1} textAnchor="middle" dominantBaseline="middle"
                      fontSize="10" fill="rgba(220,80,120,0.4)">+</text>
                  )}
                </g>
              );
            })}
          </svg>
        </div>
      );
    }

    if (isEarring) {
      const earSlots = slots;
      return (
        <div className="flex flex-col items-center gap-4">
          <p className="text-sm font-medium" style={{ color: "hsl(var(--muted-foreground))" }}>
            Серьги · по {earSlots} бусины на каждой
          </p>
          <div className="flex gap-12">
            {[0, 1].map(ear => (
              <div key={ear} className="flex flex-col items-center gap-2">
                <div className="w-4 h-4 rounded-full border-2 mb-1"
                  style={{ borderColor: "hsl(var(--warm-pink))" }} />
                {Array.from({ length: earSlots }).map((_, i) => {
                  const idx = ear * earSlots + i;
                  const bead = placedBeads[idx] ?? null;
                  return (
                    <div key={i}
                      onClick={() => placeBeadOnSlot(idx)}
                      className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-all hover:scale-110"
                      style={{
                        background: bead ? `radial-gradient(circle at 35% 35%, ${bead.color.hex}ee, ${bead.color.hex}77)` : "rgba(220,80,120,0.07)",
                        border: bead ? "2px solid rgba(255,255,255,0.6)" : "2px dashed rgba(220,80,120,0.35)",
                        boxShadow: bead ? `0 2px 10px ${bead.color.hex}55` : "none",
                      }}>
                      {!bead && <span style={{ color: "hsl(var(--warm-pink))", opacity: 0.4 }}>+</span>}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      );
    }

    if (isNecklace) {
      return (
        <div className="flex flex-col items-center gap-4 w-full">
          <p className="text-sm font-medium" style={{ color: "hsl(var(--muted-foreground))" }}>
            Ожерелье · {slots} бусин · нажми на место, чтобы добавить
          </p>
          <svg width="100%" height={160} viewBox="0 0 500 160" className="max-w-md">
            <path d="M 20 30 Q 250 150 480 30" fill="none"
              stroke="rgba(220,80,120,0.15)" strokeWidth={2} strokeDasharray="5 3" />
            {Array.from({ length: slots }).map((_, i) => {
              const t = i / (slots - 1);
              const x = 20 + t * 460;
              const y = 30 + Math.sin(t * Math.PI) * 120;
              const bead = placedBeads[i];
              return (
                <g key={i} onClick={() => placeBeadOnSlot(i)} style={{ cursor: "pointer" }}>
                  {bead && (
                    <defs>
                      <radialGradient id={`ng-${i}`} cx="35%" cy="35%" r="65%">
                        <stop offset="0%" stopColor={bead.color.hex} />
                        <stop offset="100%" stopColor={bead.color.hex} stopOpacity="0.6" />
                      </radialGradient>
                    </defs>
                  )}
                  <circle cx={x} cy={y} r={i === Math.floor(slots / 2) ? 16 : 13}
                    fill={bead ? `url(#ng-${i})` : "rgba(220,80,120,0.07)"}
                    stroke={bead ? "rgba(255,255,255,0.7)" : "rgba(220,80,120,0.3)"}
                    strokeWidth={bead ? 2 : 1.5}
                    strokeDasharray={bead ? "none" : "4 3"}
                    style={{ filter: bead ? "drop-shadow(0 2px 6px rgba(0,0,0,0.15))" : "none" }}
                    className="transition-all hover:opacity-80"
                  />
                  {!bead && (
                    <text x={x} y={y + 1} textAnchor="middle" dominantBaseline="middle"
                      fontSize="10" fill="rgba(220,80,120,0.4)">+</text>
                  )}
                </g>
              );
            })}
          </svg>
        </div>
      );
    }

    return (
      <div className="flex flex-col items-center gap-2">
        <p className="text-sm font-medium mb-2" style={{ color: "hsl(var(--muted-foreground))" }}>
          {currentType.label} · {slots} бусин
        </p>
        <div className="w-4 h-6 rounded-t-full border-2 mb-1"
          style={{ borderColor: "hsl(var(--warm-gold))" }} />
        {Array.from({ length: slots }).map((_, i) => {
          const bead = placedBeads[i];
          return (
            <div key={i}
              onClick={() => placeBeadOnSlot(i)}
              className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-all hover:scale-110"
              style={{
                background: bead ? `radial-gradient(circle at 35% 35%, ${bead.color.hex}ee, ${bead.color.hex}77)` : "rgba(220,80,120,0.07)",
                border: bead ? "2px solid rgba(255,255,255,0.6)" : "2px dashed rgba(220,80,120,0.35)",
                boxShadow: bead ? `0 2px 10px ${bead.color.hex}55` : "none",
              }}>
              {!bead && <span style={{ color: "hsl(var(--warm-pink))", opacity: 0.4 }}>+</span>}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="min-h-screen px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="font-cormorant text-4xl font-semibold gradient-text text-center mb-2">
          Конструктор украшений
        </h1>
        <p className="text-center mb-8 font-golos" style={{ color: "hsl(var(--muted-foreground))" }}>
          Выбери тип украшения и создай свой эскиз
        </p>

        <div className="flex flex-wrap gap-3 justify-center mb-8">
          {JEWELRY_TYPES.map(type => (
            <button
              key={type.id}
              onClick={() => initSlots(type.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl font-medium text-sm transition-all duration-200 hover:scale-105 ${
                selectedType === type.id
                  ? "gradient-brand text-white shadow-lg"
                  : "glass-warm border border-[hsl(var(--warm-pink))]/20 hover:border-[hsl(var(--warm-pink))]/50"
              }`}
              style={selectedType !== type.id ? { color: "hsl(var(--warm-deep))" } : {}}>
              <span>{type.emoji}</span>
              {type.label}
            </button>
          ))}
        </div>

        {!selectedType ? (
          <div className="text-center py-20">
            <div className="text-6xl mb-4 animate-float">💎</div>
            <p className="font-cormorant text-2xl" style={{ color: "hsl(340,40%,35%)" }}>
              Выбери тип украшения выше, чтобы начать
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-[1fr_320px] gap-6">
            <div className="glass rounded-3xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-cormorant text-2xl font-semibold" style={{ color: "hsl(var(--warm-deep))" }}>
                  {currentType?.emoji} {currentType?.label}
                </h2>
                <div className="flex gap-2">
                  <button
                    onClick={undo}
                    disabled={history.length === 0}
                    className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-medium glass-warm border border-[hsl(var(--warm-pink))]/20 hover:border-[hsl(var(--warm-pink))]/60 transition-all disabled:opacity-40 disabled:cursor-not-allowed hover:scale-105"
                    style={{ color: "hsl(var(--warm-deep))" }}>
                    <Icon name="Undo2" size={15} />
                    Назад
                  </button>
                  <button
                    onClick={clear}
                    className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-medium bg-red-50 border border-red-200 text-red-500 hover:bg-red-100 transition-all hover:scale-105">
                    <Icon name="Trash2" size={15} />
                    Очистить
                  </button>
                </div>
              </div>

              <div className="flex justify-center py-6">
                {renderWorkArea()}
              </div>

              <div className="mt-4 p-4 rounded-2xl gradient-soft border border-[hsl(var(--warm-pink))]/15">
                <div className="flex items-center gap-2 text-sm" style={{ color: "hsl(var(--warm-deep))" }}>
                  <Icon name="Camera" size={16} />
                  <span className="font-medium">Готово?</span>
                  <span style={{ color: "hsl(var(--muted-foreground))" }}>Сделайте скриншот экрана и отправьте мастеру для заказа</span>
                </div>
              </div>

              <div className="mt-4">
                <button
                  onClick={getAiTip}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl font-medium text-sm transition-all hover:scale-[1.01] gradient-brand text-white shadow-md">
                  <Icon name="Sparkles" size={16} />
                  Совет от ИИ-помощника
                </button>
                {aiTip && (
                  <div className="mt-3 p-4 glass-warm rounded-2xl border border-[hsl(var(--warm-pink))]/20 animate-fade-in-up">
                    <div className="flex gap-2">
                      <span className="text-lg">✨</span>
                      <p className="text-sm leading-relaxed" style={{ color: "hsl(var(--warm-deep))" }}>{aiTip}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="glass rounded-3xl p-5 flex flex-col gap-4">
              <h3 className="font-cormorant text-xl font-semibold" style={{ color: "hsl(var(--warm-deep))" }}>
                Галерея бусин
              </h3>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: "hsl(var(--muted-foreground))" }}>Форма</p>
                <div className="flex flex-wrap gap-1.5">
                  {BEAD_SHAPES.map(shape => (
                    <button
                      key={shape.id}
                      onClick={() => setFilterShape(filterShape === shape.id ? null : shape.id)}
                      className={`px-2.5 py-1 rounded-xl text-xs font-medium transition-all hover:scale-105 ${
                        filterShape === shape.id ? "gradient-brand text-white shadow-sm" : "glass-warm border border-[hsl(var(--warm-pink))]/20"
                      }`}
                      style={filterShape !== shape.id ? { color: "hsl(var(--warm-deep))" } : {}}>
                      {shape.emoji} {shape.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: "hsl(var(--muted-foreground))" }}>Размер</p>
                <div className="flex gap-1.5">
                  {BEAD_SIZES.map(s => (
                    <button
                      key={s.id}
                      onClick={() => setFilterSize(s.id)}
                      className={`flex-1 py-1 rounded-xl text-xs font-medium transition-all hover:scale-105 ${
                        filterSize === s.id ? "gradient-brand text-white shadow-sm" : "glass-warm border border-[hsl(var(--warm-pink))]/20"
                      }`}
                      style={filterSize !== s.id ? { color: "hsl(var(--warm-deep))" } : {}}>
                      {s.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: "hsl(var(--muted-foreground))" }}>Цвет</p>
                <div className="flex flex-wrap gap-2">
                  {BEAD_COLORS.map(color => (
                    <button
                      key={color.name}
                      onClick={() => setFilterColor(filterColor === color.name ? null : color.name)}
                      title={color.label}
                      className="w-7 h-7 rounded-full transition-all hover:scale-110"
                      style={{
                        background: color.hex,
                        boxShadow: filterColor === color.name
                          ? `0 0 0 3px white, 0 0 0 5px ${color.hex}`
                          : `0 1px 4px rgba(0,0,0,0.15), inset 0 1px 2px rgba(255,255,255,0.4)`,
                        transform: filterColor === color.name ? "scale(1.2)" : "scale(1)",
                      }} />
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: "hsl(var(--muted-foreground))" }}>
                  Нажми чтобы выбрать → нажми на место в шаблоне
                </p>
                <div className="grid grid-cols-4 gap-2 max-h-48 overflow-y-auto pr-1">
                  {filteredBeads.map((bead, i) => {
                    const isSelected = selectedBead?.color.name === bead.color.name &&
                      selectedBead?.shape === bead.shape;
                    const isHeart = bead.shape === "heart";
                    const isStar = bead.shape === "star";
                    return (
                      <button
                        key={i}
                        onClick={() => setSelectedBead(isSelected ? null : bead)}
                        className="flex items-center justify-center w-full aspect-square rounded-2xl transition-all hover:scale-110 relative"
                        style={{
                          background: isSelected ? `${bead.color.hex}22` : "rgba(255,255,255,0.5)",
                          border: isSelected ? `2px solid ${bead.color.hex}` : "2px solid transparent",
                          boxShadow: isSelected ? `0 0 12px ${bead.color.hex}44` : "none",
                        }}>
                        {isHeart || isStar ? (
                          <span style={{ fontSize: 22 }}>{isHeart ? "❤️" : "⭐"}</span>
                        ) : (
                          <div style={{
                            width: 24, height: 24,
                            background: `radial-gradient(circle at 35% 35%, ${bead.color.hex}ee, ${bead.color.hex}88)`,
                            borderRadius: bead.shape === "round" ? "50%" : bead.shape === "oval" ? "50% / 35%" : bead.shape === "facet" ? "30%" : bead.shape === "tube" ? "6px" : "50%",
                            boxShadow: `inset -2px -2px 4px rgba(0,0,0,0.15), inset 2px 2px 4px rgba(255,255,255,0.4)`,
                          }} />
                        )}
                        {isSelected && (
                          <div className="absolute -top-1 -right-1 w-4 h-4 gradient-brand rounded-full flex items-center justify-center">
                            <Icon name="Check" size={9} className="text-white" />
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {selectedBead && (
                <div className="p-3 gradient-soft rounded-2xl border border-[hsl(var(--warm-pink))]/20 animate-scale-in">
                  <p className="text-xs font-medium" style={{ color: "hsl(var(--warm-deep))" }}>
                    Выбрана: <strong>{selectedBead.color.label}</strong> · {BEAD_SHAPES.find(s => s.id === selectedBead.shape)?.label}
                  </p>
                  <p className="text-xs mt-0.5" style={{ color: "hsl(var(--muted-foreground))" }}>
                    Нажми на пустое место в шаблоне
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function GalleryPage() {
  const examples = [
    ...GALLERY_ITEMS,
    { id: 7, name: "Серьги «Капля»", type: "Серьги", colors: ["#C084FC", "#E8849A", "#F2C94C"], emoji: "✨" },
    { id: 8, name: "Браслет «Радуга»", type: "Браслет", colors: ["#EF4444", "#F4A261", "#F2C94C", "#6EE7B7", "#7DD3FC"], emoji: "📿" },
    { id: 9, name: "Брелок «Золото»", type: "Брелок", colors: ["#F2C94C", "#D97706", "#EFE8D8"], emoji: "👜" },
  ];

  return (
    <div className="min-h-screen px-4 py-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="font-cormorant text-4xl font-semibold gradient-text text-center mb-2">Галерея эскизов</h1>
        <p className="text-center mb-10 font-golos" style={{ color: "hsl(var(--muted-foreground))" }}>
          Вдохновляйся готовыми работами и создавай свои
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {examples.map((item, i) => (
            <div key={item.id}
              className="glass rounded-3xl p-6 card-hover cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${i * 0.07}s` }}>
              <div className="text-5xl text-center mb-4">{item.emoji}</div>
              <h3 className="font-semibold text-center mb-1" style={{ color: "hsl(var(--warm-deep))" }}>{item.name}</h3>
              <p className="text-xs text-center mb-4" style={{ color: "hsl(var(--muted-foreground))" }}>{item.type}</p>
              <div className="flex gap-2 justify-center">
                {item.colors.map((c, ci) => (
                  <div key={ci} className="w-8 h-8 rounded-full border-2 border-white shadow-sm"
                    style={{ background: c }} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ContactPage() {
  return (
    <div className="min-h-screen px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="font-cormorant text-4xl font-semibold gradient-text text-center mb-2">Контакты</h1>
        <p className="text-center mb-10" style={{ color: "hsl(var(--muted-foreground))" }}>
          Свяжитесь для заказа украшения или по вопросам
        </p>
        <div className="glass rounded-3xl p-8 space-y-5">
          {[
            { icon: "Camera", title: "Как заказать по эскизу", desc: "Создайте эскиз в конструкторе, сделайте скриншот экрана и отправьте нам — мы подберём все нужные бусины и свяжемся с вами для уточнения деталей" },
            { icon: "MessageCircle", title: "Написать мастеру", desc: "Telegram, WhatsApp или ВКонтакте — укажите ссылки или номер телефона здесь" },
            { icon: "Heart", title: "Наши работы", desc: "Смотрите готовые украшения и вдохновляйтесь идеями для заказа в галерее выше" },
          ].map((item, i) => (
            <div key={i} className="flex gap-4 p-4 glass-warm rounded-2xl">
              <div className="w-11 h-11 gradient-brand rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                <Icon name={item.icon as "Camera" | "MessageCircle" | "Heart"} size={20} className="text-white" />
              </div>
              <div>
                <h3 className="font-semibold mb-1" style={{ color: "hsl(var(--warm-deep))" }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Index() {
  const [page, setPage] = useState<Page>("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: Page; label: string; emoji: string }[] = [
    { id: "home", label: "Главная", emoji: "🏠" },
    { id: "constructor", label: "Конструктор", emoji: "💎" },
    { id: "gallery", label: "Галерея", emoji: "🖼️" },
    { id: "contact", label: "Контакты", emoji: "📬" },
  ];

  return (
    <div className="min-h-screen font-golos">
      <nav className="sticky top-0 z-50 glass-warm border-b border-[hsl(var(--warm-pink))]/15 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <button
            onClick={() => setPage("home")}
            className="flex items-center gap-2 font-cormorant text-2xl font-semibold gradient-text hover:scale-105 transition-transform">
            ✨ BeadCraft
          </button>

          <div className="hidden md:flex items-center gap-6">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => setPage(item.id)}
                className={`nav-link text-sm font-medium transition-all ${page === item.id ? "!text-[hsl(var(--warm-pink))] font-semibold" : ""}`}>
                {item.label}
              </button>
            ))}
            <button
              onClick={() => setPage("constructor")}
              className="btn-primary text-sm px-5 py-2.5">
              Создать эскиз
            </button>
          </div>

          <button
            className="md:hidden p-2 rounded-xl glass-warm"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <Icon name={mobileMenuOpen ? "X" : "Menu"} size={20}
              style={{ color: "hsl(var(--warm-deep))" }} />
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden glass-warm border-t border-[hsl(var(--warm-pink))]/15 px-4 py-3 flex flex-col gap-2 animate-fade-in-up">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => { setPage(item.id); setMobileMenuOpen(false); }}
                className={`flex items-center gap-3 px-4 py-2.5 rounded-2xl text-sm font-medium transition-all ${
                  page === item.id ? "gradient-brand text-white" : "hover:bg-white/50"
                }`}
                style={page !== item.id ? { color: "hsl(var(--warm-deep))" } : {}}>
                <span>{item.emoji}</span>
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      <main>
        {page === "home" && <HomePage onStart={() => setPage("constructor")} />}
        {page === "constructor" && <ConstructorPage />}
        {page === "gallery" && <GalleryPage />}
        {page === "contact" && <ContactPage />}
      </main>

      <footer className="border-t border-[hsl(var(--warm-pink))]/15 py-8 px-4 mt-10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-cormorant text-xl gradient-text font-semibold">✨ BeadCraft</span>
          <p className="text-sm" style={{ color: "hsl(var(--muted-foreground))" }}>
            Конструктор украшений из бусин — создавай эскизы онлайн
          </p>
          <button onClick={() => setPage("constructor")} className="btn-primary text-sm px-5 py-2">
            Начать создавать
          </button>
        </div>
      </footer>
    </div>
  );
}
