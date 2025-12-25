import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ConsultationDrawer({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    propertyType: "",
    budget: "",
    timeline: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Consultation request:", formData);
    // Handle form submission
    onClose();
  };

  return (
    <Drawer open={isOpen} onOpenChange={onClose}>
      <DrawerContent className="px-4" data-vaul-drawer-direction="right">
        <div className="overflow-y-auto">
          <DrawerHeader>
            <DrawerTitle className="text-2xl text-[#1a3a2f]">
              Заказать консультацию
            </DrawerTitle>
            <DrawerDescription>
              Давайте создадим пространство вашей мечты!
            </DrawerDescription>
          </DrawerHeader>

          <form onSubmit={handleSubmit} className="px-4 pb-4 space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Имя *</Label>
              <Input
                id="name"
                required
                placeholder="Михайлова Юлия"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="h-12 rounded-xl"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Почта *</Label>
              <Input
                id="email"
                type="email"
                required
                placeholder="julia@example.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="h-12 rounded-xl"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Номер телефона *</Label>
              <Input
                id="phone"
                required
                placeholder="+7 (555) 000-0000"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="h-12 rounded-xl"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="propertyType">Тип объекта</Label>
              <Select
                value={formData.propertyType}
                onValueChange={(value) =>
                  setFormData({ ...formData, propertyType: value })
                }
              >
                <SelectTrigger className="h-12 rounded-xl">
                  <SelectValue placeholder="Выберите тип объекта" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="residential">Частный сектор</SelectItem>
                  <SelectItem value="commercial">Коммерческая зона</SelectItem>
                  <SelectItem value="estate">Недвижимость</SelectItem>
                  <SelectItem value="public">
                    Общественное пространство
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="budget">Определите комфортный бюджет</Label>
              <Select
                value={formData.budget}
                onValueChange={(value) =>
                  setFormData({ ...formData, budget: value })
                }
              >
                <SelectTrigger className="h-12 rounded-xl">
                  <SelectValue placeholder="Укажите бюджет" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="10k-25k">10,000₽ - 25,000₽</SelectItem>
                  <SelectItem value="25k-50k">25,000₽ - 50,000₽</SelectItem>
                  <SelectItem value="50k-100k">50,000₽ - 100,000₽</SelectItem>
                  <SelectItem value="100k+">100,000₽+</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="timeline">Сроки реализации</Label>
              <Select
                value={formData.timeline}
                onValueChange={(value) =>
                  setFormData({ ...formData, timeline: value })
                }
              >
                <SelectTrigger className="h-12 rounded-xl">
                  <SelectValue placeholder="Когда вы хотели бы начать?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="asap">Как можно скорее</SelectItem>
                  <SelectItem value="1-3months">1-3 месяца</SelectItem>
                  <SelectItem value="3-6months">3-6 месяца</SelectItem>
                  <SelectItem value="6months+">6+ месяца</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Расскажите о Вашем проекте *</Label>
              <Textarea
                id="message"
                required
                placeholder="Расскажите о задумке, площади объекта и пожеланиях..."
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="min-h-[120px] rounded-xl resize-none"
              />
            </div>

            <DrawerFooter className="px-0 pt-4">
              <Button
                type="submit"
                className="w-full h-12 bg-gradient-to-r from-[#2d5a47] to-[#1a3a2f] hover:opacity-90 text-white rounded-xl text-base font-medium"
              >
                Отправить заявку
              </Button>
              <DrawerClose asChild>
                <Button variant="outline" className="w-full h-12 rounded-xl">
                  Отмена
                </Button>
              </DrawerClose>
            </DrawerFooter>
          </form>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
