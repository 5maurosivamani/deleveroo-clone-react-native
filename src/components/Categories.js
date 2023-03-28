import { ScrollView, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import CategoryCard from './CategoryCard'
import SanityClient  from '../../sanity';
import { urlFor } from '../../sanity';


export default function Categories() {

  const [categories, setCategories] = useState([]);

  useEffect(()=>{
    SanityClient.fetch(`
      *[_type == "category"]
    `).then((data)=>{
      setCategories(data);
    })
  },[]);


  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{
        paddingTop:10,
        paddingHorizontal:15
    }}>

      {categories?.map(category => (
        <CategoryCard title ={category.name} imageUrl={urlFor(category.image).width(200).url()} key={category._id} />
      ))}
    </ScrollView>
  )
}