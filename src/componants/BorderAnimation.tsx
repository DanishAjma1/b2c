import React from 'react'

interface Props{
    children: React.ReactNode;
    className?:string;
}
export const BorderAnimation:React.FC<Props>=({children,className})=> {
  return (
    <div className={`[background:linear-gradient(45deg,#000000,theme(colors.black)_50%,#000000)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.blue.800)_86%,_theme(colors.blue.800)_90%,_theme(colors.indigo.500)_94%,_theme(colors.slate.600/.48))_border-box] rounded-2xl border border-transparent animate-border ${className}`}>{children}</div>
  )
}
