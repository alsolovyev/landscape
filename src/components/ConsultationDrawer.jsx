import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ConsultationDrawer({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyType: '',
    budget: '',
    timeline: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Consultation request:', formData);
    // Handle form submission
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-in fade-in duration-200"
        onClick={onClose}
      >
        {/* Modal */}
        <div
          onClick={(e) => e.stopPropagation()}
          className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-300"
        >
          <div className="p-6 md:p-8">
            {/* Header */}
            <div className="flex items-start justify-between mb-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold text-[#1a3a2f] mb-2">
                  Забронировать консультацию
                </h2>
                <p className="text-gray-600 text-sm">
                  Давайте обсудим пространство вашей мечты
                </p>
              </div>
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors flex-shrink-0 ml-4"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="name">Полное имя *</Label>
                <Input
                  id="name"
                  required
                  placeholder="Иван Иванов"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="h-12 rounded-xl"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email адрес *</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  placeholder="ivan@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="h-12 rounded-xl"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Номер телефона *</Label>
                <Input
                  id="phone"
                  required
                  placeholder="+7 (999) 123-45-67"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="h-12 rounded-xl"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="propertyType">Тип недвижимости</Label>
                <Select
                  value={formData.propertyType}
                  onValueChange={(value) => setFormData({ ...formData, propertyType: value })}
                >
                  <SelectTrigger className="h-12 rounded-xl">
                    <SelectValue placeholder="Выберите тип недвижимости" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="residential">Жилая</SelectItem>
                    <SelectItem value="commercial">Коммерческая</SelectItem>
                    <SelectItem value="estate">Поместье</SelectItem>
                    <SelectItem value="public">Общественное пространство</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="budget">Диапазон бюджета</Label>
                <Select
                  value={formData.budget}
                  onValueChange={(value) => setFormData({ ...formData, budget: value })}
                >
                  <SelectTrigger className="h-12 rounded-xl">
                    <SelectValue placeholder="Выберите диапазон бюджета" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                    <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                    <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                    <SelectItem value="100k+">$100,000+</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="timeline">Сроки проекта</Label>
                <Select
                  value={formData.timeline}
                  onValueChange={(value) => setFormData({ ...formData, timeline: value })}
                >
                  <SelectTrigger className="h-12 rounded-xl">
                    <SelectValue placeholder="Когда хотите начать?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="asap">Как можно скорее</SelectItem>
                    <SelectItem value="1-3months">1-3 месяца</SelectItem>
                    <SelectItem value="3-6months">3-6 месяцев</SelectItem>
                    <SelectItem value="6months+">Более 6 месяцев</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Расскажите о вашем проекте *</Label>
                <Textarea
                  id="message"
                  required
                  placeholder="Опишите ваше видение, размер участка и любые особые требования..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="min-h-[120px] rounded-xl resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full h-12 bg-gradient-to-r from-[#2d5a47] to-[#1a3a2f] hover:opacity-90 text-white rounded-xl text-base font-medium"
              >
                Отправить заявку
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
