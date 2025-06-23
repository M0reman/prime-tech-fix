import React, { useState, useMemo, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, FilterX, ChevronDown } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

// Данные о брендах и моделях
const BRAND_DATA = [
  {
    id: 'apple',
    name: 'Apple',
    logo: '/brands/apple.svg',
    description: 'Apple Inc. - американская технологическая компания, производитель iPhone, iPad, Mac, Apple Watch и других устройств.',
    models: [
      { 
        id: 'iphone-15-pro',
        name: 'iPhone 15 Pro', 
        image: '/models/iphone-15-pro.jpg',
        commonProblems: [
          'Разбитый экран - замена дисплея от 15000 ₽',
          'Замена аккумулятора - от 7000 ₽',
          'Проблемы с зарядкой - диагностика бесплатно'
        ]
      },
      { 
        id: 'iphone-14',
        name: 'iPhone 14', 
        image: '/models/iphone-14.jpg',
        commonProblems: [
          'Разбитый экран - замена дисплея от 12000 ₽',
          'Замена аккумулятора - от 6000 ₽',
          'Не работает камера - ремонт от 5000 ₽'
        ]
      },
      { 
        id: 'macbook-pro',
        name: 'MacBook Pro', 
        image: '/models/macbook-pro.jpg',
        commonProblems: [
          'Замена клавиатуры - от 8000 ₽',
          'Перегрев - чистка системы охлаждения от 3000 ₽',
          'Замена SSD/RAM - от 5000 ₽'
        ]
      }
    ]
  },
  {
    id: 'samsung',
    name: 'Samsung',
    logo: '/brands/samsung.svg',
    description: 'Samsung Electronics - южнокорейская компания, один из крупнейших производителей электроники, включая смартфоны, телевизоры и бытовую технику.',
    models: [
      { 
        id: 'galaxy-s23',
        name: 'Galaxy S23', 
        image: '/models/galaxy-s23.jpg',
        commonProblems: [
          'Замена дисплея - от 13000 ₽',
          'Проблемы с батареей - от 5000 ₽',
          'Восстановление после попадания влаги - от 4000 ₽'
        ]
      },
      { 
        id: 'galaxy-tab-s9',
        name: 'Galaxy Tab S9', 
        image: '/models/galaxy-tab-s9.jpg',
        commonProblems: [
          'Замена сенсорного стекла - от 7000 ₽',
          'Не заряжается - диагностика бесплатно',
          'Программные сбои - от 2000 ₽'
        ]
      }
    ]
  },
  {
    id: 'xiaomi',
    name: 'Xiaomi',
    logo: '/brands/xiaomi.svg',
    description: 'Xiaomi Corporation - китайская компания, производитель электроники, включая смартфоны, ноутбуки и умные устройства для дома.',
    models: [
      { 
        id: 'redmi-note-12',
        name: 'Redmi Note 12', 
        image: '/models/redmi-note-12.jpg',
        commonProblems: [
          'Замена экрана - от 6000 ₽',
          'Проблемы со звуком - от 3000 ₽',
          'Замена разъема зарядки - от 3500 ₽'
        ]
      },
      { 
        id: 'mi-13',
        name: 'Mi 13', 
        image: '/models/mi-13.jpg',
        commonProblems: [
          'Замена стекла - от 8000 ₽',
          'Проблемы с камерой - от 4000 ₽',
          'Замена аккумулятора - от 4500 ₽'
        ]
      }
    ]
  },
  {
    id: 'huawei',
    name: 'Huawei',
    logo: '/brands/huawei.svg',
    description: 'Huawei Technologies Co., Ltd. - китайская компания, производитель телекоммуникационного оборудования, смартфонов и планшетов.',
    models: [
      { 
        id: 'p50-pro',
        name: 'P50 Pro', 
        image: '/models/p50-pro.jpg',
        commonProblems: [
          'Разбитый экран - от 10000 ₽',
          'Проблемы с батареей - от 4500 ₽',
          'Не включается - диагностика бесплатно'
        ]
      },
      { 
        id: 'matebook-x',
        name: 'MateBook X', 
        image: '/models/matebook-x.jpg',
        commonProblems: [
          'Проблемы с клавиатурой - от 6000 ₽',
          'Замена SSD - от 5000 ₽',
          'Чистка от пыли - от 2500 ₽'
        ]
      }
    ]
  },
  {
    id: 'asus',
    name: 'ASUS',
    logo: '/brands/asus.svg',
    description: 'ASUS - тайваньская компания, производитель компьютеров, ноутбуков, смартфонов и другой электроники.',
    models: [
      { 
        id: 'zenbook',
        name: 'ZenBook', 
        image: '/models/zenbook.jpg',
        commonProblems: [
          'Замена матрицы - от 12000 ₽',
          'Не заряжается - от 4000 ₽',
          'Апгрейд RAM/SSD - от 3000 ₽'
        ]
      },
      { 
        id: 'rog-phone',
        name: 'ROG Phone', 
        image: '/models/rog-phone.jpg',
        commonProblems: [
          'Перегрев при играх - от 3500 ₽',
          'Замена аккумулятора - от 5000 ₽',
          'Проблемы с сенсором - от 6000 ₽'
        ]
      }
    ]
  }
];

// Категории устройств для фильтрации
const DEVICE_CATEGORIES = [
  { value: 'all', label: 'Все устройства' },
  { value: 'smartphone', label: 'Смартфоны' },
  { value: 'tablet', label: 'Планшеты' },
  { value: 'laptop', label: 'Ноутбуки' },
  { value: 'appliance', label: 'Бытовая техника' },
];

const BrandCard = ({ brand }: { brand: typeof BRAND_DATA[0] }) => {
  const [expanded, setExpanded] = useState(false);
  
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all">
      <div className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="h-16 w-16 flex items-center justify-center bg-gray-100 rounded-lg p-2">
              <img src={brand.logo} alt={brand.name} className="max-h-full max-w-full" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">{brand.name}</h3>
              <p className="text-sm text-gray-500">
                {brand.models.length} {brand.models.length === 1 ? 'модель' : 
                  brand.models.length > 1 && brand.models.length < 5 ? 'модели' : 'моделей'}
              </p>
            </div>
          </div>
          <button 
            onClick={() => setExpanded(!expanded)}
            className="text-blue-600 flex items-center gap-1 font-medium"
          >
            {expanded ? 'Свернуть' : 'Показать модели'}
            <ChevronDown 
              size={18} 
              className={cn(
                "transition-transform", 
                expanded ? "rotate-180" : ""
              )} 
            />
          </button>
        </div>
        
        <div className="mt-4">
          <p className="text-gray-700">{brand.description}</p>
        </div>
        
        {expanded && (
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            {brand.models.map(model => (
              <div key={model.id} className="border rounded-lg overflow-hidden bg-gray-50">
                <div className="aspect-video bg-gray-100 overflow-hidden">
                  <img 
                    src={model.image} 
                    alt={model.name}
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-medium text-lg mb-2">{model.name}</h4>
                  <h5 className="text-sm font-medium text-gray-700 mb-2">Распространенные проблемы:</h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {model.commonProblems.map((problem, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-blue-600 text-lg leading-tight">•</span>
                        <span>{problem}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4">
                    <Link
                      to="/contact"
                      className="text-blue-600 text-sm font-medium hover:text-blue-700"
                    >
                      Заказать ремонт →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const Brands = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const filteredBrands = useMemo(() => {
    return BRAND_DATA.filter(brand => {
      const nameMatch = brand.name.toLowerCase().includes(searchQuery.toLowerCase());
      
      const modelMatch = brand.models.some(model => 
        model.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      
      const categoryMatch = categoryFilter === 'all' || 
        brand.models.some(model => {
          const modelName = model.name.toLowerCase();
          if (categoryFilter === 'smartphone') return modelName.includes('iphone') || modelName.includes('galaxy s') || modelName.includes('redmi') || modelName.includes('p50') || modelName.includes('rog phone');
          if (categoryFilter === 'tablet') return modelName.includes('tab');
          if (categoryFilter === 'laptop') return modelName.includes('macbook') || modelName.includes('matebook') || modelName.includes('zenbook');
          return false;
        });

      return (nameMatch || modelMatch) && categoryMatch;
    });
  }, [searchQuery, categoryFilter]);
  
  const resetFilters = () => {
    setSearchQuery('');
    setCategoryFilter('all');
  };

  return (
    <div className="min-h-screen pt-20">
      <Helmet>
        <title>Ремонт Apple, Samsung, Xiaomi, Huawei | Сервисный центр Prime</title>
        <meta name='description' content='Осуществляем профессиональный ремонт техники Apple, Samsung, Xiaomi, Huawei, ASUS и других брендов. Узнайте о частых неисправностях и стоимости ремонта.' />
      </Helmet>
      
      <main className="py-16 pt-32">
        <div className="container px-4 mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Бренды и устройства</h1>
            <p className="text-gray-600 mb-8">
                Мы ремонтируем технику большинства популярных брендов. Найдите свое устройство.
            </p>
            
            <div className="sticky top-20 bg-white/80 backdrop-blur-md py-4 mb-8 z-10">
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="relative flex-grow">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <Input
                            type="text"
                            placeholder="Поиск по брендам и моделям..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="pl-10 py-6 h-auto"
                        />
                    </div>
                    
                    <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                        <SelectTrigger className="w-full md:w-[200px] py-6 h-auto">
                            <SelectValue placeholder="Категория" />
                        </SelectTrigger>
                        <SelectContent>
                            {DEVICE_CATEGORIES.map(cat => (
                                <SelectItem key={cat.value} value={cat.value}>{cat.label}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    
                    {(searchQuery || categoryFilter !== 'all') && (
                        <button
                            onClick={resetFilters}
                            className="flex items-center justify-center gap-2 text-sm text-gray-600 hover:text-gray-900"
                        >
                            <FilterX size={16} />
                            <span>Сбросить</span>
                        </button>
                    )}
                </div>
            </div>
            
            <div className="grid grid-cols-1 gap-6">
                {filteredBrands.map(brand => (
                    <BrandCard key={brand.id} brand={brand} />
                ))}
            </div>
        </div>
      </main>
    </div>
  );
};

export default Brands;