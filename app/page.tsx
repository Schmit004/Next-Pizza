import { Suspense } from "react";
import { Container, Filters, Title, TopBar } from "@/components/shared";
import { ProductsGroupList } from "@/components/shared/products-group-list";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>

      <TopBar />

      <Container className="mt-10 pb-14">
        <div className="flex gap-[80px]">
          {/* Фильтрация */}
          <div className="w-[250px]">
            <Suspense>
              <Filters />
            </Suspense>
          </div>

          {/* Список товаров */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList title="Пицца" categoryId={1} items={[
                {
                  id: 1,
                  name: "Пепперони",
                  imageUrl: "/pizza.jpg",
                  types: [{ price: 500 }],
                  ingredients: ["Сырный соус", "Моццарелла", "Чеснок", "Солённые огурчики", "Красный лук", "Томаты"]
                },
                {
                  id: 2,
                  name: "Пепперони",
                  imageUrl: "/pizza.jpg",
                  types: [{ price: 500 }],
                  ingredients: ["Сырный соус", "Моццарелла", "Чеснок", "Солённые огурчики", "Красный лук", "Томаты"]
                },
                {
                  id: 3,
                  name: "Пепперони",
                  imageUrl: "/pizza.jpg",
                  types: [{ price: 500 }],
                  ingredients: ["Сырный соус", "Моццарелла", "Чеснок", "Солённые огурчики", "Красный лук", "Томаты"]
                },
                {
                  id: 4,
                  name: "Пепперони",
                  imageUrl: "/pizza.jpg",
                  types: [{ price: 500 }],
                  ingredients: ["Сырный соус", "Моццарелла", "Чеснок", "Солённые огурчики", "Красный лук", "Томаты"]
                },
                {
                  id: 5,
                  name: "Пепперони",
                  imageUrl: "/pizza.jpg",
                  types: [{ price: 500 }],
                  ingredients: ["Сырный соус", "Моццарелла", "Чеснок", "Солённые огурчики", "Красный лук", "Томаты"]
                },
                {
                  id: 6,
                  name: "Пепперони",
                  imageUrl: "/pizza.jpg",
                  types: [{ price: 500 }],
                  ingredients: ["Сырный соус", "Моццарелла", "Чеснок", "Солённые огурчики", "Красный лук", "Томаты"]
                },
              ]} />
              <ProductsGroupList title="Комбо" categoryId={2} items={[
                {
                  id: 1,
                  name: "Пепперони",
                  imageUrl: "/pizza.jpg",
                  types: [{ price: 500 }],
                  ingredients: ["Сырный соус", "Моццарелла", "Чеснок", "Солённые огурчики", "Красный лук", "Томаты"]
                },
                {
                  id: 2,
                  name: "Пепперони",
                  imageUrl: "/pizza.jpg",
                  types: [{ price: 500 }],
                  ingredients: ["Сырный соус", "Моццарелла", "Чеснок", "Солённые огурчики", "Красный лук", "Томаты"]
                },
                {
                  id: 3,
                  name: "Пепперони",
                  imageUrl: "/pizza.jpg",
                  types: [{ price: 500 }],
                  ingredients: ["Сырный соус", "Моццарелла", "Чеснок", "Солённые огурчики", "Красный лук", "Томаты"]
                },
                {
                  id: 4,
                  name: "Пепперони",
                  imageUrl: "/pizza.jpg",
                  types: [{ price: 500 }],
                  ingredients: ["Сырный соус", "Моццарелла", "Чеснок", "Солённые огурчики", "Красный лук", "Томаты"]
                },
                {
                  id: 5,
                  name: "Пепперони",
                  imageUrl: "/pizza.jpg",
                  types: [{ price: 500 }],
                  ingredients: ["Сырный соус", "Моццарелла", "Чеснок", "Солённые огурчики", "Красный лук", "Томаты"]
                },
                {
                  id: 6,
                  name: "Пепперони",
                  imageUrl: "/pizza.jpg",
                  types: [{ price: 500 }],
                  ingredients: ["Сырный соус", "Моццарелла", "Чеснок", "Солённые огурчики", "Красный лук", "Томаты"]
                },
              ]} />
            </div>
          </div>
        </div>
      </Container>
    </>

  );
}
