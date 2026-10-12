'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'

const STAGES = [
  { e: '🥚', t: 'Egg', s: 'Every champion starts small' },
  { e: '🥚', t: 'Wiggling...', s: 'Nurtured with love', shake: true },
  { e: '🐣', t: 'Hatching!', s: 'Breaking through', pop: true },
  { e: '🐥', t: 'Chick', s: 'First days at ButtVilla' },
  { e: '🐤', t: 'Growing', s: 'Learning to stand strong', grow: true },
  { e: '🐓', t: 'Cockerel', s: 'Finding its voice' },
  { e: '🐔', t: 'ROOSTER!', s: 'Ready to lead', crown: true },
]

export default function Home() {
  const [t, setT] = useState({ d: 14, h: 0, m: 0, s: 0 })
  const [stage, setStage] = useState(0)
  const [eggs, setEggs] = useState([false,false,false,false,false])
  const [hatched, setHatched] = useState(0)

  useEffect(() => {
    const target = new Date(); target.setDate(target.getDate() + 14)
    const timer = setInterval(() => {
      const diff = target.getTime() - Date.now()
      setT({ d: Math.max(0,Math.floor(diff/86400000)), h: Math.max(0,Math.floor((diff/3600000)%24)), m: Math.max(0,Math.floor((diff/60000)%60)), s: Math.max(0,Math.floor((diff/1000)%60)) })
    }, 1000)
    const cycle = setInterval(() => setStage(s => (s+1)%STAGES.length), 2200)
    return () => { clearInterval(timer); clearInterval(cycle) }
  }, [])

  const hatch = (i:number) => { if(eggs[i]) return; const n=[...eggs]; n[i]=true; setEggs(n); setHatched(h=>h+1) }
  const cur = STAGES[stage]

  return (
    <main className="min-h-screen flex flex-col bg-[#FFFBF0] overflow-x-hidden">
      <style>{`
        @keyframes wiggle { 0%,100%{transform:rotate(-4deg)} 50%{transform:rotate(4deg)} }
        @keyframes pop { 0%{transform:scale(0.5)} 70%{transform:scale(1.2)} 100%{transform:scale(1)} }
        @keyframes slideRTL { 0%{transform:translateX(100vw); opacity:0} 12%{transform:translateX(0); opacity:1} 12%,58%{transform:translateX(0); opacity:1} 70%{transform:translateX(-100vw); opacity:0} 70%,100%{transform:translateX(-100vw); opacity:0} }
        @keyframes slideLTR { 0%{transform:translateX(-100vw); opacity:0} 12%{transform:translateX(0); opacity:1} 12%,58%{transform:translateX(0); opacity:1} 70%{transform:translateX(100vw); opacity:0} 70%,100%{transform:translateX(100vw); opacity:0} }
        @keyframes logoSwell {
          0% { transform: scale(1.15); opacity:1 }
          8% { transform: scale(1.15); opacity:1 }
          15% { transform: scale(0); opacity:0; }
          15.1%, 68% { transform: scale(0); opacity:0; }
          72% { transform: scale(0.1); opacity:0; }
          78% { transform: scale(0.5); opacity:1; }
          86% { transform: scale(1.4); opacity:1; }
          92% { transform: scale(1.15); opacity:1; }
          100% { transform: scale(1.15); opacity:1; }
        }
      `}</style>

      <header className="w-full bg-[#FFFBF0]/90 backdrop-blur border-b border-[#EDE0C0]/70 py-3 px-4 md:px-8 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <div className="relative w-12 h-12 md:w-14 md:h-14 shrink-0 bg-white rounded-full p-1 shadow-sm ring-1 ring-[#C8A86A]/20">
            <Image src="/logo.png" alt="ButtVilla Logo" fill sizes="56px" className="object-contain p-1" priority />
          </div>
          <div className="leading-tight">
            <h2 className="font-[var(--font-cinzel)] font-bold text-[14px] md:text-[20px] text-[#3B0A0F]">ButtVilla Kindergarten</h2>
            <p className="text-[9px] md:text-[11px] text-[#A68A4F]">40 Years Heritage Est. 1986</p>
          </div>
        </div>
      </header>

      <section className="flex-1 flex flex-col items-center text-center px-4 md:px-6 py-5 md:py-8 w-full max-w-[1200px] mx-auto">
        <div className="relative w-full h-[130px] md:h-[200px] flex items-center justify-center overflow-visible">
          <h1 className="absolute font-[var(--font-cinzel)] font-bold text-[22px] md:text-[48px] text-[#4A0C14] leading-[1.15] whitespace-nowrap px-2"
              style={{animation:'slideRTL 10s ease-in-out infinite'}}>
            Our New Website is Coming Soon
          </h1>
          <p className="absolute top-[62%] font-[var(--font-garamond)] italic text-[13px] md:text-[21px] text-[#7A5A32] whitespace-nowrap"
             style={{animation:'slideLTR 10s ease-in-out infinite'}}>
            We are nurturing eggs into roosters since 1986
          </p>
          <div className="absolute flex flex-col items-center justify-center" style={{animation:'logoSwell 10s ease-in-out infinite'}}>
            <div className="relative w-[140px] h-[140px] md:w-[220px] md:h-[220px] bg-white rounded-full p-3 md:p-4 shadow-[0_10px_40px_rgba(74,12,20,0.2),0_0_0_4px_rgba(200,168,106,0.2)] flex items-center justify-center">
              <div className="relative w-full h-full">
                <Image src="/logo.png" alt="ButtVilla Logo - Roosters Were Once Eggs" fill sizes="220px" className="object-contain" priority />
              </div>
            </div>
            <div className="mt-3 bg-[#4A0C14] text-[#E8C97A] px-4 py-1 rounded-full text-[10px] md:text-[12px] font-[var(--font-cinzel)] tracking-widest">
              IGANGA • ROOSTERS WERE ONCE EGGS
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 my-4 opacity-60">
          <div className="w-10 md:w-20 h-px bg-[#C8A86A]" />
          <span className="text-[#C8A86A] text-[12px]">❧</span>
          <div className="w-10 md:w-20 h-px bg-[#C8A86A]" />
        </div>

        <div className="w-full max-w-[680px] bg-gradient-to-b from-[#6D1420] to-[#4A0C14] rounded-[14px] grid grid-cols-3 py-3 shadow-xl">
          <div className="flex flex-col items-center border-r border-[#C8A86A]/20"><span className="text-[#E8C97A]">♛</span><span className="font-bold text-[22px] md:text-[28px] text-[#E8C97A]">40</span><span className="text-white/90 text-[10px]">Years</span></div>
          <div className="flex flex-col items-center border-r border-[#C8A86A]/20"><span className="text-[#E8C97A]">🎓</span><span className="font-bold text-[22px] md:text-[28px] text-[#E8C97A]">1200+</span><span className="text-white/90 text-[10px]">Alumni</span></div>
          <div className="flex flex-col items-center"><span className="text-[#E8C97A]">👨‍👩‍👧</span><span className="font-bold text-[22px] md:text-[28px] text-[#E8C97A]">350+</span><span className="text-white/90 text-[10px]">Kids</span></div>
        </div>

        <p className="text-[11px] text-[#8A7450] mt-4">Launching in</p>

        <div className="flex gap-2 mt-2 w-full max-w-[360px] justify-center">
          {[{v:t.d,l:'DAYS'},{v:t.h,l:'HOURS'},{v:t.m,l:'MINS'},{v:t.s,l:'SECS'}].map((c,i)=>(
            <div key={i} className="flex-1 bg-[#FFFEF7] border border-[#C8A86A]/60 rounded-[10px] py-2.5">
              <div className="font-bold text-[20px] text-[#4A0C14]">{String(c.v).padStart(2,'0')}</div>
              <div className="text-[8px] text-[#8A7450] tracking-widest">{c.l}</div>
            </div>
          ))}
        </div>

        <div className="mt-6 w-full max-w-[720px] grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-white border border-[#EDE0C0] rounded-[14px] p-3 shadow-sm">
            <p className="text-[8px] tracking-[0.2em] text-[#A68A4F] font-bold">THE BUTTVILLA CYCLE</p>
            <div className="mt-2 h-[90px] bg-[#FFFBF0] rounded-[10px] flex items-center justify-center"><div className={`text-[52px] ${cur.shake?'animate-[wiggle_0.25s_infinite]':''}`}>{cur.e}</div></div>
            <h4 className="font-bold text-[#4A0C14] text-[13px] mt-2">{cur.t}</h4>
          </div>
          <div className="bg-white border border-[#EDE0C0] rounded-[14px] p-3 shadow-sm">
            <p className="text-[8px] tracking-[0.2em] text-[#A68A4F] font-bold">HATCH THEM!</p>
            <div className="flex justify-center gap-1 mt-3">{eggs.map((h,i)=><button key={i} onClick={()=>hatch(i)} className="w-12 h-14 flex items-center justify-center"><span className="text-[32px]">{h?'🐥':'🥚'}</span></button>)}</div>
            <div className="mt-2 text-[11px] font-semibold">{hatched}/5 hatched</div>
            {hatched===5 && <button onClick={()=>{setEggs([false,false,false,false,false]); setHatched(0)}} className="text-[10px] underline text-[#A68A4F]">Play again</button>}
          </div>
        </div>

        <a href="https://chat.whatsapp.com/JoqGbT4n2sjLqe465XuuSp" target="_blank" className="mt-5 w-full md:w-auto bg-[#22C55E] text-white px-8 py-3 rounded-full text-[12px] font-bold shadow-lg flex justify-center">💬 Join WhatsApp Group</a>
      </section>

      <footer className="bg-[#FDF2D8] border-t text-center py-3 text-[10px] text-[#8A7450]">ButtVilla Kindergarten Iganga • Est. 1986</footer>
    </main>
  )
}
