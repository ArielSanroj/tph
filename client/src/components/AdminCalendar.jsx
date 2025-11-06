import React from 'react';

function toISO(d){return d.toISOString().slice(0,10);} 
function addDays(date, days){const d=new Date(date); d.setDate(d.getDate()+days); return d;}
function isBefore(a,b){return new Date(a).getTime()<new Date(b).getTime();}
function isSameDay(a,b){return toISO(new Date(a))===toISO(new Date(b));}

function monthMatrix(year, month){
  const first=new Date(year, month, 1);
  const start=new Date(first);
  const day=start.getDay(); // 0 Sun..6 Sat
  start.setDate(start.getDate()-((day+6)%7)); // start week on Monday
  const weeks=[];
  for(let w=0; w<6; w++){
    const row=[];
    for(let d=0; d<7; d++){
      row.push(new Date(start));
      start.setDate(start.getDate()+1);
    }
    weeks.push(row);
  }
  return weeks;
}

export default function AdminCalendar({ reservations }){
  const [cursor, setCursor] = React.useState(()=>{ const now=new Date(); return new Date(now.getFullYear(), now.getMonth(), 1); });
  const year = cursor.getFullYear();
  const month = cursor.getMonth();
  const weeks = monthMatrix(year, month);

  // Expand ranges to set of ISO dates
  const booked = new Set();
  (reservations||[]).forEach(r=>{
    if(!r.start_date||!r.end_date) return;
    let d = new Date(r.start_date);
    const end = new Date(r.end_date);
    while(isBefore(d, end)) { // [start, end)
      booked.add(toISO(d));
      d = addDays(d, 1);
    }
  });

  const monthLabel = cursor.toLocaleDateString('es-ES', { month: 'long', year: 'numeric' });

  return (
    <div className="rounded-2xl border p-4 bg-white">
      <div className="mb-3 flex items-center justify-between">
        <button className="rounded border px-2 py-1" onClick={()=>setCursor(new Date(year, month-1, 1))}>←</button>
        <div className="font-semibold capitalize">{monthLabel}</div>
        <button className="rounded border px-2 py-1" onClick={()=>setCursor(new Date(year, month+1, 1))}>→</button>
      </div>
      <div className="grid grid-cols-7 text-xs text-gray-500 mb-1">
        {['L','M','X','J','V','S','D'].map(d=>(<div key={d} className="p-1 text-center">{d}</div>))}
      </div>
      <div className="grid grid-cols-7 gap-1">
        {weeks.flat().map((d,i)=>{
          const inMonth = d.getMonth()===month;
          const iso = toISO(d);
          const isBooked = booked.has(iso);
          return (
            <div key={i} className={`aspect-square rounded-md border text-sm flex items-center justify-center ${inMonth? 'bg-white' : 'bg-gray-50 text-gray-400'} ${isBooked? 'bg-red-100 border-red-300 text-red-800' : ''}`}>{d.getDate()}</div>
          );
        })}
      </div>
      <div className="mt-3 flex items-center gap-3 text-sm text-gray-600">
        <div className="h-4 w-4 rounded border border-red-300 bg-red-100" /> Fechas reservadas (ocupadas)
      </div>
    </div>
  );
}
