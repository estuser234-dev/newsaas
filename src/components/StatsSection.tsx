const stats=[['125K+','Monthly Readers'],['45+','Guides & Calculators'],['4.8/5','User Trust Score']];
export default function StatsSection(){return <section className='grid gap-4 md:grid-cols-3'>{stats.map(([v,l])=><div key={l} className='card p-6 text-center'><p className='text-2xl font-bold text-emerald-600'>{v}</p><p>{l}</p></div>)}</section>}
