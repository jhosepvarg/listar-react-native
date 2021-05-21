import React, { useState, useEffect } from 'react'
import { View, Text, FlatList } from 'react-native'
import { isRequired } from 'react-native/Libraries/DeprecatedPropTypes/DeprecatedColorPropType';
import { obternerProductos } from '../service/index'

export default function FirstView() {

    const [products, setProducts] = useState([]);

    const cargarProductos = async () => {

        const resultado = await obternerProductos();
        if (resultado && resultado.data) {

            setProducts(resultado.data.products);
        }

    }

    useEffect(() => {

        cargarProductos();

    }, [])

    const renderItem = ({ item }) => {
        console.log(item);
        return (
            <View>

                <Text>Id: {item.id_producto} </Text>
                <Text>Nombre {item.nombre} </Text>
                <Text>valor: {item.valor} </Text>
                <Text>Desscripcion: {item.descripcion} </Text>


            </View>
        )
    }


    return (
        <View>

            <FlatList
                data={products}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
            />

        </View>
    )
}
