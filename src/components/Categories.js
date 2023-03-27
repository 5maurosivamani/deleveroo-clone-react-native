import { ScrollView, Text } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

export default function Categories() {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{
        paddingTop:10,
        paddingHorizontal:15
    }}>
      <CategoryCard title ="Testing" imageUrl="https://links.papareact.com/gn7"/>
      <CategoryCard title ="Testing" imageUrl="https://links.papareact.com/gn7"/>
      <CategoryCard title ="Testing" imageUrl="https://links.papareact.com/gn7"/>
      <CategoryCard title ="Testing" imageUrl="https://links.papareact.com/gn7"/>
      <CategoryCard title ="Testing" imageUrl="https://links.papareact.com/gn7"/>
      <CategoryCard title ="Testing" imageUrl="https://links.papareact.com/gn7"/>

    </ScrollView>
  )
}