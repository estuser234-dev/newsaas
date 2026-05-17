import Link from 'next/link';
export default function CalculatorCard({title,description,href}:{title:string;description:string;href:string}){return <Link href={href} className='card block p-5 transition hover:-translate-y-1'><h3 className='font-semibold'>{title}</h3><p className='mt-2 text-sm text-slate-600 dark:text-slate-300'>{description}</p></Link>}
