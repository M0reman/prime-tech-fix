
import React, { useEffect, useState } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';
import ContactCard from '@/components/common/ContactCard';
import { Search } from 'lucide-react';

interface FaqCategory {
  title: string;
  items: {
    question: string;
    answer: React.ReactNode;
  }[];
}

const Faq: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const [searchQuery, setSearchQuery] = useState('');
  
  const faqCategories: FaqCategory[] = [
    {
      title: "Общие вопросы",
      items: [
        {
          question: "Сколько времени занимает диагностика?",
          answer: (
            <p>
              В нашем сервисном центре осуществляется БЕСПЛАТНАЯ ДИАГНОСТИКА.
              Сроки осуществления составляют от 15 минут до 1 часа в зависимости от устройства и сложности неисправности.
              Для некоторых случаев может потребоваться углубленная диагностика, которая занимает до 24 часов.
            </p>
          )
        },
        {
          question: "Предоставляете ли вы гарантию на ремонт?",
          answer: (
            <div>
              <p className="mb-2">
                Гарантия на ремонт от 3 месяцев до 24 месяцев, в зависимости от зап. частей, сложности ремонта и оборудования.
                Уточнять у мастера при выдаче техники. Обязательно сохраняйте гарантийный талон.
              </p>
            </div>
          )
        },
        {
          question: "Предоставляете ли вы услугу выездного ремонта?",
          answer: (
            <p>
              Да, мы предоставляем услугу выезда мастера на дом для диагностики и ремонта крупной техники: телевизоров, спец. техники, ЧПУ станков, блоков ЭБУ и т.д.
              Выезд мастера можно заказать по телефону или через форму на нашем сайте.
              Стоимость выезда зависит от района города.
            </p>
          )
        },
        {
          question: "Может ли ребенок сдать или забрать технику с ремонта? ",
          answer: (
            <p>
              Нет, мы не принимаем и не выдаем технику лицам, не достигшим 18 лет.
            </p>
          )
        }
      ]
    },
    {
      title: "Ремонт смартфонов и планшетов",
      items: [
        {
          question: "Что делать, если мой телефон упал в воду?",
          answer: (
            <div>
              <p className="mb-2">
                Если ваш телефон попал в воду, необходимо:
              </p>
              <ol className="list-decimal pl-5 space-y-1">
                <li>Немедленно выключить устройство</li>
                <li>Извлечь SIM-карту и карту памяти</li>
                <li>Не пытаться включить или заряжать устройство</li>
                <li>Как можно скорее обратиться в наш сервисный центр</li>
              </ol>
              <p className="mt-2">
                Мы проведем профессиональную чистку от окислений, просушку компонентов и проверку работоспособности.
              </p>
            </div>
          )
        },
        {
          question: "Можно ли восстановить данные с разбитого телефона?",
          answer: (
            <p>
              В большинстве случаев да. Если внутренняя память устройства не повреждена, мы можем восстановить данные 
              даже с устройств с сильными физическими повреждениями. Степень возможности восстановления мы определим 
              после диагностики. Рекомендуем регулярно создавать резервные копии важных данных.
            </p>
          )
        },
        {
          question: "Используете ли вы оригинальные запчасти?",
          answer: (
            <p>
              Да, для большинства брендов мы используем оригинальные запчасти. Если оригинальные детали недоступны, 
              мы предлагаем качественные аналоги от проверенных производителей. При оформлении заказа вы можете 
              выбрать предпочтительный вариант запчастей, и мы обязательно учтем ваши пожелания.
            </p>
          )
        }
      ]
    },
    {
      title: "Ремонт ноутбуков и компьютеров",
      items: [
        {
          question: "Как часто нужно чистить ноутбук от пыли?",
          answer: (
            <p>
              Рекомендуется проводить профилактическую чистку ноутбука от пыли и замену термопасты каждые 12-18 месяцев. 
              Если вы используете ноутбук в запыленных помещениях или замечаете признаки перегрева (шум вентилятора, 
              нагрев корпуса), стоит обратиться в сервис раньше. Регулярная чистка продлевает срок службы устройства.
            </p>
          )
        },
        {
          question: "Можно ли увеличить производительность старого компьютера?",
          answer: (
            <div>
              <p className="mb-2">
                Да, существует несколько способов модернизации:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Установка SSD вместо HDD значительно ускорит загрузку системы и программ</li>
                <li>Увеличение объема оперативной памяти улучшит многозадачность</li>
                <li>Замена процессора или видеокарты (если позволяет материнская плата)</li>
                <li>Переустановка операционной системы и оптимизация программного обеспечения</li>
              </ul>
              <p className="mt-2">
                Наши специалисты проведут диагностику и предложат оптимальные варианты модернизации именно для вашего компьютера.
              </p>
            </div>
          )
        },
        {
          question: "Что делать, если компьютер не включается?",
          answer: (
            <p>
              Если компьютер не включается, не пытайтесь ремонтировать его самостоятельно. Причин может быть много: 
              от неисправности блока питания до проблем с материнской платой. Принесите устройство в наш сервисный центр 
              для диагностики. Мы быстро определим причину неисправности и предложим оптимальное решение проблемы.
            </p>
          )
        }
      ]
    },
    {
      title: "Ремонт бытовой техники",
      items: [
        {
          question: "Выезжаете ли вы на дом для ремонта крупной бытовой техники?",
          answer: (
            <p>
              Да, мы предоставляем услугу выезда мастера на дом для диагностики и ремонта крупной бытовой техники: 
              стиральных и посудомоечных машин, холодильников, телевизоров и т.д. Выезд мастера можно заказать по 
              телефону или через форму на нашем сайте. Стоимость выезда зависит от района города.
            </p>
          )
        },
        {
          question: "Как долго ждать запчасти для ремонта бытовой техники?",
          answer: (
            <p>
              Сроки поставки запчастей зависят от модели техники и сложности детали. Распространенные запчасти для 
              популярных моделей обычно есть в наличии, и ремонт может быть выполнен в течение 1-2 дней. В случае 
              редких моделей или сложных компонентов срок поставки может составлять от 3 до 14 дней. Мы всегда 
              информируем клиентов о сроках заранее.
            </p>
          )
        },
        {
          question: "Можно ли отремонтировать технику старше 10 лет?",
          answer: (
            <p>
              В большинстве случаев да. Мы ремонтируем технику вне зависимости от возраста при условии наличия 
              запчастей или возможности их заказа. Для очень старых моделей мы можем предложить альтернативные 
              решения или подобрать аналоги деталей. После диагностики мы сообщим вам о возможности ремонта и 
              его целесообразности в сравнении со стоимостью новой техники.
            </p>
          )
        }
      ]
    }
  ];
  
  const filteredFaq = faqCategories.map(category => ({
    ...category,
    items: category.items.filter(item => 
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
      (typeof item.answer === 'string' && item.answer.toLowerCase().includes(searchQuery.toLowerCase()))
    )
  })).filter(category => category.items.length > 0);

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20">
        <div className="container px-4">
          <div className="text-center mb-12">
            <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4">
              FAQ
            </span>
            <h1 className="heading-lg mb-4">Часто задаваемые вопросы</h1>
            <p className="body-lg text-muted-foreground max-w-3xl mx-auto">
              Ответы на самые распространенные вопросы о наших услугах и процессе ремонта
            </p>
          </div>
          
          <div className="max-w-xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
              <Input
                type="text"
                placeholder="Поиск по вопросам..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          
          {filteredFaq.length > 0 ? (
            filteredFaq.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-10">
                <h2 className="text-2xl font-semibold mb-6">{category.title}</h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {category.items.map((item, itemIndex) => (
                    <AccordionItem 
                      key={itemIndex} 
                      value={`item-${categoryIndex}-${itemIndex}`}
                      className="bg-background border border-border rounded-lg shadow-sm overflow-hidden"
                    >
                      <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-muted/20">
                        <span className="text-left font-medium">{item.question}</span>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 py-4 text-muted-foreground">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold mb-2">По вашему запросу ничего не найдено</h3>
              <p className="text-muted-foreground mb-6">
                Попробуйте изменить поисковый запрос или задайте ваш вопрос напрямую
              </p>
              <Button asChild>
                <Link to="/contact">Задать вопрос</Link>
              </Button>
            </div>
          )}
          
          <div className="bg-secondary/50 rounded-xl p-8 text-center mt-16">
            <h2 className="text-2xl font-semibold mb-4">Не нашли ответ на свой вопрос?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Если вы не нашли ответ на свой вопрос, свяжитесь с нами любым удобным способом. 
              Наши специалисты всегда готовы помочь и проконсультировать вас.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild>
                <Link to="/contact">Задать вопрос</Link>
              </Button>
              <Button variant="outline" asChild>
                <a href="tel:+79297474511">
                  8 (929) 747-45-11
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-10">
        <div className="container px-4">
          <ContactCard />
        </div>
      </section>
    </div>
  );
};

export default Faq;
