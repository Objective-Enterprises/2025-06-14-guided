import { FoodItem } from "../../types"
import Image from "next/image"

export default function MenuPage (props: {
  items: FoodItem[]
}) {
  const items = props.items.map(item => {
    return (
      <div className="menu-item" key={item.id}>
        <Image alt={item.name} src={item.image} height={65} width={100} />
        <h2>{item.name}</h2>
        <p>${item.price}</p>
      </div>
    )
  })
  return (
    <div className='container'>
      <h1>Menu</h1>
      {items}
    </div>
  )
}

export const getServerSideProps = async () => {
  const items: FoodItem[] = [
    {
      id: '1',
      name: 'Burger',
      description: 'An american classic',
      image: '/images/burger.jpg',
      ingredients: ['Bread', 'Cheese', 'Beef'],
      price: 10
    },
    {
      id: '2',
      name: 'Pasta',
      description: 'In sauce',
      image: '/images/pasta.jpg',
      ingredients: ['Flour', 'Salt', 'Eggs'],
      price: 15
    },
    {
      id: '3',
      name: 'Pizza',
      description: 'By the pan',
      image: '/images/pizza.jpg',
      ingredients: ['Bread', 'Tomatoes', 'Cheese'],
      price: 20
    }
  ]

  return {
    props: {
      items
    }
  }
}