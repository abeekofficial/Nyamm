"use client"

import Button from "../ui/button"
import { Clock, MapPin, Star, ChevronLeft, ChevronRight } from "lucide-react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/effect-fade"

export const FoodDeliveryBanner = () => {
  const slides = [
    {
      title: "Mazali Pizza",
      subtitle: "Italiya taomlarining eng yaxshisi",
      description: "Yangi pishirilgan, issiq pizza 30 daqiqada uyingizda",
      image: "/pizza.png",
      badge: "Eng mashhur",
      discount: "20% chegirma",
    },
    {
      title: "Yangi Sushi",
      subtitle: "Yaponiya oshxonasi",
      description: "Professional oshpazlar tomonidan tayyorlangan sushi va rolllar",
      image: "/sushi.png",
      badge: "Yangi",
      discount: "Bepul yetkazish",
    },
    {
      title: "Shirin Burgerlar",
      subtitle: "Amerikan klassikasi",
      description: "Sifatli go'sht va yangi sabzavotlar bilan tayyorlangan",
      image: "/salad.png",
      badge: "Ommabop",
      discount: "2+1 aksiya",
    },
  ]

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        pagination={{
          el: ".swiper-pagination-custom",
          clickable: true,
        }}
        className="w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32">
              <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
                {/* Content */}
                <div className="space-y-6 lg:space-y-8">
                  <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                    <Star className="h-4 w-4 fill-primary" />
                    <span>{slide.badge}</span>
                  </div>

                  <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl text-balance">
                    {slide.title} <span className="text-primary">tez yetkazib</span> beramiz
                  </h1>

                  <p className="text-lg text-muted-foreground md:text-xl text-pretty max-w-xl">{slide.description}</p>

                  {/* Discount Badge */}
                  <div className="inline-flex items-center gap-2 rounded-lg bg-secondary px-6 py-3 text-base font-bold text-secondary-foreground">
                    {slide.discount}
                  </div>

                  {/* Features */}
                  <div className="flex flex-wrap gap-6">
                    <div className="flex items-center gap-2 text-foreground">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary/20">
                        <Clock className="h-5 w-5 text-secondary" />
                      </div>
                      <div>
                        <p className="font-semibold">30 daqiqa</p>
                        <p className="text-sm text-muted-foreground">Tez yetkazish</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-foreground">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/20">
                        <MapPin className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <p className="font-semibold">Bepul yetkazish</p>
                        <p className="text-sm text-muted-foreground">50,000 so'mdan</p>
                      </div>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col gap-4 sm:flex-row">
                    <Button variant="ghost" className="text-base font-semibold">
                      Buyurtma berish
                    </Button>
                    <Button variant="outline" className="text-base font-semibold bg-transparent">
                      Menyuni ko'rish
                    </Button>
                  </div>

                  {/* Stats */}
                  <div className="flex flex-wrap gap-8 pt-4 border-t border-border">
                    <div>
                      <p className="text-3xl font-bold text-foreground">500+</p>
                      <p className="text-sm text-muted-foreground">Taomlar</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-foreground">10K+</p>
                      <p className="text-sm text-muted-foreground">Mijozlar</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-foreground">4.9</p>
                      <p className="text-sm text-muted-foreground">Reyting</p>
                    </div>
                  </div>
                </div>

                {/* Image */}
                <div className="relative">
                  <div className="relative aspect-square overflow-hidden rounded-3xl bg-muted shadow-2xl">
                    <img
                      src={slide.image || "/placeholder.svg"}
                      alt={slide.title}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  {/* Floating Badge */}
                  <div className="absolute -right-4 top-1/2 -translate-y-1/2 rounded-2xl bg-card p-4 shadow-lg border border-border">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                        <Clock className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="font-bold text-foreground">30 daq</p>
                        <p className="text-xs text-muted-foreground">Yetkazish</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button className="swiper-button-prev-custom absolute left-4 top-1/2 z-10 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-card/80 backdrop-blur-sm shadow-lg border border-border hover:bg-card transition-colors">
        <ChevronLeft className="h-6 w-6 text-foreground" />
      </button>
      <button className="swiper-button-next-custom absolute right-4 top-1/2 z-10 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-card/80 backdrop-blur-sm shadow-lg border border-border hover:bg-card transition-colors">
        <ChevronRight className="h-6 w-6 text-foreground" />
      </button>

      <div className="swiper-pagination-custom !bottom-8" />

      {/* Decorative Elements */}
      <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-accent/5 blur-3xl pointer-events-none" />

      <style jsx global>{`
        .swiper-pagination-custom .swiper-pagination-bullet {
          background: hsl(var(--muted-foreground));
          opacity: 0.5;
          width: 12px;
          height: 12px;
        }
        .swiper-pagination-custom .swiper-pagination-bullet-active {
          background: hsl(var(--primary));
          opacity: 1;
        }
      `}</style>
    </section>
  )
}
