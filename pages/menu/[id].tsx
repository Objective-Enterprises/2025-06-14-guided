import Link from "next/link"
import { FoodItem } from "../../types"
import Image from "next/image"

export default function DetailPage (props: {
  item: FoodItem
}) {
  const ingredients = props.item.ingredients.map((ingredient, index) => {
    return (
      <li key={index}>{ingredient}</li>
    )
  })
  return (
    <div className='dish-details-container'>
      <Link href='/menu'>Menu</Link>
      <h1>{props.item.name}</h1>
      <div className='dish-image'>
        <Image
          alt={props.item.name}
          src={props.item.image}
          height={300}
          width={400}
        />
      </div>
      <ul>
        {ingredients}
      </ul>
      <p>${props.item.price}</p>
    </div>
  )
}

export const getServerSideProps = async function (context) {
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
  const item = items.find(item => item.id === context.params.id)
  return {
    props: {
      item
    }
  }
}