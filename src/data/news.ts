export type Article={id:number;title:string;description:string;category:'Tax'|'Investment'|'Economy'|'Personal Finance'|'Retirement';date:string;image:string};
export const articles:Article[]=[
{id:1,title:'Smart Tax Moves for 2026',description:'Key planning ideas before filing season.',category:'Tax',date:'2026-05-10',image:'https://images.unsplash.com/photo-1554224154-26032ffc0d07'},
{id:2,title:'Balanced ETFs Gain Momentum',description:'How diversified allocations reduce volatility.',category:'Investment',date:'2026-05-12',image:'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3'},
{id:3,title:'Inflation and Household Budgets',description:'Practical budget changes for uncertain cycles.',category:'Economy',date:'2026-05-08',image:'https://images.unsplash.com/photo-1556740749-887f6717d7e4'},
{id:4,title:'Emergency Fund Benchmarks',description:'A framework for resilient cash reserves.',category:'Personal Finance',date:'2026-05-09',image:'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e'},
{id:5,title:'Retirement Bucketing Strategy',description:'Sequencing risk and cashflow for retirees.',category:'Retirement',date:'2026-05-14',image:'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40'}
];
