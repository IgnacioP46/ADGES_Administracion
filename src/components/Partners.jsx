import React from 'react';
import { Scale, CheckCircle } from 'lucide-react';

const Partners = () => (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 h-full">
        <h3 className="font-bold text-lg mb-6 text-center text-brand-DEFAULT">Socios Estratégicos</h3>
        <div className="grid grid-cols-2 gap-8 items-center justify-items-center opacity-80 h-full">
            <div className="text-center group cursor-pointer flex flex-col items-center">
                <div className="h-20 w-20 bg-gray-100 rounded-full flex items-center justify-center mb-2 text-brand-DEFAULT group-hover:bg-brand-gold group-hover:text-white transition">
                    <Scale size={40}/>
                </div>
                <span className="text-xs font-bold text-gray-500 group-hover:text-brand-DEFAULT">Ilustre Colegio de Abogados</span>
            </div>
            <div className="text-center group cursor-pointer flex flex-col items-center">
                <div className="h-20 w-20 bg-gray-100 rounded-full flex items-center justify-center mb-2 text-brand-DEFAULT group-hover:bg-brand-gold group-hover:text-white transition">
                    <CheckCircle size={40}/>
                </div>
                <span className="text-xs font-bold text-gray-500 group-hover:text-brand-DEFAULT">Admin. de Fincas Colegiados</span>
            </div>
        </div>
    </div>
);

export default Partners;