import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import GlassCard from "../GlassCard";

const testimonials = [
  {
    id: 1,
    name: "Романов Максим",
    role: "Владелец частного дома",
    image: "avatar-1.jpg",
    quote: "Они превратили нашу территорию в настоящий рай. Внимание к деталям и понимание нашего видения превзошли все ожидания.",
    rating: 5
  },
  {
    id: 2,
    name: "Черкасов Ярослав",
    role: "Девелопер отелей",
    image: "avatar-4.jpg",
    quote: "Работа с этой командой значительно улучшила впечатления гостей нашего бутик-отеля. Ландшафт стал одной из самых фотографируемых особенностей.",
    rating: 5
  },
  {
    id: 3,
    name: "Овсянникова Виктория",
    role: "Архитектор",
    image: "avatar-2.jpg",
    quote: "Как архитектор, я требовательна к партнерам по дизайну. Их совместный подход и уважение к архитектурному контексту исключительны.",
    rating: 5
  },
  {
    id: 4,
    name: "Осипов Фёдор",
    role: "Домовладелец",
    image: "avatar-7.jpg",
    quote: "От концепции до завершения они превзошли ожидания. Наш сад теперь является центральным элементом нашего дома.",
    rating: 5
  },
  {
    id: 5,
    name: "Демидова Варвара",
    role: "Дизайнер интерьеров",
    image: "avatar-3.jpg",
    quote: "Их способность органично сочетать внутренние и внешние пространства замечательна. Настоящие мастера своего дела.",
    rating: 5
  },
  {
    id: 6,
    name: "Черкасова Александра",
    role: "Владелец ресторана",
    image: "avatar-5.jpg",
    quote: "Открытая обеденная зона, которую они создали, стала визитной карточкой нашего ресторана. Гости в восторге!",
    rating: 5
  },
  {
    id: 7,
    name: "Беляева Мария Вячеславовна",
    role: "Топ-менеджер",
    image: "avatar-6.jpg",
    quote: "Профессионально, креативно и надежно. Они превратили наш корпоративный кампус в мирный оазис.",
    rating: 5
  },
  {
    id: 8,
    name: "Захарова Елизавета",
    role: "Девелопер недвижимости",
    image: "avatar.jpg",
    quote: "Их ландшафтные проекты значительно повысили стоимость недвижимости. Ценный инвестиционный партнер.",
    rating: 5
  },
  {
    id: 9,
    name: "Дементьева Екатерина",
    role: "Владелица бутика",
    image: "avatar-8.jpg",
    quote: "Вход в сад, который они спроектировали, стал сенсацией в Instagram. Идеально подходит для имиджа нашего бренда.",
    rating: 5
  }
];

// Split testimonials into 3 columns
const column1 = [testimonials[0], testimonials[3], testimonials[6]];
const column2 = [testimonials[1], testimonials[4], testimonials[7]];
const column3 = [testimonials[2], testimonials[5], testimonials[8]];

const TestimonialCard = ({ testimonial }) => (
  <GlassCard className="p-6 mb-6 min-h-[200px]">
    <div className="flex items-center gap-1 mb-3">
      {[...Array(testimonial.rating)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-[#2d5a47] text-[#2d5a47]" />
      ))}
    </div>
    <p className="text-gray-700 text-sm leading-relaxed mb-4">
      {testimonial.quote}
    </p>
    <div className="flex items-center gap-3">
      <img
        src={testimonial.image}
        alt={testimonial.name}
        className="w-10 h-10 rounded-full object-cover"
      />
      <div>
        <p className="font-medium text-[#1a3a2f] text-sm">{testimonial.name}</p>
        <p className="text-gray-500 text-xs">{testimonial.role}</p>
      </div>
    </div>
  </GlassCard>
);

const ScrollingColumn = ({ testimonials, speed, direction = "up" }) => {
  // Duplicate testimonials for infinite scroll
  const duplicatedTestimonials = [
    ...testimonials,
    ...testimonials,
    ...testimonials,
  ];

  return (
    <div className="relative h-[600px]">
      <motion.div
        animate={{
          y: direction === "up" ? [0, -33.33 + "%"] : [-33.33 + "%", 0],
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        }}
        className="space-y-0"
      >
        {duplicatedTestimonials.map((testimonial, index) => (
          <div key={`${testimonial.id}-${index}`}>
            <TestimonialCard testimonial={testimonial} />
          </div>
        ))}
      </motion.div>

      {/* Gradient Overlays */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#f8f7f4] to-transparent pointer-events-none" />
    </div>
  );
};

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-white to-[#f8f7f4] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#2d5a47]/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#2d5a47] text-sm font-medium tracking-widest uppercase mb-4 block">
            отзывы
          </span>
          <h2 className="text-3xl md:text-5xl font-light text-[#1a3a2f]">
            Истории <span className="font-medium">клиентов</span>
          </h2>
        </motion.div>

        {/* Scrolling Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-hidden">
          {/* Column 1 - Speed: 30s */}
          <div className="hidden lg:block">
            <ScrollingColumn testimonials={column1} speed={30} />
          </div>

          {/* Column 2 - Speed: 35s */}
          <div className="hidden md:block">
            <ScrollingColumn testimonials={column2} speed={35} />
          </div>

          {/* Column 3 - Speed: 40s */}
          <ScrollingColumn testimonials={column3} speed={40} />
        </div>
      </div>
    </section>
  );
}
