"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqData = [
  {
    id: 1,
    question: "ما هي مناطق الخدمة التي تغطيها شركة القوس الماسي؟",
    answer:
      "نقدم خدماتنا في جدة وجميع مناطق المملكة العربية السعودية. مقرنا الرئيسي في جدة ولدينا فرق عمل متنقلة مدربة ومجهزة للوصول إلى جميع المناطق بسرعة وكفاءة.",
  },
  {
    id: 2,
    question: "هل تقدمون خدمة طوارئ على مدار الساعة؟",
    answer:
      "نعم، نقدم خدمة طوارئ على مدار الساعة طوال أيام الأسبوع، خاصة لخدمات التكييف المركزي والمقاولات العاجلة. فريقنا المتخصص جاهز للاستجابة السريعة في حالات الطوارئ.",
  },
  {
    id: 3,
    question: "كيف يمكنني الحصول على عرض سعر مجاني؟",
    answer:
      "يمكنكم الحصول على عرض سعر مجاني من خلال التواصل معنا عبر الهاتف، واتساب، أو ملء النموذج على موقعنا. سنقوم بإرسال فريق متخصص لمعاينة الموقع وتقديم عرض سعر مفصل خلال 24 ساعة.",
  },
  {
    id: 4,
    question: "ما هي أهمية تنظيف مجاري الهواء وهود المطابخ بشكل دوري؟",
    answer:
      "تنظيف مجاري الهواء وهود المطابخ بشكل منتظم يساهم في تحسين جودة الهواء داخل المبنى، ويقلل من تراكم الدهون والأتربة والبكتيريا، مما يحمي صحة العائلة أو العاملين ويقلل من مخاطر الحرائق. كما يساعد التنظيف الدوري في رفع كفاءة أنظمة التكييف والتهوية وإطالة عمرها الافتراضي.",
  },
  {
    id: 5,
    question: "ما هي خبرتكم في تنظيف وتعقيم التكييف المركزي؟",
    answer:
      "لدينا خبرة متخصصة وعميقة في مجال تنظيف وتعقيم مجاري الهواء وأنظمة التكييف المركزي. نستخدم أحدث التقنيات والمواد المستوردة لضمان إزالة الأتربة والبكتيريا وتحسين جودة الهواء. فريقنا مدرب ومعتمد لتنفيذ عمليات التنظيف والتعقيم بدقة واحترافية، مع تقديم تقارير مفصلة عن حالة النظام بعد كل عملية صيانة.",
  },
  {
    id: 6,
    question: "ما هي طرق الدفع المتاحة؟",
    answer:
      "نوفر طرق دفع متنوعة ومرنة تشمل الدفع النقدي، التحويل البنكي، والدفع بالتقسيط للمشاريع الكبيرة. كما نقبل جميع بطاقات الائتمان الرئيسية ونوفر خطط دفع مخصصة حسب احتياجات كل عميل.",
  },
]

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (id: number) => {
    setOpenItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1375bd] mb-4">الأسئلة الشائعة</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            إجابات شاملة على أكثر الأسئلة شيوعاً حول خدماتنا وطرق عملنا
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqData.map((faq) => (
            <Card key={faq.id} className="border-2 border-gray-100 hover:border-[#018bd2] transition-colors">
              <CardHeader className="cursor-pointer" onClick={() => toggleItem(faq.id)}>
                <CardTitle className="flex items-center justify-between text-[#1375bd] text-lg">
                  <span>{faq.question}</span>
                  {openItems.includes(faq.id) ? (
                    <ChevronUp className="w-5 h-5 text-[#018bd2]" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#018bd2]" />
                  )}
                </CardTitle>
              </CardHeader>
              {openItems.includes(faq.id) && (
                <CardContent className="pt-0">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
