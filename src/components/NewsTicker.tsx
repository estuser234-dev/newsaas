import { tickerItems } from '@/data/ticker';
export default function NewsTicker(){return <div className='overflow-hidden bg-emerald-600 py-2 text-white'><div className='animate-[marquee_25s_linear_infinite] whitespace-nowrap'>{tickerItems.map((item,i)=><span key={i} className='mx-8'>{item}</span>)}</div></div>}
