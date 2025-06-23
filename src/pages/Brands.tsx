import React, { useState, useMemo } from "react";
import { Search, FilterX, ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

// Данные о брендах и моделях
const BRAND_DATA = [
  {
    id: "apple",
    name: "Apple",
    logo: "/brands/apple.png",
    description:
      "Apple Inc. - американская технологическая компания, производитель iPhone, iPad, Mac, Apple Watch и других устройств.",
    models: [
      {
        id: "Iphone X",
        name: "Iphone X",
        image: "/models/apple/iphone-x.jpg",
        commonProblems: [
          "Проблемы с Face ID - Заменить модуль фронтальной камеры",
          "Разбитый задний стеклянный корпус - Заменить заднее стекло",
          "Быстрый износ батареи - Заменить аккумулятор",
        ],
      },
      {
        id: "MacBook Pro",
        name: "MacBook Pro",
        image: "/models/apple/macbook-pro.jpg",
        commonProblems: [
          "Проблема Flexgate - Заменить шлейф дисплея или дисплей",
          "Неисправность клавиатуры - Заменить верхнюю панель с клавиатурой",
          "Перегрев - Очистить систему охлаждения",
        ],
      },
      {
        id: "iPad Pro",
        name: "iPad Pro",
        image: "/models/apple/Ipad-pro.jpg",
        commonProblems: [
          "Изгиб корпуса - Заменить корпус",
          "Проблемы с сенсорным экраном - Заменить дисплей",
          "Неисправность порта USB-C - Очистить или заменить порт USB-C",
        ],
      },
      {
        id: "Apple Watch Series 4",
        name: "Apple Watch Series 4",
        image: "/models/apple/apple-watch.jpg",
        commonProblems: [
          "Трещины на экране - Заменить дисплей",
          "Проблемы с батареей - Заменить аккумулятор",
          "Сбой цифровой короны - Очистить или заменить модуль короны",
        ],
      },
    ],
  },
  {
    id: "samsung",
    name: "Samsung",
    logo: "/brands/samsung.png",
    description:
      "Samsung Electronics - южнокорейская компания, один из крупнейших производителей электроники, включая смартфоны, телевизоры и бытовую технику.",
    models: [
      {
        id: "Galaxy S21 FE",
        name: "Galaxy S21 FE",
        image: "/models/samsung/s21-fe.jpg",
        commonProblems: [
          "Зелёная линия на экране - Заменить OLED-дисплей",
          "Быстрый разряд батареи - Заменить аккумулятор",
          "Неисправность порта зарядки - Очистить порт или заменить USB-C модуль",
        ],
      },
      {
        id: "Galaxy Note 20 Ultra",
        name: "Galaxy Note 20 Ultra",
        image: "/models/samsung/note20-ultra.jpg",
        commonProblems: [
          "Трещины на экране - Заменить дисплейный модуль",
          "Стилус теряет соединение или не реагирует - Замена стилуса или обновление ПО",
          "Перегрев - Очистить систему охлаждения",
        ],
      },
      {
        id: "Galaxy Tab S7",
        name: "Galaxy Tab S7",
        image: "/models/samsung/tab-s7.jpg",
        commonProblems: [
          "Неработающий сенсорный экран - Заменить дисплей",
          "Проблемы с Wi-Fi - Сбросить сетевые настройки или заменить Wi-Fi модуль",
          "Износ батареи - Заменить аккумулятор",
        ],
      },
      {
        id: "Galaxy Watch 4",
        name: "Galaxy Watch 4",
        image: "/models/samsung/smartwatch.jpg",
        commonProblems: [
          "Трещины на экране - Заменить дисплейный модуль",
          "Быстрый разряд батареи - Заменить аккумулятор",
          "Сбой датчиков здоровья - Обновить ПО или заменить сенсорный модуль",
        ],
      },
    ],
  },
  {
    id: "xiaomi",
    name: "Xiaomi",
    logo: "/brands/xiaomi.png",
    description:
      "Xiaomi Corporation - китайская компания, известная своими доступными смартфонами, планшетами, умными часами и другой электроникой с высоким качеством.",
    models: [
      {
        id: "Mi 11",
        name: "Mi 11",
        image: "/models/xiaomi/mi11.jpg",
        commonProblems: [
          "Проблемы со звуком (динамик/наушник) - Перепаять процессор или заменить его",
          "Разбитый экран - Заменить дисплейный модуль",
          "Быстрый разряд батареи - Заменить аккумулятор",
        ],
      },
      {
        id: "Redmi Note 10 Pro",
        name: "Redmi Note 10 Pro",
        image: "/models/xiaomi/note-10-pro.jpg",
        commonProblems: [
          "Зелёная линия на экране - Заменить AMOLED-дисплей",
          "Застревание на логотипе Mi - Перепрошить устройство",
          "Неисправность порта USB-C - Очистить порт или заменить USB-C модуль",
        ],
      },
      {
        id: "Pad 5",
        name: "Pad 5",
        image: "/models/xiaomi/pad5.jpg",
        commonProblems: [
          "Неработающий сенсорный экран - Перепрошить планшет или заменить дисплей",
          "Проблемы с Wi-Fi - Сбросить сетевые настройки или заменить Wi-Fi модуль",
          "Износ батареи - Заменить аккумулятор",
        ],
      },
      {
        id: "Watch S1",
        name: "Watch S1",
        image: "/models/xiaomi/watch-s1.jpg",
        commonProblems: [
          "Трещины на экране - Заменить дисплей",
          "Сбой датчиков здоровья - Обновить ПО или заменить сенсорный модуль",
          "Быстрый разряд батареи - Заменить аккумулятор",
        ],
      },
    ],
  },
  {
    id: "huawei",
    name: "Huawei",
    logo: "/brands/huawei.png",
    description:
      "Huawei Technologies - китайская компания, один из крупнейших производителей смартфонов, планшетов и носимых устройств, известная инновационными технологиями и высококачественным оборудованием.",
    models: [
      {
        id: "P30 Pro",
        name: "P30 Pro",
        image: "/models/huawei/p30-pro.jpg",
        commonProblems: [
          "Разбитый экран - Заменить дисплейный модуль",
          "Проблемы с зарядкой - Очистить или заменить порт USB-C",
          "Быстрый разряд батареи - Заменить аккумулятор",
        ],
      },
      {
        id: "Mate 20 Pro",
        name: "Mate 20 Pro",
        image: "/models/huawei/mate-20-pro.jpg",
        commonProblems: [
          "Зелёный оттенок экрана - Заменить OLED-дисплей",
          "Неработающий сенсорный экран - Перепрошить устройство или заменить дисплей",
          "Сбой Face ID - Заменить модуль фронтальной камеры",
        ],
      },
      {
        id: "Nova 5T",
        name: "Nova 5T",
        image: "/models/huawei/nova-5t.jpg",
        commonProblems: [
          "Проблемы с Wi-Fi - Сбросить сетевые настройки или заменить Wi-Fi модуль",
          "Застревание на логотипе - Перепрошить устройство через HiSuite",
          "Износ батареи - Заменить аккумулятор",
        ],
      },
      {
        id: "Watch GT 2",
        name: "Watch GT 2",
        image: "/models/huawei/watch-gt-2.jpg",
        commonProblems: [
          "Трещины на экране - Заменить дисплей",
          "Сбой датчиков здоровья - Обновить ПО или заменить сенсорный модуль",
          "Быстрый разряд батареи - Заменить аккумулятор",
        ],
      },
    ],
  },
  {
    id: "asus",
    name: "ASUS",
    logo: "/brands/asus.png",
    description:
      "ASUS - тайваньская компания, известная производством ноутбуков, смартфонов, планшетов и компьютерных комплектующих с акцентом на инновации и производительность.",
    models: [
      {
        id: "ZenFone 8",
        name: "ZenFone 8",
        image: "/models/asus/zenfone-8.jpg",
        commonProblems: [
          "Разбитый экран - Заменить AMOLED-дисплей",
          "Проблемы с зарядкой - Очистить или заменить порт USB-C",
          "Быстрый разряд батареи - Заменить аккумулятор",
        ],
      },
      {
        id: "ROG Phone 5",
        name: "ROG Phone 5",
        image: "/models/asus/rog-phone-5.jpg",
        commonProblems: [
          "Перегрев при играх - Очистить систему охлаждения или заменить термопасту",
          "Неработающий сенсорный экран - Перепрошить устройство или заменить дисплей",
          "Неисправность боковых сенсоров AirTrigger - Обновить ПО или заменить сенсорный модуль",
        ],
      },
      {
        id: "ZenPad 10",
        name: "ZenPad 10",
        image: "/models/asus/zenpad-10.jpg",
        commonProblems: [
          "Проблемы с Wi-Fi - Сбросить сетевые настройки или заменить Wi-Fi модуль",
          "Торможение системы - Перепрошить планшет или сбросить до заводских настроек",
          "Износ батареи - Заменить аккумулятор",
        ],
      },
      {
        id: "ROG Flow Z13",
        name: "ROG Flow Z13",
        image: "/models/asus/rog-flow-z13.jpg",
        commonProblems: [
          "Перегрев - Очистить систему охлаждения и заменить термопасту",
          "Проблемы с клавиатурой - Заменить клавиатуру или проверить подключение",
          "Сбой сенсорного экрана - Перепрошить устройство или заменить дисплей",
        ],
      },
    ],
  },
  {
    id: "lenovo",
    name: "Lenovo",
    logo: "/brands/lenovo.png",
    description:
      "Lenovo - китайская компания, один из ведущих производителей ноутбуков, планшетов и смартфонов, известная надежными устройствами для работы и развлечений.",
    models: [
      {
        id: "Legion 5 Pro",
        name: "Legion 5 Pro",
        image: "/models/lenovo/legion-5-pro.jpg",
        commonProblems: [
          "Перегрев - Очистить систему охлаждения и заменить термопасту",
          "Проблемы с клавиатурой - Заменить клавиатуру или проверить шлейф",
          "Износ батареи - Заменить аккумулятор",
        ],
      },
      {
        id: "ThinkPad X1 Carbon Gen 9",
        name: "ThinkPad X1 Carbon Gen 9",
        image: "/models/lenovo/thinkpad-x1-carbon-gen9.jpg",
        commonProblems: [
          "Неисправность трекпада - Заменить трекпад или обновить драйверы",
          "Проблемы с Wi-Fi - Сбросить сетевые настройки или заменить Wi-Fi модуль",
          "Сбой экрана - Заменить дисплейный модуль",
        ],
      },
      {
        id: "Tab P11 Pro",
        name: "Tab P11 Pro",
        image: "/models/lenovo/tab-p11-pro.jpg",
        commonProblems: [
          "Неработающий сенсорный экран - Перепрошить планшет или заменить дисплей",
          "Быстрый разряд батареи - Заменить аккумулятор",
          "Проблемы с зарядкой - Очистить или заменить порт USB-C",
        ],
      },
      {
        id: "K14 Plus",
        name: "K14 Plus",
        image: "/models/lenovo/k14-plus.jpg",
        commonProblems: [
          "Разбитый экран - Заменить дисплейный модуль",
          "Проблемы с зарядкой - Очистить или заменить порт USB-C",
          "Торможение системы - Перепрошить устройство или сбросить настройки",
        ],
      },
    ],
  },
  {
    id: "hp",
    name: "HP",
    logo: "/brands/hp.png",
    description:
      "HP Inc. - американская компания, ведущий производитель ноутбуков, настольных компьютеров, принтеров и другой электроники, известная надежностью и инновациями для дома и бизнеса.",
    models: [
      {
        id: "Envy x360",
        name: "Envy x360",
        image: "/models/hp/envy-x360.jpg",
        commonProblems: [
          "Проблемы с шарнирами - Заменить крышку дисплея или шарниры",
          "Быстрый разряд батареи - Заменить аккумулятор",
          "Проблемы с Wi-Fi - Сбросить сетевые настройки или заменить Wi-Fi модуль",
        ],
      },
      {
        id: "Pavilion 15",
        name: "Pavilion 15",
        image: "/models/hp/pavilion-15.jpg",
        commonProblems: [
          "Разбитый экран - Заменить дисплейный модуль",
          "Неисправность клавиатуры - Очистить или заменить клавиатуру",
          "Торможение системы - Заменить HDD на SSD или переустановить ОС",
        ],
      },
      {
        id: "ProBook 445 G10",
        name: "ProBook 445 G10",
        image: "/models/hp/probook-445-g10.jpg",
        commonProblems: [
          "Перегрев - Очистить систему охлаждения и заменить термопасту",
          "Неисправность трекпада - Заменить трекпад или обновить драйверы",
          "Износ батареи - Заменить аккумулятор",
        ],
      },
      {
        id: "OfficeJet Pro 9125e",
        name: "OfficeJet Pro 9125e",
        image: "/models/hp/officejet-pro-9125e.jpg",
        commonProblems: [
          "Замятие бумаги - Очистить лоток и ролики подачи бумаги",
          "Ошибки картриджа - Заменить картридж или обновить прошивку",
          "Проблемы с подключением - Сбросить сетевые настройки или переустановить драйверы",
        ],
      },
    ],
  },
  {
    id: "acer",
    name: "Acer",
    logo: "/brands/acer.png",
    description:
      "Acer Inc. - тайваньская компания, производитель ноутбуков, настольных компьютеров, планшетов и мониторов, известная доступными и производительными устройствами для широкого круга пользователей.",
    models: [
      {
        id: "Aspire 5",
        name: "Aspire 5",
        image: "/models/acer/aspire-5.jpg",
        commonProblems: [
          "Разбитый экран - Заменить дисплейный модуль",
          "Быстрый разряд батареи - Заменить аккумулятор",
          "Неисправность клавиатуры - Очистить или заменить клавиатуру",
        ],
      },
      {
        id: "Nitro 5",
        name: "Nitro 5",
        image: "/models/acer/nitro-5.jpg",
        commonProblems: [
          "Перегрев - Очистить систему охлаждения и заменить термопасту",
          "Проблемы с Wi-Fi - Сбросить сетевые настройки или заменить Wi-Fi модуль",
          "Торможение системы - Заменить HDD на SSD или переустановить ОС",
        ],
      },
      {
        id: "Swift 3",
        name: "Swift 3",
        image: "/models/acer/swift-3.jpg",
        commonProblems: [
          "Неисправность трекпада - Заменить трекпад или обновить драйверы",
          "Износ батареи - Заменить аккумулятор",
          "Проблемы с шарнирами - Заменить крышку дисплея или шарниры",
        ],
      },
      {
        id: "Chromebook Spin 713",
        name: "Chromebook Spin 713",
        image: "/models/acer/chromebook-spin-713.jpg",
        commonProblems: [
          "Неработающий сенсорный экран - Перепрошить устройство или заменить дисплей",
          "Проблемы с зарядкой - Очистить или заменить порт USB-C",
          "Сбой системы - Выполнить Powerwash (сброс до заводских настроек)",
        ],
      },
    ],
  },
];

// Категории устройств для фильтрации
const DEVICE_CATEGORIES = [
  { value: "all", label: "Все устройства" },
  { value: "smartphone", label: "Смартфоны" },
  { value: "tablet", label: "Планшеты" },
  { value: "laptop", label: "Ноутбуки" },
  { value: "appliance", label: "Бытовая техника" },
];

const BrandCard = ({ brand }: { brand: (typeof BRAND_DATA)[0] }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all">
      <div className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="h-16 w-16 flex items-center justify-center bg-gray-100 rounded-lg p-2">
              <img
                src={brand.logo}
                alt={brand.name}
                className="max-h-full max-w-full"
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                {brand.name}
              </h3>
              <p className="text-sm text-gray-500">
                {brand.models.length}{" "}
                {brand.models.length === 1
                  ? "модель"
                  : brand.models.length > 1 && brand.models.length < 5
                  ? "модели"
                  : "моделей"}
              </p>
            </div>
          </div>
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-blue-600 flex items-center gap-1 font-medium"
          >
            {expanded ? "Свернуть" : "Показать модели"}
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
            {brand.models.map((model) => (
              <div
                key={model.id}
                className="border rounded-lg overflow-hidden bg-gray-50"
              >
                <div className="aspect-video bg-gray-100 overflow-hidden">
                  <img
                    src={model.image}
                    alt={model.name}
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-medium text-lg mb-2">{model.name}</h4>
                  <h5 className="text-sm font-medium text-gray-700 mb-2">
                    Распространенные проблемы:
                  </h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {model.commonProblems.map((problem, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-blue-600 text-lg leading-tight">
                          •
                        </span>
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
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");

  const filteredBrands = useMemo(() => {
    if (!searchQuery && categoryFilter === "all") return BRAND_DATA;

    return BRAND_DATA.filter((brand) => {
      const matchesSearch =
        searchQuery === "" ||
        brand.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        brand.models.some((model) =>
          model.name.toLowerCase().includes(searchQuery.toLowerCase())
        );

      // В реальном проекте тут была бы фильтрация по категориям
      const matchesCategory = categoryFilter === "all";

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, categoryFilter]);

  const resetFilters = () => {
    setSearchQuery("");
    setCategoryFilter("all");
  };

  return (
    <main className="py-16 pt-32">
      {/* SEO метаданные - реализовано через title и meta-description */}
      <div className="container px-4 mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          Бренды и устройства
        </h1>
        <p className="text-lg text-gray-600 mb-8 max-w-3xl">
          Ознакомьтесь с брендами и моделями устройств, с которыми мы работаем.
          Найдите информацию о распространенных проблемах и стоимости ремонта.
        </p>

        <div className="bg-blue-50 rounded-xl p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <Input
                type="text"
                placeholder="Поиск по брендам и моделям..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 py-6 h-auto"
              />
            </div>
            <div className="w-full md:w-64">
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="py-6 h-auto">
                  <SelectValue placeholder="Тип устройства" />
                </SelectTrigger>
                <SelectContent>
                  {DEVICE_CATEGORIES.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {(searchQuery || categoryFilter !== "all") && (
              <button
                onClick={resetFilters}
                className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-50"
              >
                <FilterX size={18} />
                <span>Сбросить</span>
              </button>
            )}
          </div>
        </div>

        {filteredBrands.length === 0 ? (
          <div className="text-center py-16">
            <h3 className="text-xl font-medium mb-2">Ничего не найдено</h3>
            <p className="text-gray-600 mb-4">
              Попробуйте изменить параметры поиска или сбросить фильтры
            </p>
            <button
              onClick={resetFilters}
              className="text-blue-600 font-medium hover:text-blue-700"
            >
              Сбросить фильтры
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            {filteredBrands.map((brand) => (
              <BrandCard key={brand.id} brand={brand} />
            ))}
          </div>
        )}

        <div className="mt-12 bg-blue-600 rounded-xl p-8 text-white">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">
              Не нашли свое устройство?
            </h2>
            <p className="mb-6">
              Свяжитесь с нами, и мы подскажем, возможен ли ремонт вашего
              устройства и сколько это будет стоить.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium"
              >
                Оставить заявку
              </Link>
              <a
                href="tel:+78001234567"
                className="border border-white hover:bg-blue-700 px-6 py-3 rounded-lg font-medium"
              >
                Позвонить нам
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Brands;
