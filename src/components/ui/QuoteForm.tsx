import React, { useState } from 'react';
import { Button } from './Button';
import { Input, Select } from './Input';
import { ShieldCheck, MessageSquare, ClipboardCheck, ArrowRight, ArrowLeft } from 'lucide-react';

export const QuoteForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    serviceCategory: 'bird-safety',
    customSize: '150',
    city: 'Bangalore',
    name: '',
    phone: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateStep = () => {
    const newErrors: { [key: string]: string } = {};
    if (step === 2) {
      const sizeNum = Number(formData.customSize);
      if (!formData.customSize || isNaN(sizeNum) || sizeNum <= 0) {
        newErrors.customSize = 'Please enter a valid area size in sq.ft.';
      }
    }
    if (step === 3) {
      if (!formData.name.trim()) newErrors.name = 'Name is required';
      if (!formData.phone.trim() || formData.phone.length < 10) {
        newErrors.phone = 'Please enter a valid 10-digit phone number';
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) setStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setStep((prev) => Math.max(1, prev - 1));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep()) return;
    setIsSubmitted(true);
  };

  const triggerWhatsAppRedirect = () => {
    const textMessage = `Hello Aniruddaya Enterprises, I would like to request a free site measurement and customized quotation:\n\n` +
      `- Category: ${formData.serviceCategory === 'bird-safety' ? 'Bird/Child Nets' : formData.serviceCategory === 'invisible-grill' ? 'Invisible Grills' : 'Sports/Industrial Nets'}\n` +
      `- Approximate Size: ${formData.customSize} Sq.Ft.\n` +
      `- Zone: ${formData.city}\n` +
      `- Name: ${formData.name}\n` +
      `- Phone: ${formData.phone}\n\n` +
      `Please contact me to schedule a free physical measurement inspection and provide a detailed quotation.`;

    const encodedText = encodeURIComponent(textMessage);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=+919550779976&text=${encodedText}`;
    window.open(whatsappUrl, '_blank');
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-3xl p-6 md:p-10 border border-slate-100 shadow-xl shadow-slate-200/50 text-center flex flex-col items-center">
        <div className="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mb-6">
          <ClipboardCheck className="w-8 h-8" />
        </div>
        <h3 className="font-display font-bold text-2xl text-brand-primary mb-2">Request Submitted Successfully!</h3>
        <p className="text-slate-500 font-sans text-sm md:text-base max-w-sm mb-6">
          Thank you for your request. Our technical team will reach out to you shortly to discuss your custom dimensions.
        </p>

        <div className="bg-slate-50 rounded-2xl py-5 px-8 w-full max-w-sm mb-6 border border-slate-100/80">
          <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold font-display">Next Steps</span>
          <div className="text-lg md:text-xl font-display font-extrabold text-brand-primary mt-1.5 leading-snug">
            Free On-Site Inspection & Customized Quotation
          </div>
          <span className="text-[10px] text-slate-500 font-sans block mt-1.5">*Our engineer will physically inspect the site, show material samples, and provide a direct quote.</span>
        </div>

        <div className="flex flex-col gap-3 w-full max-w-sm">
          <Button variant="whatsapp" onClick={triggerWhatsAppRedirect} size="lg" fullWidth>
            <MessageSquare className="w-5 h-5 mr-2" />
            Book Free Site Visit
          </Button>
          <button 
            onClick={() => { setIsSubmitted(false); setStep(1); }}
            className="text-sm font-semibold text-slate-500 hover:text-brand-primary transition-colors py-2 font-display"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl p-6 md:p-10 border border-slate-100 shadow-xl shadow-slate-200/50">
      {/* Progress indicators */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-2">
          <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold font-display ${step >= 1 ? 'bg-brand-primary text-slate-900' : 'bg-slate-100 text-slate-500'}`}>1</div>
          <span className="text-xs font-semibold text-slate-500 font-display hidden sm:inline">Installation</span>
        </div>
        <div className="h-0.5 flex-1 bg-slate-100 mx-4">
          <div className={`h-full bg-brand-primary transition-all duration-300 ${step === 2 ? 'w-1/2' : step === 3 ? 'w-full' : 'w-0'}`}></div>
        </div>
        <div className="flex items-center gap-2">
          <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold font-display ${step >= 2 ? 'bg-brand-primary text-slate-900' : 'bg-slate-100 text-slate-500'}`}>2</div>
          <span className="text-xs font-semibold text-slate-500 font-display hidden sm:inline">Dimensions</span>
        </div>
        <div className="h-0.5 flex-1 bg-slate-100 mx-4">
          <div className={`h-full bg-brand-primary transition-all duration-300 ${step === 3 ? 'w-full' : 'w-0'}`}></div>
        </div>
        <div className="flex items-center gap-2">
          <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold font-display ${step >= 3 ? 'bg-brand-primary text-slate-900' : 'bg-slate-100 text-slate-500'}`}>3</div>
          <span className="text-xs font-semibold text-slate-500 font-display hidden sm:inline">Submit</span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        {/* Step 1: Category Selection */}
        {step === 1 && (
          <div className="flex flex-col gap-4">
            <h4 className="font-display font-bold text-xl text-brand-primary">Select Safety Service Type</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <label 
                className={`flex flex-col items-center justify-center p-5 rounded-2xl border-2 cursor-pointer transition-all duration-300 hover:border-slate-300/80 ${formData.serviceCategory === 'bird-safety' ? 'border-brand-primary bg-slate-50/50' : 'border-slate-100 bg-white'}`}
                onClick={() => setFormData({ ...formData, serviceCategory: 'bird-safety' })}
              >
                <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-brand-primary mb-3">🕸️</div>
                <span className="font-display font-bold text-brand-primary text-sm text-center">Safety / Pigeon Nets</span>
              </label>

              <label 
                className={`flex flex-col items-center justify-center p-5 rounded-2xl border-2 cursor-pointer transition-all duration-300 hover:border-slate-300/80 ${formData.serviceCategory === 'invisible-grill' ? 'border-brand-primary bg-slate-50/50' : 'border-slate-100 bg-white'}`}
                onClick={() => setFormData({ ...formData, serviceCategory: 'invisible-grill' })}
              >
                <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-brand-primary mb-3">🛡️</div>
                <span className="font-display font-bold text-brand-primary text-sm text-center">Invisible Grills</span>
              </label>

              <label 
                className={`flex flex-col items-center justify-center p-5 rounded-2xl border-2 cursor-pointer transition-all duration-300 hover:border-slate-300/80 ${formData.serviceCategory === 'sports-industrial' ? 'border-brand-primary bg-slate-50/50' : 'border-slate-100 bg-white'}`}
                onClick={() => setFormData({ ...formData, serviceCategory: 'sports-industrial' })}
              >
                <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-brand-primary mb-3">⚽</div>
                <span className="font-display font-bold text-brand-primary text-sm text-center">Sports / Industrial</span>
              </label>
            </div>
            <Button type="button" onClick={handleNext} className="mt-4">
              Continue
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        )}

        {/* Step 2: Dimensions */}
        {step === 2 && (
          <div className="flex flex-col gap-5">
            <h4 className="font-display font-bold text-xl text-brand-primary">Approximate Area & Location</h4>
            
            <Input
              label="Estimated Area (Sq.Ft.)"
              id="customSize"
              type="number"
              placeholder="e.g. 150"
              value={formData.customSize}
              onChange={(e) => setFormData({ ...formData, customSize: e.target.value })}
              error={errors.customSize}
            />

            <Select
              label="Select Service Location"
              id="city"
              value={formData.city}
              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              options={[
                { value: 'Bangalore', label: 'Bangalore' },
                { value: 'Mysore', label: 'Mysore' },
              ]}
            />

            <div className="flex gap-4 mt-2">
              <Button type="button" variant="outline" onClick={handleBack} className="flex-1">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
              <Button type="button" onClick={handleNext} className="flex-1">
                Next Step
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        )}

        {/* Step 3: Contact */}
        {step === 3 && (
          <div className="flex flex-col gap-5">
            <h4 className="font-display font-bold text-xl text-brand-primary">Contact Coordinates</h4>
            
            <Input
              label="Full Name"
              id="name"
              type="text"
              placeholder="Enter your name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              error={errors.name}
            />

            <Input
              label="Mobile Number (WhatsApp Preferred)"
              id="phone"
              type="tel"
              placeholder="10-digit number"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              error={errors.phone}
            />

            <div className="bg-slate-50 rounded-2xl p-4 flex items-start gap-3 border border-slate-100">
              <ShieldCheck className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
              <p className="text-xs text-slate-500 font-sans leading-relaxed">
                <strong>Data Privacy Guarantee:</strong> We never share your phone coordinates. Generating your budget quote connects you directly with our technical rigging experts.
              </p>
            </div>

            <div className="flex gap-4">
              <Button type="button" variant="outline" onClick={handleBack} className="flex-1">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
              <Button type="submit" variant="primary" className="flex-1">
                Request Free Quote
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};
