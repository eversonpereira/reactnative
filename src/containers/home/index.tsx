import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { inject, observer } from 'mobx-react';

import HomeStore from '../../stores/home.store';

interface Props {
    homeStore: HomeStore
}

@inject('homeStore')
@observer
export default class Home extends Component<Props> {
    render() {
        const { numbers, numbers2, numbers3, somar, multiplicar, increment, decrement, reset, increment2, decrement2, reset2 } = this.props.homeStore;

        return (<>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
                <Text>{numbers}</Text>
                <Text>{numbers2}</Text>
                <Button onPress={() => increment()} title="Incrementar"></Button>
                <Button onPress={() => decrement()} title="Decrementar"></Button>
                <Button onPress={() => reset()} title="Zerar"></Button>
                <Button onPress={() => increment2()} title="Incrementar2"></Button>
                <Button onPress={() => decrement2()} title="Decrementar2"></Button>
                <Button onPress={() => reset2()} title="Zerar2"></Button>
                <Button onPress={() => somar()} title="Somar"></Button>
                <Button onPress={() => multiplicar()} title="Multiplicar"></Button>
                <Text>{numbers3}</Text>
            </View>
        </>);
    }
}